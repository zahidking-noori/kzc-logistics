import React from 'react';
import Page from '@/components/motion/Page';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import ServicesPreview from '@/components/home/ServicesPreview';
import GlobalReach from '@/components/home/GlobalReach';
import Process from '@/components/home/Process';
import Showcase from '@/components/home/Showcase';
import Voices from '@/components/home/Voices';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <Page>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <GlobalReach />
      <Process />
      <Showcase />
      <Voices />
      <CTA />
    </Page>
  );
}