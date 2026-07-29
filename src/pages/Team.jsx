import React from 'react';
import { Image } from '@/components/ui/image';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import MemberCard from '@/components/ui/MemberCard';
import { team } from '@/data/kzc';

function FounderCard() {
  return (
    <div className="group relative overflow-hidden rounded-3xl hairline">
      <Image src={team.founder.photo} alt={team.founder.name} className="aspect-[4/5] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7">
        <p className="text-[10px] uppercase tracking-[0.24em] text-[#F0FF42]">Founder & CEO</p>
        <h3 className="mt-2 text-2xl font-medium">{team.founder.name}</h3>
      </div>
    </div>
  );
}

export default function Team() {
  const groups = [['Leadership', team.leadership], ['Execution Team', team.execution], ['Operations Team', team.operations]];
  return (
    <Page>
      <PageHero eyebrow="Meet the team" title="Leaders, experts," titleAccent="professionals." subtitle="The people driving KZC Logistics & Solutions LLC forward." image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal><p className="eyebrow">Founder</p></Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.5fr] md:items-center">
            <Reveal delay={0.1}><FounderCard /></Reveal>
            <Reveal delay={0.2}>
              <h2 className="display-xl text-3xl md:text-5xl">{team.founder.name}</h2>
              <p className="mt-3 text-[#F0FF42]">Founder & Chief Executive Officer</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">Leading KZC with a vision to help businesses move smarter, operate cleaner, and grow faster — building a multi-service partner recognized for professionalism, flexibility, and consistent performance.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {groups.map(([label, members]) => (
        <section key={label} className="border-t border-white/8 py-24 md:py-28">
          <div className="mx-auto max-w-[1500px] px-5 md:px-8">
            <Reveal><p className="eyebrow">{label}</p></Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((m, i) => (
                <Reveal key={i} delay={(i % 3) * 0.1}><MemberCard role={m.role} /></Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-white/8 py-20">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="rounded-3xl glass p-8 text-center md:p-12">
            <p className="text-sm text-muted">Photos shown as placeholders will be replaced with official company portraits. To submit a team photo or update a listing, contact <a href="mailto:kzcgroup@kzc-logistics.com" className="text-[#F0FF42]">kzcgroup@kzc-logistics.com</a>.</p>
          </div>
        </div>
      </section>
    </Page>
  );
}