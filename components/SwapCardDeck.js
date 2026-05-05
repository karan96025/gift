'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useParticleBurst } from './ParticleBurst';

const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

export default function SwapCardDeck({ cards, onOpenLetter }) {
  const [cardOrder, setCardOrder] = useState(cards.map((c, i) => ({ ...c, id: i })));
  const { trigger, BurstLayer } = useParticleBurst();

  const handleCardClick = (card, e) => {
    trigger(e);
    if (onOpenLetter) {
      onOpenLetter(card);
    }
  };

  return (
    <div className="rounded-[42px] glass-card p-5 sm:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 90, damping: 18 }}
        className="mb-8 space-y-3 text-center"
      >
        <p className="text-xs uppercase tracking-[0.28em] text-rose-300/55">✦ &nbsp; Interactive Cards</p>
        <h2 className="font-playfair text-3xl font-semibold italic text-fuchsia-50 sm:text-4xl">
          Swap Your Feelings
        </h2>
        <p className="mx-auto max-w-2xl text-rose-200/45 text-sm sm:text-base">
          Click a card to read the full letter. Khul kar aa jayega dil ki baat.
        </p>
      </motion.div>

      {/* Card grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {cardOrder.map((card, i) => (
          <motion.button
            key={card.id}
            layout
            type="button"
            onClick={(e) => handleCardClick(card, e)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 250, damping: 22, delay: i * 0.07 }}
            className="relative overflow-hidden rounded-[28px] p-6 sm:p-7 text-left transition-colors duration-300 border border-white/[0.07] bg-white/[0.03] hover:border-rose-400/25 hover:bg-white/[0.055]"
          >
            {/* Top highlight glow */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.13),_transparent_65%)]" />

            <div className="relative z-10">
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-rose-500/14 border border-rose-400/22 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-rose-300">
                  Card
                </span>
                <span className="text-xs font-semibold text-rose-300/35">#{card.id + 1}</span>
              </div>
              <h3 className="mb-3 font-playfair text-xl font-semibold italic text-fuchsia-50">{card.title}</h3>
              <p className="text-rose-200/55 leading-7 text-sm line-clamp-3">{card.text}</p>
            </div>

            <motion.div
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 1.0, repeat: Infinity }}
              className="absolute bottom-4 right-4 rounded-full border border-rose-400/55 bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-300"
            >
              Click to read ✦
            </motion.div>
          </motion.button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-xs text-rose-200/30">Click on any card to read the full letter 💌</p>
      </div>
      {BurstLayer}
    </div>
  );
}
