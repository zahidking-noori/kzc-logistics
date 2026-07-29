import React from 'react';
import { Link } from 'react-router-dom';
import { Quote, ArrowUpRight } from 'lucide-react';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import { testimonials } from '@/data/kzc';

export default function Testimonials() {
  return (
    <Page>
      <PageHero eyebrow="Testimonials" title="Trusted by" titleAccent="clients." subtitle="What our clients say about working with KZC Logistics & Solutions LLC." image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 0.1}>
                <figure className="flex h-full flex-col rounded-3xl glass p-8">
                  <Quote className="text-[#F0FF42]" size={28} />
                  <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-zinc-100">“{t.quote}”</blockquote>
                  <figcaption className="mt-8 border-t border-white/10 pt-5 text-sm"><span className="font-medium">{t.author}</span><span className="text-muted"> · {t.location}</span></figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/12 p-8 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full hairline text-[#F0FF42]"><ArrowUpRight size={20} /></span>
                <p className="mt-6 text-lg font-medium">More testimonials coming soon.</p>
                <p className="mt-2 text-sm text-muted">As we continue serving clients across the U.S. and beyond, more stories will be shared here.</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Link to="/contact" className="btn-ion inline-flex items-center gap-2">Work with us <ArrowUpRight size={15} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}