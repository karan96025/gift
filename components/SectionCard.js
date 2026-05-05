import { motion } from 'framer-motion';

export default function SectionCard({ title, text, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, delay }}
      className="section-card rounded-[36px] border border-white/70 p-8 shadow-soft"
    >
      <h3 className="mb-4 text-2xl font-semibold text-slate-900">{title}</h3>
      <p className="text-slate-600 leading-7">{text}</p>
    </motion.div>
  );
}
