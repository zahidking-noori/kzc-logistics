import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/motion/Reveal';

export default function ServiceDetail({ service, index }) {
  const reversed = index % 2 === 1;
  const num = String(index + 1).padStart(2, '0');
  return (
    <section className="border-b border-white/8 py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal className={reversed ? 'lg:order-2' : ''}>
            <div className="overflow-hidden rounded-3xl">
              <Image src={service.img} alt={service.title} className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.15} className={reversed ? 'lg:order-1' : ''}>
            <span className="text-[10px] text-[#F0FF42]">{num}</span>
            <h2 className="mt-3 display-xl text-3xl md:text-5xl">{service.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{service.summary}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 text-sm text-zinc-200">
                  <Check size={16} className="shrink-0 text-[#F0FF42]" /> {b}
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {service.highlights.map((h) => (
                <span key={h} className="rounded-full hairline px-4 py-1.5 text-[10px] uppercase tracking-[0.14em] text-zinc-300">{h}</span>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Typical projects</p>
              <ul className="mt-3 space-y-2">
                {service.projects.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#F0FF42]" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/quote" className="btn-ion mt-8 inline-flex items-center gap-2">Request a quote <ArrowUpRight size={15} /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}