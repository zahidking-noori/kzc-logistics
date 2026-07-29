import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plane, Users, Paintbrush, Trash2, Boxes, Truck, Building2, Briefcase, Move, Wrench } from 'lucide-react';
import { services } from '@/data/kzc';
import Reveal from '@/components/motion/Reveal';

const icons = { Plane, Move, Users, Paintbrush, Building2, Wrench, Trash2, Boxes, Truck, Briefcase };

export default function ServicesPreview() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <Reveal><p className="eyebrow">What we do</p></Reveal>
            <Reveal delay={0.1}><h2 className="display-xl text-5xl md:text-7xl">One partner.<br />Every mission.</h2></Reveal>
          </div>
          <Reveal delay={0.15}><p className="max-w-md text-lg leading-relaxed text-muted md:justify-self-end">Trusted delivery, staffing, maintenance, waste removal, procurement, fleet, and custom business solutions — tailored to your exact needs.</p></Reveal>
        </div>
        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/8 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.id} delay={(i % 4) * 0.08}>
                <Link to="/services" className="group relative flex h-full min-h-[280px] flex-col justify-between bg-[#08090B] p-7 transition-colors duration-500 hover:bg-white/[0.03]">
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] text-zinc-300">{String(i + 1).padStart(2, '0')}</span>
                    <Icon className="text-[#F0FF42] transition-transform duration-500 group-hover:scale-125" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium leading-snug">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">{s.summary}</p>
                    <span className="link-arrow mt-5 text-[#F0FF42]">Learn more <ArrowUpRight size={14} /></span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}