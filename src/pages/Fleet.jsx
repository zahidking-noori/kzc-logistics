import React from 'react';
import { Image } from '@/components/ui/image';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import { fleetCategories, fleetServices } from '@/data/kzc';

export default function Fleet() {
  return (
    <Page>
      <PageHero eyebrow="Fleet & equipment" title="Vehicles, managed" titleAccent="end to end." subtitle="Comprehensive fleet management for government and commercial operations — from acquisition and maintenance to telematics and compliance." image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal><p className="eyebrow">Complete fleet solutions</p></Reveal>
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] md:grid-cols-4">
            {fleetServices.map((f, i) => (
              <Reveal key={f} delay={i * 0.08}>
                <div className="h-full bg-[#08090B] p-8"><div className="font-display text-3xl text-[#F0FF42]/55">0{i + 1}</div><h3 className="mt-6 text-lg font-medium">{f}</h3></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-white/8 py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal><p className="eyebrow">Vehicle categories</p></Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {fleetCategories.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-3xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={c.img} alt={c.name} className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6"><h3 className="text-xl font-medium">{c.name}</h3><p className="mt-2 text-sm text-zinc-300">{c.summary}</p></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="grid gap-8 border-y border-white/8 py-12 md:grid-cols-4">
            {[['24/7','Roadside support'],['US+','International fleet'],['GSA','Gov experience'],['360°','Full lifecycle']].map(([v,l],i)=>(
              <Reveal key={l} delay={i*0.08}>
                <div className="font-display text-3xl text-[#F0FF42] md:text-4xl">{v}</div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300">{l}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}