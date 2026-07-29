import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ value = 0, suffix = '', duration = 2000, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);
  const isFloat = !Number.isInteger(value);
  const shown = isFloat ? display.toFixed(1) : Math.round(display).toLocaleString();
  return <span ref={ref} className={className}>{shown}{suffix}</span>;
}