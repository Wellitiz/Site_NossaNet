'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { name: 'Planos', href: '#planos' },
    { name: 'Empresas', href: '#empresas' },
    { name: 'Sobre Nós', href: '#sobre' }
  ];

  return (
    <header className="fixed top-0 z-50 w-full px-4 md:px-8 py-4">
      <div className="container mx-auto">
        <div className="bg-white/70 backdrop-blur-2xl border border-white/20 shadow-premium rounded-3xl h-20 md:h-24 px-6 md:px-10 flex items-center justify-between relative z-50">
          
          <Link href="/" className="flex items-center gap-2 group">
                <div className="flex flex-col">
                  <span className="text-primary font-black text-2xl md:text-4xl tracking-tighter leading-none">NossaNeT</span>
                  <span className="text-nossa-black font-black text-[10px] md:text-xs uppercase tracking-[0.3em] ml-2">FORTALEZA</span>
                </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  aria-label={`Ir para a seção ${item.name}`}
                  className="text-nossa-black font-bold text-sm uppercase tracking-widest hover:text-primary transition-all relative group/link"
                >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/558596458789"
              className="hidden md:flex items-center gap-2 text-nossa-black font-black text-sm uppercase tracking-widest hover:text-primary transition-colors mr-6"
            >
              <Phone size={16} className="text-primary" />
              (85) 9645-8789
            </a>
            
            <a 
              href="https://central.nossanetfortaleza.com.br/" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-2xl bg-nossa-black px-6 md:px-8 h-12 md:h-14 text-xs md:text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-black/10 transition-all hover:bg-primary hover:scale-105 active:scale-95"
            >
              Área do Cliente
            </a>
            
            {/* Mobile Toggle */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-2 text-nossa-black hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-24 left-4 right-4 bg-white/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-6 lg:hidden"
            >
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-nossa-black font-black text-lg uppercase tracking-widest p-4 rounded-xl hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                
                <hr className="border-zinc-100 my-2" />
                
                <a 
                  href="https://central.nossanetfortaleza.com.br/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="sm:hidden flex items-center justify-center rounded-2xl bg-nossa-black w-full h-14 text-sm font-black uppercase tracking-widest text-white shadow-xl hover:bg-primary transition-all active:scale-95"
                >
                  Área do Cliente
                </a>

                <a 
                  href="https://wa.me/558596458789"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 text-nossa-black font-black text-sm uppercase tracking-widest mt-2 hover:text-primary transition-colors"
                >
                  <Phone size={18} className="text-primary" />
                  (85) 9645-8789
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
