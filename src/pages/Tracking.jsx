import React, { useState } from 'react';
import { Search, Radar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import { motion } from 'framer-motion';
import { company } from '@/data/kzc';

export default function Tracking() {
  const [id, setId] = useState('');
  const [pinged, setPinged] = useState(false);
  return (
    <Page>
      <PageHero eyebrow="Shipment tracking" title="Track your" titleAccent="shipment." subtitle="Real-time visibility into your deliveries — coming soon to KZC." image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-14 text-center">
              <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#F0FF42]/10 blur-3xl" />
              <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-full hairline text-[#F0FF42]">
                <motion.span animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}><Radar size={28} /></motion.span>
              </span>
              <h2 className="relative mt-8 text-2xl font-medium md:text-4xl">Shipment Tracking Portal</h2>
              <p className="relative mx-auto mt-4 max-w-md leading-relaxed text-muted">This feature is currently under development and will be available soon. The tracking portal is being built so you can follow every shipment in real time.</p>

              <form onSubmit={(e) => { e.preventDefault(); setPinged(true); }} className="relative mx-auto mt-10 flex max-w-md items-center gap-2 rounded-full glass-strong p-2">
                <Search size={18} className="ml-3 text-[#F0FF42]" />
                <input value={id} onChange={(e) => setId(e.target.value)} placeholder="Enter tracking number" className="min-w-0 flex-1 bg-transparent px-2 py-2.5 text-sm tracking-wide outline-none placeholder:text-zinc-300" />
                <button className="btn-ion rounded-full px-6 py-2.5 text-[10px]">Notify me</button>
              </form>
              {pinged && <p className="relative mt-4 text-sm text-[#F0FF42]">Thanks — we'll let you know as soon as tracking goes live.</p>}
              <p className="relative mt-8 text-sm text-muted">Need an update on a shipment right now? Contact us directly — <a href={`mailto:${company.email}`} className="text-[#F0FF42]">{company.email}</a> · <a href={`tel:${company.phoneRaw}`} className="text-[#F0FF42]">{company.phone}</a></p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
              <span>Looking to start a new shipment?</span>
              <Link to="/quote" className="link-arrow text-[#F0FF42]">Request a quote <ArrowUpRight size={15} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}