import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/kzc';
import Reveal from '@/components/motion/Reveal';

export default function Voices() {
  return (
    <section className="border-y border-white/8 bg-white/[0.015] py-28 md:py-40">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <Reveal><p className="eyebrow">What clients say</p></Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <figure className="flex h-full flex-col rounded-3xl glass p-8">
                <Quote className="text-[#F0FF42]" size={28} />
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-zinc-200">“{t.quote}”</blockquote>
                <figcaption className="mt-8 border-t border-white/10 pt-5 text-sm">
                  <span className="font-medium">{t.author}</span>
                  <span className="text-muted"> · {t.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}