import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { company, nav } from '@/data/kzc';
import Counter from '@/components/motion/Counter';

const cols = [
  { label: 'Company', items: nav.company },
  { label: 'Services', items: nav.services },
  { label: 'Work', items: nav.work },
  { label: 'Engage', items: nav.engage },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#060709] px-5 pt-20 md:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-white/8 pb-16 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Image src={company.logo} alt="KZC logo" className="h-10 w-24 object-contain" fittingType="fit" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              {company.name} — integrated logistics, procurement, fleet, and support services from Alexandria, Virginia to the world.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[['100+','Countries'],['24/7','Support'],['500+','EV Units']].map(([v,l])=>(
                <div key={l}>
                  <div className="font-display text-2xl text-[#F0FF42]"><Counter value={parseInt(v)} suffix={v.replace(/\d/g,'')}/></div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-300">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((c) => (
              <div key={c.label}>
                <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-zinc-300">{c.label}</p>
                <ul className="space-y-2.5">
                  {c.items.map((i) => (
                    <li key={i.to}><Link to={i.to} className="text-sm text-zinc-300 hover:text-white">{i.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-8 text-[11px] uppercase tracking-[0.16em] text-zinc-300 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy & Terms</Link>
            <Link to="/tracking" className="hover:text-white">Track a Shipment</Link>
            <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}