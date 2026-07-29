import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { company } from '@/data/kzc';
import Parallax from '@/components/motion/Parallax';

export default function Hero() {
  const [track, setTrack] = useState('');
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-16 pt-32 md:pb-24">
      <div className="absolute inset-0">
        <Parallax speed={0.15} className="h-[120%]">
          <Image src="https://images.unsplash.com/photo-1504703395957-9454b3940e5f?w=1600" alt="Autonomous KZC cargo vessel at dawn" className="h-full w-full object-cover" focalPointX={0.6} />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#08090B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090B]/70 to-transparent" />
      </div>

      <div className="relative z-10 w-full px-5 md:px-8">
        <div className="mx-auto max-w-[1500px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="eyebrow">Alexandria · East Coast · Worldwide</motion.div>
          <h1 className="display-xl text-[16vw] md:text-[11vw] lg:text-[10rem]">
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="block">Move</motion.span>
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }} className="block stroke-text">Beyond.</motion.span>
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }} className="max-w-md text-lg leading-relaxed text-zinc-200 md:text-xl">
              {company.tagline} Your trusted partner for delivery, logistics, maintenance, labor supply, and waste removal — engineered around your operation.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.85 }} className="flex flex-col gap-4 md:items-end">
              <div className="flex gap-3">
                <Link to="/quote" className="btn-ion inline-flex items-center gap-2">Get a Quote <ArrowUpRight size={15} /></Link>
                <Link to="/services" className="btn-ghost">Explore Services</Link>
              </div>
              <form onSubmit={(e)=>{e.preventDefault(); if(track.trim()) window.location.href=`/tracking?t=${encodeURIComponent(track)}`;}} className="glass flex w-full items-center rounded-full p-1.5 md:w-96">
                <Search size={16} className="ml-4 text-[#F0FF42]" />
                <input value={track} onChange={(e)=>setTrack(e.target.value)} placeholder="Track a shipment" className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm tracking-wide outline-none placeholder:text-zinc-300" />
                <button className="btn-ion rounded-full px-5 py-2.5 text-[10px]">Track</button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <a href="#trust" className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-zinc-300 hover:text-white" aria-label="Scroll down">
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}