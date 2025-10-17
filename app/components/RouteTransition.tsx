// app/components/RouteTransition.tsx
'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function RouteTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }} // Super fast
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
