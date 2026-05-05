'use client';

export function ParallaxSection() {
  return (
    <section 
      className="w-full h-[40vh] md:h-[60vh] bg-fixed bg-center bg-cover flex items-center justify-center relative shadow-inner overflow-hidden"
      style={{ backgroundImage: "url('/images/parallax.png')" }}
    >
      <div className="absolute inset-0 bg-nossa-black/40 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 text-center px-4 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        <h3 className="text-4xl md:text-6xl lg:text-8xl font-black text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-tight">
          Velocidade <span className="text-primary italic">Sem Limites</span>
        </h3>
        <p className="mt-6 text-zinc-200 text-lg md:text-2xl lg:text-3xl font-medium drop-shadow-md">
           Conectando o futuro da sua casa e da sua empresa
        </p>
      </div>
    </section>
  );
}
