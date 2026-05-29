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

  useEffect(() => {
    let active = true;
    const cleanups: Array<() => void> = [];

    setLoading(true);
    setProgress(0);

    // Simulate progress while images load
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + Math.random() * 15;
      });
    }, 100);

    // Wait for images to load
    const checkImages = () => {
      const images = document.querySelectorAll('img');
      const imagePromises = Array.from(images).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise<void>((resolve) => {
          const done = () => resolve();
          img.addEventListener('load', done);
          img.addEventListener('error', done);
          cleanups.push(() => {
            img.removeEventListener('load', done);
            img.removeEventListener('error', done);
          });
        });
      });

      Promise.all(imagePromises).then(() => {
        if (!active) return;
        clearInterval(progressInterval);
        setProgress(100);
        const hideTimeout = setTimeout(() => {
          if (active) setLoading(false);
        }, 200);
        cleanups.push(() => clearTimeout(hideTimeout));
      });
    };

    // Small delay to let React render images
    const startTimeout = setTimeout(checkImages, 50);

    return () => {
      active = false;
      clearInterval(progressInterval);
      clearTimeout(startTimeout);
      cleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className='fixed top-0 left-0 z-50 h-1 bg-neutral-900 origin-left'
            style={{ width: '100vw' }}
          />
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
