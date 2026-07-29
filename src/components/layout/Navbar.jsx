import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { company, nav } from '@/data/kzc';

const groups = [
  { label: 'Company', items: nav.company },
  { label: 'Services', items: nav.services },
  { label: 'Work', items: nav.work },
  { label: 'Engage', items: nav.engage },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className={`mx-auto flex max-w-[1500px] items-center justify-between px-5 md:px-8 transition-all duration-500 ${scrolled ? 'glass rounded-full py-2.5' : ''}`}>
          <Link to="/" className="flex items-center gap-3" aria-label={company.name}>
            <Image src={company.logo} alt="KZC Logistics & Solutions LLC logo" className="h-9 w-20 object-contain" fittingType="fit" />
          </Link>
          <nav className="hidden items-center gap-9 lg:flex">
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/industries" className="nav-link">Industries</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
            <Link to="/about" className="nav-link">Company</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a href={`tel:${company.phoneRaw}`} className="hidden xl:flex items-center gap-2 text-xs text-zinc-300 hover:text-white">
              <Phone size={14} /> {company.phone}
            </a>
            <Link to="/quote" className="hidden md:inline-flex btn-ion">Get a Quote</Link>
            <button onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-full hairline text-white" aria-label="Open menu">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-[#08090B]/95 backdrop-blur-2xl"
            style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between bg-[#08090B]/80 px-6 py-5 backdrop-blur-xl md:px-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-300">Index</span>
              <button onClick={() => setOpen(false)} className="grid h-11 w-11 place-items-center rounded-full hairline text-white" aria-label="Close menu">
                <X size={18} />
              </button>
            </div>
            <div className="mx-auto max-w-[1500px] px-6 py-10 md:px-10">
              <div className="grid gap-y-14 md:grid-cols-2 md:gap-x-12 md:gap-y-16 lg:grid-cols-4 lg:gap-x-10">
                {groups.map((g, gi) => (
                  <motion.div key={g.label} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + gi * 0.08, duration: 0.6 }}>
                    <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#F0FF42]">{g.label}</p>
                    <ul className="space-y-4 md:space-y-5">
                      {g.items.map((it) => (
                        <li key={it.to}>
                          <Link to={it.to} className="group flex items-center justify-between py-1 text-xl text-zinc-200 hover:text-white md:text-2xl">
                            {it.label}
                            <ArrowUpRight size={16} className="text-zinc-300 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#F0FF42]" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="mx-auto max-w-[1500px] px-6 pb-10 md:px-10">
              <div className="flex flex-col gap-4 border-t border-white/8 pt-8 text-xs text-zinc-300 md:flex-row md:items-center md:justify-between">
                <span>{company.addressFull}</span>
                <div className="flex gap-6">
                  <a href={`tel:${company.phoneRaw}`} className="hover:text-white">{company.phone}</a>
                  <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}