import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-black text-xl italic group-hover:bg-primary-dark transition-colors">
            N
          </div>
          <div className="flex items-center">
             <span className="text-primary font-bold text-2xl tracking-tighter">NossaNeT</span>
             <span className="text-nossa-black font-semibold text-xl ml-1">Fortaleza</span>
          </div>
        </Link>
        <a 
          href="https://central.nossanetfortaleza.com.br/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-primary px-4 md:px-6 py-2.5 text-xs md:text-sm font-medium text-white shadow transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
        >
          Central do Assinante
        </a>
      </div>
    </header>
  );
}
