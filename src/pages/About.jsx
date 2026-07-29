import React from 'react';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import Counter from '@/components/motion/Counter';
import { Image } from '@/components/ui/image';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Target, Eye, ShieldCheck } from 'lucide-react';
import { mission, vision, values, whyChooseUs, history, globalStats } from '@/data/kzc';

const whyIcons = { Globe: Target, Award: ShieldCheck, Layers: Eye, Headset: ArrowUpRight };

export default function About() {
  return (
    <Page>
      <PageHero eyebrow="About us" title="A partner built on" titleAccent="trust." subtitle="KZC Logistics & Solutions LLC is a trusted provider of comprehensive logistics, maintenance, labor supply, and waste removal services — serving businesses and individuals across the United States and beyond." image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal><Image src="https://kzc-logistics.com/images/KzcAbout.png" alt="KZC team" className="aspect-[4/3] w-full rounded-3xl object-cover" /></Reveal>
            <div>
              <Reveal><p className="eyebrow">Our story</p></Reveal>
              <Reveal delay={0.1}><h2 className="display-xl text-4xl md:text-6xl">Moving smarter since day one.</h2></Reveal>
              <Reveal delay={0.2}><p className="mt-6 text-lg leading-relaxed text-muted">{history}</p></Reveal>
              <Reveal delay={0.3}><p className="mt-4 text-lg leading-relaxed text-muted">We pride ourselves on our commitment to quality, safety, and customer satisfaction. Our goal is to be your go-to partner for all your logistics and support needs.</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 py-20">
        <div className="mx-auto grid max-w-[1500px] gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] px-5 md:grid-cols-2 md:px-8">
          {[['Our Mission', mission, Target], ['Our Vision', vision, Eye]].map(([t, d, Icon], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="bg-[#08090B] p-10">
                <Icon className="text-[#F0FF42]" size={28} />
                <h3 className="mt-6 text-2xl font-medium">{t}</h3>
                <p className="mt-4 leading-relaxed text-muted">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal><p className="eyebrow">Core values</p></Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v} delay={i * 0.08}>
                <div className="h-full rounded-3xl glass p-8">
                  <div className="font-display text-4xl text-[#F0FF42]/55">0{i + 1}</div>
                  <h3 className="mt-6 text-xl font-medium">{v}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 py-20">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            {globalStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="font-display text-4xl text-[#F0FF42] md:text-5xl"><Counter value={s.value} suffix={s.suffix} /></div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal><h2 className="display-xl text-4xl md:text-6xl">Why work with us</h2></Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] md:grid-cols-4">
            {whyChooseUs.map((w, i) => {
              const Icon = whyIcons[w.icon] || ArrowUpRight;
              return (
                <Reveal key={w.title} delay={i * 0.08}>
                  <div className="h-full bg-[#08090B] p-8">
                    <Icon className="text-[#F0FF42]" size={24} />
                    <h3 className="mt-6 text-lg font-medium">{w.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{w.summary}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-3xl glass p-8 md:p-12">
              <h3 className="text-2xl font-medium md:text-3xl">Ready to partner with us?</h3>
              <Link to="/contact" className="btn-ion inline-flex items-center gap-2">Get in touch <ArrowUpRight size={15} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}