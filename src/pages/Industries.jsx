import React from 'react';
import { Image } from '@/components/ui/image';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import { industries } from '@/data/kzc';

export default function Industries() {
  return (
    <Page>
      <PageHero eyebrow="Industries we serve" title="Built for every" titleAccent="sector." subtitle="From commercial and residential to industrial, government, transportation, and retail — KZC adapts to the demands of your industry." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((it, i) => (
              <Reveal key={it.name} delay={(i % 3) * 0.1}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image src={it.img} alt={it.name} className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#F0FF42]">0{i + 1}</span>
                    <h3 className="mt-2 text-2xl font-medium">{it.name}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}