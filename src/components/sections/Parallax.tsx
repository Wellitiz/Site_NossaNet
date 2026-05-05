'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DigitalWaves } from '@/components/ui/DigitalWaves';

export function ParallaxSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={ref}
      className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center relative overflow-hidden bg-nossa-black"
    >
      {/* 3D Digital Waves */}
      <DigitalWaves />

      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-center bg-cover bg-fixed opacity-50"
        style={{ backgroundImage: "url('/images/parallax-modern.png')" }}
      ></div>
      
      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-nossa-black via-transparent to-nossa-black backdrop-blur-[2px]"></div>
      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
      
      <div className="relative z-10 text-center px-4 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-5xl md:text-7xl lg:text-9xl font-black text-white drop-shadow-2xl tracking-tighter">
            ESTABILIDADE <span className="text-primary italic">REAL</span>
          </h3>
          <p className="mt-8 text-zinc-100 text-xl md:text-3xl font-bold tracking-widest uppercase opacity-80">
             100% FIBRA ÓPTICA EM TODA FORTALEZA
          </p>
        </motion.div>
      </div>
    </section>
  );
}
