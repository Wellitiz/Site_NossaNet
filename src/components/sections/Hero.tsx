'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-nossa-gray pt-12 md:pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-nossa-black leading-tight tracking-tight">
              Internet de qualidade <br className="hidden md:block"/> 
              <span className="text-primary">ou seu dinheiro de volta</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 max-w-xl">
              Navegue com tranquilidade sabendo que você tem a melhor fibra óptica da região, seja para trabalhar, jogar ou conectar a família.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a href="#planos" className="inline-flex justify-center items-center h-12 px-8 rounded-full bg-nossa-black text-white font-medium hover:bg-zinc-800 transition-colors">
                Ver Planos Residenciais
              </a>
              <a href="#empresas" className="inline-flex justify-center items-center h-12 px-8 rounded-full bg-white text-nossa-black border border-zinc-200 font-medium hover:bg-zinc-50 transition-colors">
                Para Empresas
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] md:h-[600px] w-full rounded-t-3xl overflow-hidden shadow-2xl mx-auto"
          >
             <Image 
               src="/images/hero-family.png" 
               alt="Família feliz e conectada no Wi-Fi" 
               fill 
               className="object-cover"
               priority
             />
          </motion.div>
        </div>
      </div>
      <div className="bg-primary-dark w-full py-6 mt-[-2px] relative z-10 text-center px-4">
        <p className="text-white font-medium sm:text-lg max-w-4xl mx-auto drop-shadow-sm">
           A única empresa de Fortaleza que manda um especialista até a sua residência ou empresa para averiguar qual plano de internet se encaixa melhor a sua necessidade.
        </p>
      </div>
    </section>
  );
}
