import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import ServiceDetail from '@/components/services/ServiceDetail';
import { services, shippingServices, ecoMotion, procurementIndustries } from '@/data/kzc';

export default function Services() {
  return (
    <Page>
      <PageHero eyebrow="What we do" title="Capabilities," titleAccent="engineered." subtitle="Logistics, moving, labor, painting, maintenance, handyman, waste removal, procurement, fleet, and custom business solutions — across the U.S. and beyond." image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600" />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal><p className="eyebrow">Service matrix</p></Reveal>
          <Reveal delay={0.1}><h2 className="display-xl text-4xl md:text-6xl">Ten disciplines. One standard.</h2></Reveal>
          <Reveal delay={0.2}><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">KZC Logistics & Solutions LLC is a multi-service partner — not just logistics. From painting and handyman work to procurement, fleet, and waste removal, every service is delivered with the same commitment to quality, safety, and professionalism.</p></Reveal>
        </div>
      </section>

      <div>
        {services.map((s, i) => (
          <ServiceDetail key={s.id} service={s} index={i} />
        ))}
      </div>

      <section id="shipping" className="scroll-mt-28 border-y border-white/8 py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal><p className="eyebrow">Shipping & logistics</p></Reveal>
          <Reveal delay={0.1}><h2 className="display-xl text-4xl md:text-6xl">End-to-end freight.</h2></Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
            {shippingServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="h-full bg-[#08090B] p-8">
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{s.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="procurement" className="scroll-mt-28 py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal><p className="eyebrow">{ecoMotion.name}</p></Reveal>
              <Reveal delay={0.1}><h2 className="display-xl text-4xl md:text-6xl">Sustainable by design.</h2></Reveal>
              <Reveal delay={0.2}><p className="mt-6 text-lg leading-relaxed text-muted">{ecoMotion.summary}</p></Reveal>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {ecoMotion.stats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.08}>
                    <div className="font-display text-3xl text-[#F0FF42] md:text-4xl">{s.value}{s.suffix}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-300">{s.label}</div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div>
              <Reveal delay={0.15}><p className="eyebrow">Procurement industries</p></Reveal>
              <div className="mt-6 space-y-px overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04]">
                {procurementIndustries.map((p, i) => (
                  <Reveal key={p.name} delay={i * 0.06}>
                    <div className="bg-[#08090B] p-6"><h3 className="font-medium">{p.name}</h3><p className="mt-2 text-sm text-muted">{p.summary}</p></div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal><div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-[#F0FF42] p-8 text-[#08090B] md:p-12">
            <h3 className="text-2xl font-medium md:text-3xl">Ready to get started?</h3>
            <Link to="/quote" className="inline-flex items-center gap-2 rounded-full bg-[#08090B] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white">Request a quote <ArrowUpRight size={15} /></Link>
          </div></Reveal>
        </div>
      </section>
    </Page>
  );
}