import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { company } from '@/data/kzc';
import Reveal from '@/components/motion/Reveal';

export default function CTA() {
  return (
    <section className="px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#F0FF42] px-6 py-16 text-[#08090B] md:px-16 md:py-24">
            <div className="relative z-10 max-w-3xl">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-70">Ready when you are</p>
              <h2 className="display-xl mt-6 text-5xl md:text-7xl lg:text-8xl">Let's move<br />something great.</h2>
              <p className="mt-8 max-w-md text-lg opacity-80">Contact us today for a free consultation and a personalized quote.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/quote" className="inline-flex items-center gap-2 rounded-full bg-[#08090B] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5">Request a Quote <ArrowUpRight size={15} /></Link>
                <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-[#08090B]/30 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em]">{company.phone}</a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}