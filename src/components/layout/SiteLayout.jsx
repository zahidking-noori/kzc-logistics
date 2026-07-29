import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';
import Loader from './Loader';
import SEO from '@/components/SEO';

export default function SiteLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <>
      <SEO />
      <Loader />
      <Cursor />
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[55] h-px origin-left bg-[#F0FF42]" />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}