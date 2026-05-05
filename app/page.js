'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SwapCardDeck from '../components/SwapCardDeck';
import MemoryCard from '../components/MemoryCard';
import HeartsBackground from '../components/HeartsBackground';
import ScannerPanel from '../components/ScannerPanel';
import CursorSparkle from '../components/CursorSparkle';
import ScrollProgress from '../components/ScrollProgress';
import LetterModal from '../components/LetterModal';
import { useParticleBurst } from '../components/ParticleBurst';
const cards = [
  { 
    title: 'Teri Muskaan',        
    text: 'Teri muskaan meri sabse badi weakness hai… uske liye main kuch bhi kar sakta hoon.' 
  },
  { 
    title: 'Meri Peace',             
    text: 'Tu meri life ka wo hissa hai jahan sab kuch shaant ho jaata hai… bas sukoon hi sukoon.' 
  },
  { 
    title: 'Sach Bataun',               
    text: 'Main perfect nahi hoon… par tere liye best banne ki puri koshish karta hoon.' 
  },
  { 
    title: 'Forever Vibes',                      
    text: 'Mujhe future ka nahi pata… bas itna pata hai ki main tujhe har din choose karunga.' 
  },
  { 
    title: 'Only You',                   
    text: 'Duniya me hazaar log honge… par meri nazar sirf tujh pe hi rukti hai 💖' 
  },
  { 
    title: 'My Everything',                   
    text: 'Sumaa… tu sirf meri zindagi ka hissa nahi, meri poori duniya hai.\n\nTeri ek chhoti si muskaan bhi mere din ko roshan kar deti hai, aur tera dukh mujhe andar tak hila deta hai.\n\nTu kabhi akeli nahi hai bettu… main har pal tere saath hoon — kabhi ek dost banke, kabhi ek sahara banke, aur kabhi bas ek chup si parchhai banke jo hamesha tere paas khadi rehti hai.\n\nTu bas ek baar dil se yaad karke dekh… main wahi milunga ❤️\n\nTere bina sab kuch adhoora sa lagta hai… jaise zindagi me rang hi na ho.\n\nAur jab tu saath hoti hai na… to har pal ek khoobsurat yaad ban jaata hai, ek aisa ehsaas jo lafzon me poora kabhi aa hi nahi sakta.\n\nMain shayad perfect na hoon… par ek baat pakki hai — main tujhe hamesha dil se, sach me, aur bina kisi shart ke pyaar karta rahunga.\n\nI love you endlessly, meri jaan ❤️' 
  },
];

const memories = [
  { src: '/IMG_20260404_124329_918.webp', caption: 'Our sweet moment' },
  { src: '/Screenshot_2026-04-16-00-12-24-589_com.whatsapp.jpg', caption: 'Pyari si yaad' },
  { src: '/Screenshot_2026-05-05-16-35-10-639_com.gallery.player.jpg', caption: 'Cafe moment' },
  { src: '/Snapchat-1179285075.jpg', caption: 'Betu ka birthday' },
];

function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 0 }}>
      <div className="animate-aurora1 absolute -top-48 -left-48 h-[640px] w-[640px] rounded-full bg-rose-700/18 blur-[130px]" />
      <div className="animate-aurora2 absolute top-1/3 -right-64 h-[720px] w-[720px] rounded-full bg-purple-900/18 blur-[150px]" />
      <div className="animate-aurora3 absolute bottom-0 left-1/4 h-[520px] w-[520px] rounded-full bg-rose-900/22 blur-[110px]" />
      <div className="animate-aurora1 absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-fuchsia-950/16 blur-[100px]" style={{ animationDelay: '6s', animationDuration: '22s' }} />
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-4xl px-4 sm:px-6" style={{ zIndex: 10 }}>
      <div className="divider-shine" />
    </div>
  );
}

export default function HomePage() {
  const [scanState, setScanState] = useState('idle');
  const [isMusicOn, setIsMusicOn] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const audioSrc = '/Christina_Perri_-_A_Thousand_Years_CeeNaija.com_.mp3';
  const { trigger, BurstLayer } = useParticleBurst();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 70]);

  const handleStart = (e) => {
    trigger(e);
    document.getElementById('cards')?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('bgAudio')?.play().then(() => setIsMusicOn(true)).catch(() => {});
  };

  const toggleMusic = (e) => {
    trigger(e);
    const audio = document.getElementById('bgAudio');
    if (!audio) return;
    if (isMusicOn) { audio.pause(); setIsMusicOn(false); }
    else audio.play().then(() => setIsMusicOn(true)).catch(() => {});
  };

  const handleScan = (e) => {
    trigger(e);
    if (scanState !== 'idle') return;
    setScanState('loading');
    setTimeout(() => setScanState('revealed'), 1800);
  };

  return (
    <main className="relative min-h-screen overflow-hidden" style={{ background: '#0c0812' }}>
      {BurstLayer}
      <ScrollProgress />
      <CursorSparkle />
      <AmbientBackground />
      <HeartsBackground />
      <audio id="bgAudio" loop src={audioSrc} />

      {/* ── HERO ── */}
      <section className="relative flex min-h-screen items-center justify-center px-4 py-10 sm:px-6 lg:px-10" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(14px)' }}
          animate={{ opacity: 1, y: 0,  filter: 'blur(0px)'  }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: heroY }}
          className="relative z-10 max-w-3xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.28em' }}
            transition={{ duration: 1.6, delay: 0.3 }}
            className="mb-6 text-xs uppercase tracking-[0.28em] text-rose-300/50"
          >
            ✦ &nbsp; Dil se ek paigaam &nbsp; ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 1.1, delay: 0.55, type: 'spring', stiffness: 75, damping: 18 }}
            className="mb-8 font-playfair text-3xl font-semibold italic leading-tight sm:text-5xl lg:text-6xl text-shimmer"
          >
            Oee Sumaa… Sun betuu{' '}
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-block' }}
            >
              ❤️
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.95 }}
            className="mb-10 mx-auto max-w-xl text-sm leading-relaxed text-rose-200/42 sm:text-base"
          >
            Ye pyara sa page sirf meri jaan sammera liye, meethi baatein aur dil se ehsaas dene ke liye.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{ duration: 0.9, delay: 1.15 }}
            className="mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05, y: -3 }}
              onClick={handleStart}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="pulse-ring btn-glow inline-flex rounded-full px-9 py-4 text-sm font-semibold text-white tracking-widest uppercase"
            >
             Start
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={toggleMusic}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-7 py-3.5 text-xs font-semibold text-rose-200/70 backdrop-blur-sm tracking-widest uppercase transition"
            >
              {isMusicOn ? '♪ Stop Song' : '♪ Play'}
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1.0 }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-rose-300/28">scroll</p>
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
              className="text-rose-300/30 text-base"
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* ── CARDS ── */}
      <section id="cards" className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-10" style={{ zIndex: 10 }}>
        <div className="mx-auto max-w-6xl">
          <SwapCardDeck cards={cards} onOpenLetter={setSelectedLetter} />
        </div>
      </section>

      <SectionDivider />

      {/* ── MEMORIES ── */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-10" style={{ zIndex: 10 }}>
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-rose-300/45">✦ &nbsp; Cherished Moments &nbsp; ✦</p>
            <h2 className="font-playfair text-3xl font-semibold italic text-fuchsia-50 sm:text-4xl">Yaadein</h2>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {memories.map((m, i) => (
              <MemoryCard key={m.caption} src={m.src} caption={m.caption} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── SCANNER ── */}
      <section className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-10" style={{ zIndex: 10 }}>
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, type: 'spring', stiffness: 80 }}
            className="glass-card rounded-[36px] p-6 sm:p-8"
          >
            <div className="mb-8 space-y-2">
              <p className="text-xs uppercase tracking-[0.28em] text-rose-300/45">✦ &nbsp; Aakhri Surprise</p>
              <h2 className="font-playfair text-2xl font-semibold italic text-fuchsia-50 sm:text-3xl">Aakhri Surprise</h2>
              <p className="text-sm text-rose-200/50">Dil ki chhupi ek baat, scan karke zaroor dekho.</p>
            </div>
            <ScannerPanel status={scanState} onScan={handleScan} />
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* ── CLOSING ── */}
      <section className="relative px-4 pb-28 sm:px-6 lg:px-10" style={{ zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, type: 'spring', stiffness: 75 }}
          className="mx-auto max-w-3xl glass-card rounded-[36px] p-8 text-center sm:p-12"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-6 text-5xl"
          >
            ❤️
          </motion.div>
          <p className="font-playfair text-xl font-semibold italic leading-relaxed text-rose-100/90 sm:text-2xl lg:text-3xl">
Sumaa… tu sirf meri zindagi ka hissa nahi, meri poori duniya hai.
Teri ek chhoti si muskaan bhi mere din ko roshan kar deti hai, aur tera dukh mujhe andar tak hila deta hai.

Tu kabhi akeli nahi hai bettu… main har pal tere saath hoon — kabhi ek dost banke, kabhi ek sahara banke, aur kabhi bas ek chup si parchhai banke jo hamesha tere paas khadi rehti hai.
Tu bas ek baar dil se yaad karke dekh… main wahi milunga ❤️

Tere bina sab kuch adhoora sa lagta hai… jaise zindagi me rang hi na ho.
Aur jab tu saath hoti hai na… to har pal ek khoobsurat yaad ban jaata hai, ek aisa ehsaas jo lafzon me poora kabhi aa hi nahi sakta.

Main shayad perfect na hoon… par ek baat pakki hai —
main tujhe hamesha dil se, sach me, aur bina kisi shart ke pyaar karta rahunga.

I love you endlessly, meri jaan ❤️
          </p>
        </motion.div>
      </section>

      <LetterModal 
        letter={selectedLetter} 
        isOpen={selectedLetter !== null} 
        onClose={() => setSelectedLetter(null)} 
      />
    </main>
  );
}
