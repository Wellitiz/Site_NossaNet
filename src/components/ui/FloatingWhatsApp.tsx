'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/558596458789?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20NossaNeT%20Fortaleza%20e%20preciso%20de%20ajuda%21"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, type: 'spring', bounce: 0.5 }}
      className="fixed bottom-6 right-6 z-[90] bg-[#25D366] p-3 md:p-4 rounded-full shadow-xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-transform outline-none focus:ring-4 focus:ring-[#25D366]/50 flex items-center justify-center cursor-pointer"
      aria-label="Falar no WhatsApp"
    >
      <div className="relative w-8 h-8 md:w-10 md:h-10">
        <Image src="/WhatsApp.svg" alt="WhatsApp" fill className="object-contain" priority />
      </div>
    </motion.a>
  );
}
