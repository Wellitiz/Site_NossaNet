import Link from 'next/link';
import { Menu, Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full px-4 md:px-8 py-4">
      <div className="container mx-auto">
        <div className="bg-white/70 backdrop-blur-2xl border border-white/20 shadow-premium rounded-3xl h-20 md:h-24 px-6 md:px-10 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col leading-none">
              <span className="text-primary font-black text-2xl md:text-4xl tracking-tighter group-hover:scale-105 transition-transform">NossaNeT</span>
              <span className="text-nossa-black font-black text-[10px] md:text-xs uppercase tracking-[0.3em] ml-1 opacity-60">Fortaleza</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {['Planos', 'Empresas', 'Sobre Nós'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="text-nossa-black font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors relative group"
              >
                {item}
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
              className="inline-flex items-center justify-center rounded-2xl bg-nossa-black px-6 md:px-8 h-12 md:h-14 text-xs md:text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-black/10 transition-all hover:bg-primary hover:scale-105 active:scale-95"
            >
              Área do Cliente
            </a>
            
            <button className="lg:hidden p-2 text-nossa-black">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
