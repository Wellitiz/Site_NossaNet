'use client';
import { motion } from 'framer-motion';
import { HeadphonesIcon, WifiIcon, SignalHighIcon, CalendarDaysIcon } from 'lucide-react';

export function Business() {
  const advantages = [
    { icon: HeadphonesIcon, title: "Suporte Técnico Prioritário" },
    { icon: WifiIcon, title: "Wi-Fi Alta Performance" },
    { icon: SignalHighIcon, title: "Alta Estabilidade de Rede" },
    { icon: CalendarDaysIcon, title: "Mensalidade Fixa" }
  ];

  return (
    <section id="empresas" className="py-24 bg-nossa-black text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute top-[-50%] left-[-10%] w-[70%] h-[150%] bg-primary blur-[120px] rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 text-center max-w-5xl relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6"
        >
          NossaNeT <span className="text-primary">Para Empresas</span>
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-zinc-300 mb-16 font-medium"
        >
          A internet fibra que acelera o seu negócio
        </motion.p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {advantages.map((adv, i) => (
            <motion.div 
               key={adv.title}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="flex flex-col items-center p-8 bg-zinc-800/40 backdrop-blur-sm rounded-3xl border border-zinc-700/50 hover:bg-zinc-800/80 transition-all duration-300"
            >
              <div className="bg-primary/20 p-5 rounded-2xl text-primary mb-6 shadow-inner">
                <adv.icon size={40} strokeWidth={2.5} />
              </div>
              <h4 className="font-semibold text-lg md:text-xl text-zinc-100">{adv.title}</h4>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
        >
          <a
             href="https://wa.me/558596458789?text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20e%20preciso%20de%20uma%20internet%20empresarial.%20Por%20gentileza%2C%20pode%20me%20ajudar%3F" 
             target="_blank" rel="noreferrer"
             className="inline-flex justify-center items-center bg-primary text-white font-bold text-lg md:text-xl px-8 md:px-10 py-5 rounded-full shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95 transition-all w-full sm:w-auto"
          >
            Clique nesse botão e fale com nosso especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
