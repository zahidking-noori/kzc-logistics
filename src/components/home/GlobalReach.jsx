import React from 'react';
import { Image } from '@/components/ui/image';
import { globalStats } from '@/data/kzc';
import Counter from '@/components/motion/Counter';
import Reveal from '@/components/motion/Reveal';
import Parallax from '@/components/motion/Parallax';

export default function GlobalReach() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden border-y border-white/8">
      <div className="absolute inset-0">
        <Parallax speed={0.12} className="h-[120%]">
          <Image src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600" alt="Global logistics network from orbit" className="h-full w-full object-cover" />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B] via-[#08090B]/70 to-transparent" />
      </div>
      <div className="relative z-10 w-full px-5 py-24 md:px-8">
        <div className="mx-auto max-w-[1500px]">
          <Reveal><p className="eyebrow">Global reach</p></Reveal>
          <Reveal delay={0.1}><h2 className="display-xl max-w-4xl text-5xl md:text-7xl">Local precision.<br /><span className="stroke-text">Global scale.</span></h2></Reveal>
          <Reveal delay={0.2}><p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-300">Headquartered in Alexandria, Virginia — serving Washington D.C., Maryland, Virginia, the East Coast, nationwide clients, and international destinations.</p></Reveal>
          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
            {globalStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="font-display text-4xl text-[#F0FF42] md:text-6xl"><Counter value={s.value} suffix={s.suffix} /></div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}