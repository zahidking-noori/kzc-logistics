import React from 'react';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import { timeline, history } from '@/data/kzc';

export default function OurStory() {
  return (
    <Page>
      <PageHero eyebrow="Our story" title="Our journey." titleAccent="Our growth." subtitle="From small delivery services and labor support to a multi-service partner — KZC's story is one of steady, intentional expansion." image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600" />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <Reveal><p className="eyebrow">The beginning</p></Reveal>
          <Reveal delay={0.1}><p className="text-2xl leading-relaxed text-zinc-200 md:text-3xl">{history}</p></Reveal>
          <Reveal delay={0.2}><p className="mt-8 text-lg leading-relaxed text-muted">Today, KZC stands as a multi-service partner built on professionalism, flexibility, and consistent performance — positioning us for continued growth in the U.S. and beyond.</p></Reveal>
        </div>
      </section>

      <section className="border-y border-white/8 py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-5 md:px-8">
          <Reveal><p className="eyebrow">Timeline</p></Reveal>
          <Reveal delay={0.1}><h2 className="display-xl mb-16 text-4xl md:text-6xl">Milestones.</h2></Reveal>
          <div className="relative">
            <div className="absolute left-[7px] top-0 h-full w-px bg-white/10 md:left-1/2" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className={`relative pl-10 md:w-1/2 md:pl-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12'}`}>
                    <span className={`absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-[#F0FF42] md:left-auto ${i % 2 === 0 ? 'md:-right-[7px]' : 'md:-left-[7px]'}`} />
                    <p className="text-[10px] uppercase tracking-[0.24em] text-[#F0FF42]">{t.year}</p>
                    <h3 className="mt-2 text-2xl font-medium">{t.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{t.summary}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal><p className="eyebrow">Future goals</p></Reveal>
          <Reveal delay={0.1}><h2 className="display-xl max-w-4xl text-4xl md:text-6xl">Built for continued growth.</h2></Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[['Expansion','Continue adding services, resources, and trained personnel to match growing client needs.'],['Sustainability','EcoMotion — greener supply chains, EV integration, and carbon reduction.'],['Reach','Deepening presence across the U.S. and international markets.']].map(([t,d],i)=>(
              <Reveal key={t} delay={i*0.1}><div className="h-full rounded-3xl glass p-8"><h3 className="text-xl font-medium">{t}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{d}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}