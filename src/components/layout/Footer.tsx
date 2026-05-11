'use client';
import React from 'react';
import { Zap, Mail, MapPin, Phone, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-nossa-black text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Zap className="text-white w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-black text-2xl tracking-tighter leading-none">NossaNeT</span>
                <span className="text-zinc-500 font-black text-[10px] uppercase tracking-[0.3em] mt-1">FORTALEZA</span>
              </div>
            </div>
            <p className="text-zinc-300 font-medium leading-relaxed mb-8 max-w-xs">
              A única empresa de Fortaleza que envia um especialista para dimensionar a internet ideal.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Institucional</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-zinc-400 font-bold hover:text-primary transition-colors">Home</a></li>
              <li><a href="#planos" className="text-zinc-400 font-bold hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#empresas" className="text-zinc-400 font-bold hover:text-primary transition-colors">Empresas</a></li>
              <li><a href="#sobre" className="text-zinc-400 font-bold hover:text-primary transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Suporte</h3>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-zinc-400 font-bold hover:text-primary transition-colors">Área do Cliente</a></li>
              <li><a href="#" className="text-zinc-400 font-bold hover:text-primary transition-colors">Trabalhe Conosco</a></li>
              <li><a href="#" className="text-zinc-400 font-bold hover:text-primary transition-colors">Segunda Via Boleto</a></li>
              <li><a href="#" className="text-zinc-400 font-bold hover:text-primary transition-colors">Teste de Velocidade</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-tight">Contato</h3>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider leading-none mb-1">VENDAS</p>
                  <p className="text-white font-black">(85) 9645-8789</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider leading-none mb-1">E-MAIL</p>
                  <p className="text-white font-black text-sm">comercial@nossanet.com.br</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm font-bold tracking-tight text-center md:text-left">
            © 2026 NossaNeT Fortaleza. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">FIBRA 100% PRÓPRIA</span>
            <span className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">ASN 264421</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
