'use client';

import { motion } from 'framer-motion';

const BURST_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];
const BURST_SYMS   = ['❤️', '🩷', '✨', '💛', '✦', '♡', '🌸', '✧'];

export default function ScannerPanel({ status, onScan }) {
  return (
    <div className="relative overflow-hidden rounded-[32px] glass-card p-5 sm:p-6">
      {/* Header bar */}
      <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] border border-white/[0.06] p-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-rose-300/55">Scanner</p>
          <p className="mt-1.5 text-xl font-semibold font-playfair italic text-fuchsia-50">Heart Check</p>
        </div>
        <motion.div
          animate={{ opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-2xl bg-rose-500/15 border border-rose-400/25 px-4 py-2 text-xs font-semibold tracking-widest text-rose-300 uppercase"
        >
          {status === 'idle' ? 'Ready' : status === 'loading' ? 'Scanning…' : 'Revealed ✦'}
        </motion.div>
      </div>

      {/* Viewport */}
      <div className="relative mt-5 min-h-[240px] overflow-hidden rounded-[24px] border border-rose-400/10 bg-gradient-to-br from-white/[0.02] via-rose-950/20 to-purple-950/20 p-5">
        {/* Grid lines */}
        <div className="absolute inset-x-0 top-1/4  h-px bg-rose-400/[0.07]" />
        <div className="absolute inset-x-0 top-1/2  h-px bg-rose-400/[0.10]" />
        <div className="absolute inset-x-0 top-3/4  h-px bg-rose-400/[0.07]" />
        <div className="absolute inset-y-0 left-1/4 w-px bg-rose-400/[0.05]" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-rose-400/[0.07]" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-rose-400/[0.05]" />

        {status === 'idle' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex h-full flex-col items-center justify-center gap-5 py-6"
          >
            <motion.p
              animate={{ opacity: [0.45, 0.85, 0.45] }}
              transition={{ duration: 2.8, repeat: Infinity }}
              className="text-sm tracking-wider text-rose-200/55"
            >
              Ready to scan your feelings…
            </motion.p>
            <motion.button
              onClick={onScan}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="btn-glow rounded-full px-7 py-3 text-sm font-semibold text-white tracking-widest uppercase"
            >
              Scan Now ✦
            </motion.button>
          </motion.div>
        )}

        {status === 'loading' && (
          <div className="relative flex h-full items-center justify-center py-8">
            <div className="scan-line" />
            {/* Second scan line with offset */}
            <div
              className="scan-line"
              style={{ animationDelay: '1s', opacity: 0.55 }}
            />
            <motion.p
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              className="text-xs uppercase tracking-[0.3em] text-rose-200/60"
            >
              Loading your surprise…
            </motion.p>
          </div>
        )}

        {status === 'revealed' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.86, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.0, type: 'spring', stiffness: 110, damping: 18 }}
            className="relative flex h-full flex-col items-center justify-center gap-6 py-6 text-center"
          >
            {/* Burst particles */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {BURST_ANGLES.map((angle, i) => (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{
                    x: Math.cos((angle * Math.PI) / 180) * 85,
                    y: Math.sin((angle * Math.PI) / 180) * 85,
                    scale: [0, 1.3, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.05, ease: 'easeOut' }}
                  style={{ position: 'absolute', fontSize: '1.25rem' }}
                >
                  {BURST_SYMS[i]}
                </motion.span>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex h-40 w-full items-center justify-center rounded-[28px] bg-rose-950/40 p-5 shadow-2xl shadow-rose-900/40"
            >
              <div className="grid gap-3 text-center">
                <div className="text-6xl">🍬🍭🍫</div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-rose-200/70">
                  Chizzi, candies, aam papad &amp; pyar
                </p>
                <p className="text-xs text-rose-200/55">
                  Bilkul teddy nahi — sirf meethi meethi surprises.
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="max-w-md text-sm leading-7 text-rose-100/85"
            >
              Ye scan aapke liye chizzi, candies, aam papad aur dil se yeh message laaye hai.
            </motion.p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
