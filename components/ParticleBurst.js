'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SYMBOLS = ['❤️', '💖', '🌸', '🌺', '✨', '💫', '🌟', '💕', '🌼', '💗', '🎀', '⭐'];

function Burst({ x, y, onDone }) {
  const count = 22;
  const particles = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * 360 + Math.random() * 20 - 10;
    const distance = 55 + Math.random() * 90;
    const symbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
    const size = 14 + Math.random() * 16;
    const duration = 0.75 + Math.random() * 0.65;
    const delay = Math.random() * 0.12;
    const dx = Math.cos((angle * Math.PI) / 180) * distance;
    const dy = Math.sin((angle * Math.PI) / 180) * distance - 30;
    return { symbol, size, duration, delay, dx, dy };
  });

  useEffect(() => {
    const t = setTimeout(onDone, 1600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="pointer-events-none fixed" style={{ left: x, top: y, zIndex: 99999 }}>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
          animate={{ x: p.dx, y: p.dy, opacity: 0, scale: 1.2 }}
          transition={{ duration: p.duration, delay: p.delay, ease: [0.15, 0, 0.75, 1] }}
          style={{
            fontSize: p.size,
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            userSelect: 'none',
          }}
        >
          {p.symbol}
        </motion.div>
      ))}
    </div>
  );
}

let _nextId = 1;

export function useParticleBurst() {
  const [bursts, setBursts] = useState([]);

  const trigger = useCallback((e) => {
    let x, y;
    if (e && e.clientX != null) {
      x = e.clientX;
      y = e.clientY;
    } else if (e && e.touches?.[0]) {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      x = window.innerWidth / 2;
      y = window.innerHeight / 2;
    }
    const id = _nextId++;
    setBursts((prev) => [...prev, { id, x, y }]);
  }, []);

  const removeBurst = useCallback((id) => {
    setBursts((prev) => prev.filter((b) => b.id !== id));
  }, []);

  const BurstLayer = (
    <AnimatePresence>
      {bursts.map((b) => (
        <Burst key={b.id} x={b.x} y={b.y} onDone={() => removeBurst(b.id)} />
      ))}
    </AnimatePresence>
  );

  return { trigger, BurstLayer };
}
