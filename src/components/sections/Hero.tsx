'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Zap, Shield, Clock, ArrowRight, Signal } from 'lucide-react';
import { NeuralNetworkBackground } from '@/components/ui/NeuralNetwork';
import { InteractiveFiber } from '@/components/ui/InteractiveFiber';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-nossa-black pt-28 pb-40 md:pt-40 md:pb-56">
      {/* 3D Interactive Fiber Cable */}
      <InteractiveFiber />

      {/* Neural Network Background Effect */}
      <NeuralNetworkBackground />

      {/* Modern Glow Effects */}
      <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 -right-20 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>
      
      {/* Floating Geometric Shapes */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-40 right-[15%] w-48 h-48 border border-primary/30 rounded-[3rem] opacity-20 hidden lg:block"
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
              <span className="text-sm font-bold text-primary-dark uppercase tracking-wider">A Fibra #1 de Fortaleza</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight">
              Velocidade que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">conecta você.</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed font-medium">
              Sua experiência digital elevada ao próximo nível com a internet mais estável de Fortaleza. 100% Fibra Óptica.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#planos" 
                className="group relative inline-flex justify-center items-center h-18 px-10 rounded-2xl bg-primary text-white font-black text-lg shadow-2xl shadow-primary/30 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                Ver Planos Residenciais
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
                whileTap={{ scale: 0.98 }}
                href="#empresas" 
                className="inline-flex justify-center items-center h-18 px-10 rounded-2xl border-2 border-white/20 text-white font-bold text-lg transition-all"
              >
                Soluções Business
              </motion.a>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary">
                  <Zap size={18} fill="currentColor" />
                  <span className="font-bold text-white">Giga Speed</span>
                </div>
                <span className="text-sm text-zinc-500">Até 1000MB</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary">
                  <Shield size={18} fill="currentColor" />
                  <span className="font-bold text-white">Estabilidade</span>
                </div>
                <span className="text-sm text-zinc-500">Fibra 100%</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary">
                  <Clock size={18} fill="currentColor" />
                  <span className="font-bold text-white">Suporte</span>
                </div>
                <span className="text-sm text-zinc-500">Atendimento 24h</span>
              </div>
            </div>
          </motion.div>
          
          {/* Image Right with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative h-[500px] md:h-[650px] w-full rounded-[4rem] overflow-hidden shadow-2xl shadow-primary/10 border-[12px] border-white">
               <Image 
                 src="/images/hero-premium.png" 
                 alt="Conexão ultra rápida NossaNet" 
                 fill 
                 className="object-cover"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-nossa-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Speed Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:top-12 md:-right-12 bg-glass p-6 rounded-3xl shadow-premium border border-white/40 backdrop-blur-xl z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30">
                  <Signal size={28} />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-tighter">Status da Rede</p>
                  <p className="text-2xl font-black text-nossa-black">1.0 Gbps</p>
                  <div className="flex gap-1 mt-1">
                    {[1,2,3,4,5].map(i => <div key={i} className="h-1 w-4 rounded-full bg-primary"></div>)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Client Card */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-glass-dark p-5 rounded-3xl shadow-2xl z-20 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-nossa-darkgray bg-zinc-700 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark"></div>
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-white">+5k Ativos</span>
              </div>
              <p className="text-xs text-zinc-300 font-medium">Líder em satisfação em Fortaleza no último semestre.</p>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full -z-10"></div>
          </motion.div>

        </div>
      </div>

      {/* Modern Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.83C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}
