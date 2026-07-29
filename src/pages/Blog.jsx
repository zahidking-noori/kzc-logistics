import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowUpRight } from 'lucide-react';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';

export default function Blog() {
  return (
    <Page>
      <PageHero eyebrow="Blog & news" title="Insights from" titleAccent="the field." subtitle="Perspectives on logistics, procurement, fleet, and the work we do every day." image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal>
            <div className="flex min-h-[50vh] flex-col items-center justify-center rounded-3xl glass p-10 text-center md:p-16">
              <span className="grid h-16 w-16 place-items-center rounded-full hairline text-[#F0FF42]"><FileText size={26} /></span>
              <h2 className="mt-8 text-2xl font-medium md:text-3xl">No articles have been published yet.</h2>
              <p className="mt-4 max-w-md leading-relaxed text-muted">Insights and announcements from the KZC team will appear here soon. Check back shortly — or get in touch with any questions in the meantime.</p>
              <Link to="/contact" className="btn-ion mt-8 inline-flex items-center gap-2">Get in touch <ArrowUpRight size={15} /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}