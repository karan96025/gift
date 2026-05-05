'use client';

import { useEffect, useState } from 'react';

const STARS = [
  { left: '5%',  top: '7%',  size: 4, dur: '3.2s', delay: '0s'   },
  { left: '14%', top: '19%', size: 3, dur: '2.6s', delay: '0.9s' },
  { left: '28%', top: '4%',  size: 5, dur: '3.8s', delay: '1.5s' },
  { left: '44%', top: '13%', size: 3, dur: '2.9s', delay: '0.4s' },
  { left: '60%', top: '6%',  size: 4, dur: '3.5s', delay: '1.2s' },
  { left: '74%', top: '21%', size: 5, dur: '2.4s', delay: '0.7s' },
  { left: '88%', top: '9%',  size: 3, dur: '3.1s', delay: '1.8s' },
  { left: '93%', top: '38%', size: 4, dur: '4.0s', delay: '0.3s' },
  { left: '2%',  top: '48%', size: 3, dur: '3.3s', delay: '2.1s' },
  { left: '82%', top: '62%', size: 5, dur: '2.7s', delay: '0.6s' },
  { left: '10%', top: '78%', size: 3, dur: '3.6s', delay: '1.4s' },
  { left: '52%', top: '86%', size: 4, dur: '2.5s', delay: '0.2s' },
  { left: '36%', top: '55%', size: 3, dur: '3.9s', delay: '1.7s' },
  { left: '68%', top: '74%', size: 4, dur: '3.0s', delay: '0.5s' },
];

const FLOATERS = [
  { left: '8%',  top: '14%', sym: '❤️', size: '1.5rem', dur: '6.2s',  delay: '0s',    opacity: 0.65 },
  { left: '21%', top: '31%', sym: '🩷', size: '1.1rem', dur: '7.8s',  delay: '1.4s',  opacity: 0.5  },
  { left: '70%', top: '18%', sym: '✦',  size: '1.3rem', dur: '5.6s',  delay: '0.8s',  opacity: 0.7  },
  { left: '57%', top: '64%', sym: '❤️', size: '1.4rem', dur: '6.9s',  delay: '0.5s',  opacity: 0.55 },
  { left: '13%', top: '69%', sym: '🩷', size: '1.0rem', dur: '7.2s',  delay: '1.1s',  opacity: 0.45 },
  { left: '84%', top: '53%', sym: '✧',  size: '1.2rem', dur: '6.4s',  delay: '1.7s',  opacity: 0.6  },
  { left: '38%', top: '87%', sym: '❤️', size: '1.1rem', dur: '8.1s',  delay: '0.3s',  opacity: 0.4  },
  { left: '91%', top: '28%', sym: '✨', size: '1.0rem', dur: '5.9s',  delay: '2.2s',  opacity: 0.55 },
  { left: '46%', top: '42%', sym: '♡',  size: '1.2rem', dur: '7.0s',  delay: '0.6s',  opacity: 0.35 },
];

const RISING_LEFTS = ['8%', '19%', '31%', '44%', '57%', '68%', '79%', '91%'];
const RISING_SYMS  = ['❤️', '🩷', '✦', '♡', '✿', '❤️', '🩷', '✦'];

export default function HeartsBackground() {
  const [rising, setRising] = useState([]);

  useEffect(() => {
    setRising(
      RISING_LEFTS.map((left, i) => ({
        id: i,
        left,
        sym: RISING_SYMS[i],
        size: `${0.85 + Math.random() * 0.75}rem`,
        dur:  `${8 + Math.random() * 9}s`,
        delay: `${Math.random() * 7}s`,
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 1 }}>
      {/* Twinkling star dots */}
      {STARS.map((s, i) => (
        <span
          key={`s${i}`}
          className="star-dot"
          style={{
            left: s.left, top: s.top,
            width: s.size, height: s.size,
            animationDuration: s.dur,
            animationDelay: s.delay,
          }}
        />
      ))}

      {/* Static floating symbols */}
      {FLOATERS.map((f, i) => (
        <span
          key={`f${i}`}
          className="heart-float"
          style={{
            left: f.left, top: f.top,
            fontSize: f.size,
            opacity: f.opacity,
            animationDuration: f.dur,
            animationDelay: f.delay,
          }}
        >
          {f.sym}
        </span>
      ))}

      {/* Rising particles */}
      {rising.map((r) => (
        <span
          key={`r${r.id}`}
          className="heart-rise"
          style={{
            left: r.left,
            fontSize: r.size,
            animationDuration: r.dur,
            animationDelay: r.delay,
          }}
        >
          {r.sym}
        </span>
      ))}
    </div>
  );
}
