import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import { projects } from '@/data/kzc';

const cats = ['All', 'Logistics', 'Fleet Management', 'Procurement', 'Construction'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  return (
    <Page>
      <PageHero eyebrow="Projects & case studies" title="Work that" titleAccent="moves." subtitle="A portfolio of successful projects across logistics, fleet management, procurement, and construction — for clients across the U.S." image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600" />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="mb-12 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`rounded-full px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] transition-colors ${filter === c ? 'bg-[#F0FF42] text-[#08090B]' : 'hairline text-zinc-300 hover:bg-white/5'}`}>{c}</button>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {list.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.1}>
                <div className="group overflow-hidden rounded-3xl">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.18em]">{p.category}</span>
                  </div>
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#F0FF42]">{p.location}</p>
                    <h3 className="mt-2 text-2xl font-medium">{p.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-16 grid gap-6 rounded-3xl glass p-8 md:grid-cols-2 md:items-center md:p-12">
              <h3 className="text-2xl font-medium md:text-3xl">Have a project in mind?</h3>
              <div className="md:justify-self-end"><Link to="/contact" className="btn-ion inline-flex items-center gap-2">Start a conversation <ArrowUpRight size={15} /></Link></div>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}