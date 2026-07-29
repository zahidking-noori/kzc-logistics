import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { User } from 'lucide-react';

// Elegant placeholder for team members whose real photos are not yet published.
export default function MemberCard({ role, name, note = true }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl hairline bg-white/[0.02]"
    >
      <div className="aspect-[4/5] w-full bg-gradient-to-b from-white/[0.06] to-transparent flex items-center justify-center">
        <div className="text-center px-6">
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full hairline">
            <User className="text-zinc-300" />
          </div>
          {note && <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-300">Real photo to be added</p>}
        </div>
      </div>
      <div className="border-t border-white/8 p-6">
        <h3 className="text-lg font-medium">{name || 'To be announced'}</h3>
        <p className="mt-1 text-sm text-muted">{role}</p>
      </div>
    </motion.div>
  );
}