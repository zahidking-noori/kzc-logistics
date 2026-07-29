import React from 'react';
import { Image } from '@/components/ui/image';
import { partners } from '@/data/kzc';

export default function TrustBar() {
  return (
    <section id="trust" className="border-y border-white/8 py-12">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <p className="mb-10 text-center text-[10px] uppercase tracking-[0.3em] text-zinc-300">Organizations we represent</p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {partners.map((p) => (
            <div key={p.name} className="group flex items-center justify-center rounded-2xl hairline bg-white/[0.02] p-6 transition-all duration-500 hover:bg-white/[0.05] md:p-8">
              <Image src={p.img} alt={`${p.name} logo`} className="h-16 w-28 object-contain grayscale opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 md:h-20 md:w-36" fittingType="fit" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}