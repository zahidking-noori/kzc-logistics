import React from 'react';
import { Image } from '@/components/ui/image';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import MemberCard from '@/components/ui/MemberCard';
import { team } from '@/data/kzc';

export default function Leadership() {
  return (
    <Page>
      <PageHero eyebrow="Leadership" title="Vision that" titleAccent="guides." subtitle="The leadership setting KZC's direction toward excellence." image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal><p className="eyebrow">Founder & CEO</p></Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-[0.9fr_1.3fr] md:items-center">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-3xl">
                <Image src={team.founder.photo} alt={team.founder.name} className="aspect-[4/5] w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="display-xl text-3xl md:text-5xl">{team.founder.name}</h2>
              <p className="mt-3 text-[#F0FF42]">Founder & Chief Executive Officer</p>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">Under his leadership, KZC has grown from small delivery services and labor support into a multi-service partner serving construction companies, government contractors, commercial facilities, and private clients across multiple states.</p>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="border-t border-white/8 py-24 md:py-28">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <Reveal><p className="eyebrow">Executive team</p></Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {team.leadership.map((m, i) => (
              <Reveal key={i} delay={i * 0.1}><MemberCard role={m.role} /></Reveal>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}