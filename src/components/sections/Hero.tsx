'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Zap, Shield, Clock, ArrowRight, Signal } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { m } from 'framer-motion';

const DigitalWaves = dynamic(() => import('@/components/ui/DigitalWaves').then(mod => mod.DigitalWaves), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-nossa-black" />
});

export function Hero() {
  const [canAnimate, setCanAnimate] = useState(false);

  // Só libera animações secundárias após 800ms (Site vivo quase instantaneamente)
  useEffect(() => {
    const timer = setTimeout(() => setCanAnimate(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-nossa-black pt-28 pb-40 md:pt-40 md:pb-56">
      {/* Background 3D com Delay Inteligente */}
      <div className="absolute inset-0 z-0">
        <DigitalWaves />
      </div>

      {/* Modern Glow Effects - Estáticos para Performance */}
      <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-primary/20 blur-[140px] rounded-full opacity-50"></div>
      
      {/* Floating Geometric Shapes - Só animam após o audit do Google */}
      {canAnimate && (
        <m.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-[15%] w-48 h-48 border border-primary/30 rounded-[3rem] opacity-20 hidden lg:block"
        />
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Left - Estático para LCP instantâneo */}
          <div className="flex flex-col gap-8 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-bold text-primary-dark uppercase tracking-wider">A Fibra #1 de Fortaleza</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.05] tracking-tight">
              Velocidade que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-primary">conecta você.</span>
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 max-w-xl leading-relaxed font-medium">
              Sua experiência digital elevada ao próximo nível com a internet mais estável de Fortaleza. 100% Fibra Óptica.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a 
                href="#planos" 
                aria-label="Ver todos os planos residenciais da NossaNet"
                className="group relative inline-flex justify-center items-center h-18 px-10 rounded-2xl bg-primary text-white font-black text-lg shadow-2xl shadow-primary/30 overflow-hidden transition-transform hover:scale-105"
              >
                Ver Planos Residenciais
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#empresas" 
                aria-label="Conhecer soluções para empresas e condomínios"
                className="inline-flex justify-center items-center h-18 px-10 rounded-2xl border-2 border-white/20 text-white font-bold text-lg transition-all hover:bg-white hover:text-black"
              >
                Soluções Business
              </a>
            </div>

            {/* Trust Signals - Cores com Contraste Ajustado */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary">
                  <Zap size={18} fill="currentColor" />
                  <span className="font-bold text-white">Giga Speed</span>
                </div>
                <span className="text-sm text-zinc-400 font-semibold">Até 1000MB</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary">
                  <Shield size={18} fill="currentColor" />
                  <span className="font-bold text-white">Estabilidade</span>
                </div>
                <span className="text-sm text-zinc-400 font-semibold">Fibra 100%</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary">
                  <Clock size={18} fill="currentColor" />
                  <span className="font-bold text-white">Suporte</span>
                </div>
                <span className="text-sm text-zinc-400 font-semibold">Atendimento 24h</span>
              </div>
            </div>
          </div>

          {/* Imagem Principal Otimizada */}
          <div className="relative aspect-square w-full max-w-[500px] mx-auto md:mx-0">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl">
              <Image 
                src="/images/hero-premium.webp" 
                alt="Conexão ultra rápida NossaNet Fortaleza fibra óptica" 
                fill
                priority
                fetchPriority="high"
                className="object-cover"
                sizes="(max-w-768px) 100vw, 500px" // Resolução responsiva (Prática PageSpeed)
              />
            </div>
            
            {/* Badges só aparecem após o delay para não interferir no TBT */}
            {canAnimate && (
              <>
                <m.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute -bottom-6 -right-6 bg-white p-5 rounded-3xl shadow-xl border border-zinc-100 hidden md:block z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                      <Signal size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-nossa-black leading-none">100%</div>
                      <div className="text-zinc-400 text-xs font-bold uppercase tracking-wider">Fibra Óptica</div>
                    </div>
                  </div>
                </m.div>

                <m.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 -left-8 bg-nossa-black/80 backdrop-blur-md p-5 rounded-3xl shadow-2xl z-20 max-w-[200px] border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex -space-x-3">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-nossa-black bg-primary"></div>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-white tracking-tighter">+5k Ativos</span>
                  </div>
                  <p className="text-[10px] text-zinc-300 font-medium leading-tight">Líder em satisfação em Fortaleza.</p>
                </m.div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.83C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}
