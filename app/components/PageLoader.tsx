// app/components/PageLoader.tsx
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // On a full page reload the browser restores the previous scroll position
  // before React runs, which makes the page jerk up as it settles and snaps
  // the header logo to its scrolled "V" state on load. Opt out of automatic
  // restoration so reloads start at the top, matching a first visit. (The
  // Next.js router still handles scroll on client-side navigations.)
  useEffect(() => {
    if (typeof window === 'undefined' || !('scrollRestoration' in window.history)) {
      return;
    }
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useEffect(() => {
    let active = true;
    const cleanups: Array<() => void> = [];

    setLoading(true);
    setProgress(0);

    // Simulate progress while the page settles
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 15;
      });
    }, 100);

    const finish = () => {
      if (!active) return;
      active = false;
      clearInterval(progressInterval);
      setProgress(100);
      const hideTimeout = setTimeout(() => setLoading(false), 200);
      cleanups.push(() => clearTimeout(hideTimeout));
    };

    // Wait for eagerly-loaded (above-the-fold) images. Lazy images load on
    // scroll and must not block completion, so only track images that are
    // not marked loading="lazy".
    const checkImages = () => {
      if (!active) return;
      const images = Array.from(document.querySelectorAll('img')).filter(
        (img) => img.loading !== 'lazy'
      );
      const imagePromises = images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise<void>((resolve) => {
          const done = () => resolve();
          img.addEventListener('load', done, { once: true });
          img.addEventListener('error', done, { once: true });
          // Guard against the load/error event firing between the
          // img.complete check above and listener attachment.
          if (img.complete) resolve();
          cleanups.push(() => {
            img.removeEventListener('load', done);
            img.removeEventListener('error', done);
          });
        });
      });

      Promise.all(imagePromises).then(finish);
    };

    // Small delay to let React render images
    const startTimeout = setTimeout(checkImages, 50);

    // Hard fallback: never leave the bar stuck. Resolve on window load and
    // after a max timeout regardless of image state.
    const onWindowLoad = () => finish();
    if (document.readyState === 'complete') {
      // Page already loaded; let the image check run, but guarantee finish.
      const idle = setTimeout(finish, 1500);
      cleanups.push(() => clearTimeout(idle));
    } else {
      window.addEventListener('load', onWindowLoad, { once: true });
      cleanups.push(() => window.removeEventListener('load', onWindowLoad));
    }
    const maxTimeout = setTimeout(finish, 5000);
    cleanups.push(() => clearTimeout(maxTimeout));

    return () => {
      active = false;
      clearInterval(progressInterval);
      clearTimeout(startTimeout);
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return (
    <>
      {/* Fixed, full-width track that always overlays the page and never
          participates in layout, so mounting/unmounting the bar can't shift
          content. The bar fills the track via scaleX. */}
      <div
        aria-hidden={!loading}
        className='pointer-events-none fixed inset-x-0 top-0 z-50 h-1'
      >
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: progress / 100 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className='h-full w-full origin-left bg-neutral-900'
            />
          )}
        </AnimatePresence>
      </div>
      {children}
    </>
  );
}
