import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Check, CalendarDays } from 'lucide-react';
import Page from '@/components/motion/Page';
import PageHero from '@/components/layout/PageHero';
import Reveal from '@/components/motion/Reveal';
import { company } from '@/data/kzc';
import { submitForm, CALENDLY_URL } from '@/lib/forms';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const send = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitForm({ ...form, _subject: `Website contact — ${form.name}` });
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };
  return (
    <Page>
      <PageHero eyebrow="Contact" title="Let's work" titleAccent="together." subtitle="Get in touch so we can start working together. Contact us today for a free consultation and personalized quote." image="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600" />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <Reveal><p className="eyebrow">Contact information</p></Reveal>
              <div className="mt-8 space-y-6">
                <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-5"><span className="grid h-12 w-12 place-items-center rounded-full hairline text-[#F0FF42]"><Phone size={18} /></span><div><p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Phone</p><p className="text-lg text-zinc-100">{company.phone}</p></div></a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-5"><span className="grid h-12 w-12 place-items-center rounded-full hairline text-[#F0FF42]"><Mail size={18} /></span><div><p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Email</p><p className="text-lg text-zinc-100">{company.email}</p></div></a>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(company.mapQuery)}`} target="_blank" rel="noreferrer" className="flex items-center gap-5"><span className="grid h-12 w-12 place-items-center rounded-full hairline text-[#F0FF42]"><MapPin size={18} /></span><div><p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Address</p><p className="text-lg text-zinc-100">{company.addressFull}</p></div></a>
                <div className="flex items-center gap-5"><span className="grid h-12 w-12 place-items-center rounded-full hairline text-[#F0FF42]"><Clock size={18} /></span><div><p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Hours</p><p className="text-lg text-zinc-100">24/7 support</p></div></div>
              </div>
              <Reveal delay={0.2}>
                <div className="mt-10 overflow-hidden rounded-3xl hairline">
                  <iframe title="KZC location map" src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`} className="h-72 w-full" loading="lazy" />
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="mt-6 flex items-start gap-5 rounded-3xl glass p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full hairline text-[#F0FF42]"><CalendarDays size={18} /></span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Prefer to talk?</p>
                    <p className="mt-1 text-zinc-100">Book a consultation</p>
                    {CALENDLY_URL ? (
                      <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="link-arrow mt-2 text-[#F0FF42]">Open scheduler →</a>
                    ) : (
                      <p className="mt-2 text-sm text-muted">Schedule a call with our team — calendar integration coming soon. Reach us directly by phone or email in the meantime.</p>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              {status === 'success' ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl glass p-10 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#F0FF42] text-[#08090B]"><Check size={26} /></span>
                  <h2 className="mt-6 text-2xl font-medium">Message sent.</h2>
                  <p className="mt-3 text-muted">Thank you for reaching out. Our team will respond within one business day.</p>
                  <button onClick={() => setStatus('idle')} className="btn-ghost mt-8">Send another message</button>
                </div>
              ) : (
                <form onSubmit={send} className="rounded-3xl glass p-8 md:p-10">
                  <h2 className="text-2xl font-medium text-zinc-100">Send a message</h2>
                  <p className="mt-2 text-sm text-muted">We'll respond within one business day.</p>
                  <div className="mt-8 space-y-2">
                    <label htmlFor="contact-name" className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Full name</label>
                    <input id="contact-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="field" placeholder="Your name" />
                  </div>
                  <div className="mt-6 space-y-2">
                    <label htmlFor="contact-email" className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Email</label>
                    <input id="contact-email" required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="field" placeholder="you@email.com" />
                  </div>
                  <div className="mt-6 space-y-2">
                    <label htmlFor="contact-phone" className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Phone (optional)</label>
                    <input id="contact-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="field" placeholder="+1 ..." />
                  </div>
                  <div className="mt-6 space-y-2">
                    <label htmlFor="contact-message" className="text-[10px] uppercase tracking-[0.2em] text-zinc-300">Message</label>
                    <textarea id="contact-message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="field resize-none" placeholder="How can we help?" />
                  </div>
                  {status === 'error' && <p className="mt-4 text-sm text-red-400">Something went wrong. Please try again or email us directly.</p>}
                  <button disabled={status === 'sending'} className="btn-ion mt-8 w-full disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </Page>
  );
}