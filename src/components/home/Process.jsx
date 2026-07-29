import React from 'react';
import { processSteps } from '@/data/kzc';
import Reveal from '@/components/motion/Reveal';

export default function Process() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="mb-16">
          <Reveal><p className="eyebrow">How we work</p></Reveal>
          <Reveal delay={0.1}><h2 className="display-xl text-5xl md:text-7xl">A method, not<br />a guess.</h2></Reveal>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] md:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 4) * 0.08}>
              <div className="group h-full bg-[#08090B] p-8 transition-colors hover:bg-white/[0.02]">
                <div className="font-display text-5xl text-white/45 transition-colors group-hover:text-[#F0FF42]/60">{s.n}</div>
                <h3 className="mt-10 text-xl font-medium">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.summary}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}