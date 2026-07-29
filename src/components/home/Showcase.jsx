import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { projects } from '@/data/kzc';
import Reveal from '@/components/motion/Reveal';

export default function Showcase() {
  const featured = projects.slice(0, 3);
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal><p className="eyebrow">Selected work</p></Reveal>
            <Reveal delay={0.1}><h2 className="display-xl text-5xl md:text-7xl">Projects in motion.</h2></Reveal>
          </div>
          <Reveal delay={0.15}><Link to="/projects" className="link-arrow">View all projects <ArrowUpRight size={15} /></Link></Reveal>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <Link to="/projects" className="group block overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={p.img} alt={p.title} className="h-full w-full transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.18em]">{p.category}</span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">{p.location}</p>
                    <h3 className="mt-2 text-xl font-medium">{p.title}</h3>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}