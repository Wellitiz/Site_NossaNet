'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
  return (
    <section className="py-24 bg-nossa-gray">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-white rounded-[2.5rem] shadow-xl shadow-zinc-200/50 border border-zinc-100 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-nossa-black mb-8 tracking-tight">Nossa História</h2>
              <p className="text-zinc-600 text-lg md:text-xl leading-relaxed text-left">
                A <strong className="text-primary font-bold">NossaNeT Fortaleza</strong> é uma empresa que teve início no ano de 2010 como Nossa Informática, atuando no reparo e manutenção de computadores, impressoras e notebooks. Em 2016, ingressou na atividade de provedor de internet. Desde então, vem trabalhando todos os dias para entregar o melhor serviço possível aos seus clientes.
              </p>
            </div>
            <div className="relative h-[300px] lg:h-auto min-h-[400px]">
               <Image 
                  src="/images/history.png" 
                  alt="Equipe NossaNeT Fortaleza" 
                  fill 
                  className="object-cover object-right"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent pointer-events-none hidden lg:block"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
