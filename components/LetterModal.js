'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function LetterModal({ letter, isOpen, onClose }) {
  if (!letter) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Letter Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotateX: 25, y: 30 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, rotateX: 25, y: 30 }}
            transition={{ 
              duration: 0.6, 
              type: 'spring',
              stiffness: 200,
              damping: 25,
            }}
            style={{ perspective: 1200 }}
            className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6"
          >
            {/* Letter Paper */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-3xl bg-gradient-to-br from-rose-50 via-white to-pink-50 shadow-2xl"
            >
              {/* Decorative border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-rose-200/40 pointer-events-none" />

              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-rose-300/30 rounded-tl-xl" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-rose-300/30 rounded-br-xl" />

              {/* Content */}
              <div className="relative h-full overflow-y-auto p-8 sm:p-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="space-y-4"
                >
                  <h2 className="font-playfair text-3xl sm:text-4xl font-semibold italic text-rose-900 mb-6">
                    {letter.title}
                  </h2>
                  
                  <div className="text-rose-900/75 leading-8 text-base sm:text-lg whitespace-pre-line font-light">
                    {letter.text}
                  </div>

                  {/* Decorative heart at bottom */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-8 text-center text-2xl"
                  >
                    ❤️
                  </motion.div>
                </motion.div>
              </div>

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-rose-200/20 hover:bg-rose-300/30 backdrop-blur-sm border border-rose-300/40 flex items-center justify-center text-rose-700 transition-colors z-10"
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
