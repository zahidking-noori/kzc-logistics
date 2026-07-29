import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import { company } from '@/data/kzc';

export default function Privacy() {
  return (
    <Page>
      <PageHero eyebrow="Legal" title="Privacy policy" titleAccent="& terms." subtitle={`How ${company.name} collects, uses, and protects information.`} image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[800px] px-5 md:px-8">
          <Reveal>
            <div className="flex min-h-[40vh] flex-col items-center justify-center rounded-3xl glass p-10 text-center md:p-16">
              <span className="grid h-16 w-16 place-items-center rounded-full hairline text-[#F0FF42]"><ShieldCheck size={26} /></span>
              <h2 className="mt-8 text-2xl font-medium md:text-3xl">Our official policies are being finalized.</h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">The official Privacy Policy, Terms & Conditions, and Refund Policy for {company.name} will be published here shortly. Until then, our team is happy to answer any questions directly.</p>
              <Link to="/contact" className="btn-ion mt-8 inline-flex items-center gap-2">Contact us <ArrowUpRight size={15} /></Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 rounded-2xl border border-white/8 bg-white/[0.02] p-6 text-sm text-muted">
              <p><span className="text-zinc-200">Company:</span> {company.name}</p>
              <p className="mt-2"><span className="text-zinc-200">Address:</span> {company.addressFull}</p>
              <p className="mt-2"><span className="text-zinc-200">Email:</span> <a href={`mailto:${company.email}`} className="text-[#F0FF42]">{company.email}</a></p>
              <p className="mt-2"><span className="text-zinc-200">Phone:</span> <a href={`tel:${company.phoneRaw}`} className="text-[#F0FF42]">{company.phone}</a></p>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}