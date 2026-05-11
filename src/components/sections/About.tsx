'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Users, CheckCircle } from 'lucide-react';

export function About() {
  return (
    <section id="sobrenós" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-black text-xs uppercase tracking-widest mb-6">
              Nossa Trajetória
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-nossa-black mb-8 tracking-tighter">
              Compromisso com <br />
              <span className="text-primary">Fortaleza.</span>
            </h2>
            
            <p className="text-zinc-500 text-xl leading-relaxed mb-10 font-medium">
              Evoluímos de uma pequena assistência técnica para um dos provedores de internet mais respeitados de Fortaleza, sempre mantendo o foco no que mais importa: **você**.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-black text-nossa-black">Excelência</h3>
                  <p className="text-sm text-zinc-400">Qualidade premiada por 3 anos consecutivos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-black text-nossa-black">Suporte Humano</h4>
                  <p className="text-sm text-zinc-400">Time local que conhece a sua região.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center gap-4">
              <CheckCircle className="text-primary shrink-0" size={32} />
              <p className="text-zinc-600 font-bold">
                Mais de 100km de fibra óptica própria cobrindo os principais bairros de Fortaleza.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-[500px] md:h-[600px] rounded-[4rem] overflow-hidden shadow-2xl border-[8px] border-zinc-50">
               <Image 
                  src="/images/history.webp" 
                  alt="Equipe NossaNeT Fortaleza" 
                  fill 
                  className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
            {/* Floating Achievement */}
            <div className="absolute -bottom-10 -right-10 bg-nossa-black text-white p-10 rounded-[3rem] shadow-2xl hidden md:block">
              <p className="text-5xl font-black text-primary mb-1 tracking-tighter">14+</p>
              <p className="text-xs font-black uppercase tracking-widest opacity-60 leading-tight">Anos de <br />Experiência</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
