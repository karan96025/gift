'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export default function MemoryCard({ src, caption, index = 0 }) {
  const cardRef = useRef(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [9, -9]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-9, 9]), { stiffness: 280, damping: 28 });
  const glowX   = useTransform(rawX, [-0.5, 0.5], ['10%', '90%']);
  const glowY   = useTransform(rawY, [-0.5, 0.5], ['10%', '90%']);

  const onMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top)  / rect.height - 0.5);
  };

  const onLeave = () => { rawX.set(0); rawY.set(0); };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 44, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75, delay: index * 0.11, type: 'spring', stiffness: 90, damping: 20 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative overflow-hidden rounded-[28px] glass-card cursor-pointer"
    >
      {/* Dynamic follow-glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{
          background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(244,114,182,0.18) 0%, transparent 65%)`,
        }}
      />

      {/* Image */}
      <div className="overflow-hidden rounded-t-[28px]">
        <motion.img
          src={src}
          alt={caption}
          className="memory-image w-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        />
      </div>

      {/* Caption */}
      <div className="p-5">
        <p className="text-sm font-medium text-rose-100/80">{caption}</p>
      </div>

      {/* Bottom shimmer line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
