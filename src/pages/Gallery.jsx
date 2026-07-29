import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import { galleryCategories, beforeAfter } from '@/data/gallery';

export default function Gallery() {
  const allCats = ['All', ...galleryCategories.map((c) => c.name)];
  const [filter, setFilter] = useState('All');

  const visibleItems =
    filter === 'All'
      ? galleryCategories.flatMap((c) => c.items.map((it) => ({ ...it, category: c.name })))
      : galleryCategories.find((c) => c.name === filter)?.items.map((it) => ({ ...it, category: filter })) || [];

  return (
    <Page>
      <PageHero eyebrow="Gallery" title="Operations," titleAccent="in frame." subtitle="A visual look at the full range of KZC services — from painting and maintenance to logistics, fleet, and field operations." image="https://images.unsplash.com/photo-1577416412292-747c6607f055?w=1600" />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="mb-12 flex flex-wrap gap-2">
            {allCats.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] transition-colors ${filter === c ? 'bg-[#F0FF42] text-[#08090B]' : 'hairline text-zinc-300 hover:bg-white/5'}`}>{c}</button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {visibleItems.map((it, i) => (
              <Reveal key={`${it.category}-${i}`} delay={(i % 2) * 0.08}>
                <div className="group relative overflow-hidden rounded-3xl">
                  <Image src={it.img} alt={it.caption} className="aspect-[16/10] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#F0FF42]">{it.category}</span>
                    <p className="mt-2 text-base leading-snug text-zinc-200">{it.caption}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal><p className="eyebrow">Transformations</p></Reveal>
          <Reveal delay={0.1}><h2 className="display-xl text-4xl md:text-6xl">Before & after.</h2></Reveal>
          <Reveal delay={0.2}><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">The kind of work KZC delivers — real transformations in painting, maintenance, cleanup, and moving. Illustrative examples shown until real project photos are available.</p></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {beforeAfter.map((item, i) => (
              <Reveal key={item.category} delay={(i % 2) * 0.1}>
                <div className="overflow-hidden rounded-3xl glass p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image src={item.before} alt={`${item.category} — before`} className="aspect-[3/4] w-full object-cover" />
                      <span className="absolute left-3 top-3 rounded-full bg-[#08090B]/80 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-zinc-300">Before</span>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl">
                      <Image src={item.after} alt={`${item.category} — after`} className="aspect-[3/4] w-full object-cover" />
                      <span className="absolute left-3 top-3 rounded-full bg-[#F0FF42]/90 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-[#08090B]">After</span>
                    </div>
                  </div>
                  <div className="px-2 pb-2 pt-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#F0FF42]">{item.category}</span>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.caption}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl glass p-8 text-center md:flex-row md:p-12 md:text-left">
              <div>
                <h3 className="text-2xl font-medium md:text-3xl">See the work in action.</h3>
                <p className="mt-3 max-w-md text-muted">Explore our projects and request a quote — see how KZC brings these services to life for clients across the U.S.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/projects" className="btn-ghost inline-flex items-center gap-2">View projects <ArrowUpRight size={15} /></Link>
                <Link to="/quote" className="btn-ion inline-flex items-center gap-2">Request a quote <ArrowUpRight size={15} /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}