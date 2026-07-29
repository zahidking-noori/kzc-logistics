import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowUpRight } from 'lucide-react';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import { company } from '@/data/kzc';

export default function FAQ() {
  return (
    <Page>
      <PageHero eyebrow="FAQ" title="Questions," titleAccent="answered." subtitle="Everything you need to know about working with KZC. Still have questions? We're a call away." image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <Reveal>
            <div className="flex min-h-[44vh] flex-col items-center justify-center rounded-3xl glass p-10 text-center md:p-16">
              <span className="grid h-16 w-16 place-items-center rounded-full hairline text-[#F0FF42]"><HelpCircle size={26} /></span>
              <h2 className="mt-8 text-2xl font-medium md:text-3xl">Frequently asked questions will be published here soon.</h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">We're assembling answers to the questions our clients ask most. In the meantime, our team is happy to help directly.</p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="btn-ion inline-flex items-center gap-2">Contact us <ArrowUpRight size={15} /></Link>
                <a href={`tel:${company.phoneRaw}`} className="btn-ghost">{company.phone}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}