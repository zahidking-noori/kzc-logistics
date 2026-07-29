import React from 'react';
import { Briefcase, ArrowUpRight } from 'lucide-react';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import { company } from '@/data/kzc';

const culture = ['Reliability in everything we deliver', 'Quality and safety first', 'Integrity and transparency', 'Customer-focused mindset', 'Continuous growth and learning'];

export default function Careers() {
  return (
    <Page>
      <PageHero eyebrow="Careers" title="Move your" titleAccent="career forward." subtitle="Join a team built on professionalism, flexibility, and consistent performance — and help businesses move smarter across the U.S. and beyond." image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal><p className="eyebrow">Company culture</p></Reveal>
              <Reveal delay={0.1}><h2 className="display-xl text-4xl md:text-6xl">Work that matters.</h2></Reveal>
              <Reveal delay={0.2}><p className="mt-6 max-w-md text-lg leading-relaxed text-muted">We're committed to quality, safety, and customer satisfaction — and to the people who make it possible.</p></Reveal>
            </div>
            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] sm:grid-cols-2">
              {culture.map((c, i) => (
                <Reveal key={c} delay={(i % 2) * 0.08}><div className="bg-[#08090B] p-6 text-sm text-zinc-200">{c}</div></Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-white/8 py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal>
            <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-3xl glass p-10 text-center md:p-16">
              <span className="grid h-16 w-16 place-items-center rounded-full hairline text-[#F0FF42]"><Briefcase size={26} /></span>
              <h2 className="mt-8 text-2xl font-medium md:text-3xl">Career opportunities will be posted here soon.</h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">We're always growing. Send us your resume and we'll reach out when a role matches your skills.</p>
              <a href={`mailto:${company.email}?subject=Career application`} className="btn-ion mt-8 inline-flex items-center gap-2">Submit your resume <ArrowUpRight size={15} /></a>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}