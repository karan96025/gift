'use client';
import { useEffect, useRef } from 'react';

const SYMS = ['❤️', '✦', '✧', '♡', '🩷', '✨', '💛'];

export default function CursorSparkle() {
  const ref = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (!ref.current) return;
      const el = document.createElement('span');
      const off = (Math.random() - 0.5) * 22;
      el.textContent = SYMS[Math.floor(Math.random() * SYMS.length)];
      el.style.cssText = `
        position:fixed;
        left:${e.clientX + off}px;
        top:${e.clientY + off}px;
        font-size:${0.6 + Math.random() * 0.5}rem;
        pointer-events:none;
        z-index:9999;
        animation:sparkle-fade 0.65s ease-out forwards;
        will-change:transform,opacity;
        transform:translate(-50%,-50%);
      `;
      ref.current.appendChild(el);
      setTimeout(() => el.remove(), 700);
    };
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  return <div ref={ref} className="fixed inset-0 pointer-events-none" style={{ zIndex: 9998 }} />;
}
