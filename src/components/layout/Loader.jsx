import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { company } from '@/data/kzc';

export default function Loader() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (sessionStorage.getItem('kzc_loaded')) { setProgress(100); setDone(true); return; }
    const start = performance.now();
    const dur = 1500;
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      setProgress(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else { sessionStorage.setItem('kzc_loaded','1'); setTimeout(() => setDone(true), 250); }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div className="loader-overlay" exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex flex-col items-center gap-6">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Image src={company.logo} alt="KZC" className="h-10 w-28 object-contain" fittingType="fit" />
            </motion.div>
            <div className="h-px w-48 overflow-hidden bg-white/10">
              <div className="loader-bar" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-300">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}