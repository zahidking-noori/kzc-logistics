import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setEnabled(true);
    const move = (e) => {
      if (ref.current) ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    const over = (e) => {
      const t = e.target;
      setHovering(!!t.closest('a,button,[data-cursor]'));
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, []);
  if (!enabled) return null;
  return (
    <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2">
      <motion.div
        animate={{ scale: hovering ? 2.4 : 1, opacity: hovering ? 0.5 : 0.9 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="h-2 w-2 rounded-full bg-[#F0FF42]"
      />
    </div>
  );
}