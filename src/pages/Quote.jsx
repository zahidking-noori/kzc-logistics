import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import { AnimatePresence, motion } from 'framer-motion';
import { company, services } from '@/data/kzc';
import { submitForm } from '@/lib/forms';

const steps = [
  { key: 'service', label: 'What do you need?', placeholder: 'Select a service', options: services.map((s) => s.title) },
  { key: 'origin', label: 'Where is the origin?', placeholder: 'e.g. Alexandria, VA' },
  { key: 'destination', label: 'Where is the destination?', placeholder: 'e.g. Houston, TX' },
  { key: 'details', label: 'Any details?', placeholder: 'Cargo type, timeline, special requirements...' },
  { key: 'contact', label: 'How do we reach you?', placeholder: 'Your name and email' },
];

export default function Quote() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const current = steps[step];
  const isLast = step === steps.length - 1;

  const submit = async () => {
    setStatus('sending');
    try {
      await submitForm({ ...data, _subject: 'Quote request from website', form_type: 'quote_request' });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <Page>
        <PageHero eyebrow="Request a quote" title="Thank you." titleAccent="We'll be in touch." subtitle="Your quote request has been received — our team will respond with a personalized proposal shortly." image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600" />
        <section className="py-24 md:py-32">
          <div className="mx-auto max-w-[700px] px-5 md:px-8">
            <div className="flex flex-col items-center justify-center rounded-3xl glass p-12 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#F0FF42] text-[#08090B]"><Check size={26} /></span>
              <h2 className="mt-6 text-2xl font-medium">Request submitted.</h2>
              <p className="mt-3 max-w-md text-muted">We'll review the details and get back to you within one business day. For urgent requests, call us at <a href={`tel:${company.phoneRaw}`} className="text-[#F0FF42]">{company.phone}</a>.</p>
            </div>
          </div>
        </section>
      </Page>
    );
  }

  return (
    <Page>
      <PageHero eyebrow="Request a quote" title="Tell us what" titleAccent="needs to move." subtitle="A few quick questions — no long forms. We'll respond with a personalized quote." image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[900px] px-5 md:px-8">
          <div className="mb-12 flex items-center gap-2">
            {steps.map((_, i) => <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? 'bg-[#F0FF42]' : 'bg-white/10'}`} />)}
          </div>
          <div className="rounded-3xl glass p-8 md:p-12">
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#F0FF42]">Step {step + 1} of {steps.length}</p>
            <AnimatePresence mode="wait">
              <motion.div key={current.key} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.4 }}>
                <h2 className="mt-4 text-3xl font-medium text-zinc-100 md:text-5xl">{current.label}</h2>
                {current.options ? (
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {current.options.map((o) => (
                      <button key={o} onClick={() => { setData({ ...data, [current.key]: o }); setStep(step + 1); }} className={`rounded-2xl border p-5 text-left transition-colors ${data[current.key] === o ? 'border-[#F0FF42] bg-[#F0FF42]/10 text-zinc-100' : 'border-white/10 text-zinc-200 hover:bg-white/5'}`}>{o}</button>
                    ))}
                  </div>
                ) : (
                  <textarea autoFocus rows={3} value={data[current.key] || ''} onChange={(e) => setData({ ...data, [current.key]: e.target.value })} className="field mt-8 resize-none" placeholder={current.placeholder} />
                )}
              </motion.div>
            </AnimatePresence>
            {status === 'error' && <p className="mt-6 text-sm text-red-400">Something went wrong submitting your request. Please try again or email us directly.</p>}
            <div className="mt-10 flex justify-between">
              <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="btn-ghost disabled:opacity-30"><ArrowLeft size={15} className="mr-2 inline" /> Back</button>
              {current.options ? (
                step > 0 && <button onClick={() => setStep(step + 1)} className="btn-ghost">Skip <ArrowRight size={15} className="ml-2 inline" /></button>
              ) : isLast ? (
                <button onClick={submit} disabled={status === 'sending'} className="btn-ion inline-flex items-center gap-2 disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Submit request'} <Check size={15} /></button>
              ) : (
                <button onClick={() => data[current.key] && setStep(step + 1)} className="btn-ion inline-flex items-center gap-2">Continue <ArrowRight size={15} /></button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}