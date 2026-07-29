import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Parallax from '@/components/motion/Parallax';

export default function PageHero({ eyebrow, title, titleAccent, subtitle, image }) {
  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden pb-16 pt-40">
      {image && (
        <div className="absolute inset-0">
          <Parallax speed={0.15} className="h-[120%]">
            <Image src={image} alt="" className="h-full w-full object-cover" />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-b from-[#08090B]/70 via-[#08090B]/40 to-[#08090B]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090B]/80 to-transparent" />
        </div>
      )}
      <div className="relative z-10 w-full px-5 md:px-8">
        <div className="mx-auto max-w-[1500px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="eyebrow">{eyebrow}</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="display-xl text-5xl md:text-7xl lg:text-8xl">
            {title} {titleAccent && <span className="stroke-text">{titleAccent}</span>}
          </motion.h1>
          {subtitle && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }} className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-300">{subtitle}</motion.p>}
        </div>
      </div>
    </section>
  );
}

export function Breadcrumb({ items }) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="text-zinc-300">/</span>}
          {it.to ? <Link to={it.to} className="hover:text-white">{it.label}</Link> : <span className="text-zinc-300">{it.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}