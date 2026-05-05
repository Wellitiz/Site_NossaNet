'use client';
import { motion } from 'framer-motion';
import { HeadphonesIcon, WifiIcon, SignalHighIcon, CalendarDaysIcon, Briefcase, ChevronRight } from 'lucide-react';

export function Business() {
  const advantages = [
    { icon: HeadphonesIcon, title: "Suporte Prioritário", desc: "Atendimento em até 4 horas úteis." },
    { icon: WifiIcon, title: "Wi-Fi Business", desc: "Roteadores de alta densidade." },
    { icon: SignalHighIcon, title: "Link Dedicado", desc: "Garantia de 100% de banda." },
    { icon: CalendarDaysIcon, title: "SLA Garantido", desc: "Contrato com garantia de uptime." }
  ];

  return (
    <section id="empresas" className="py-32 bg-nossa-black text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary-dark/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Briefcase size={16} className="text-primary" />
              <span className="text-xs font-black uppercase tracking-widest text-primary">Soluções Corporativas</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
              Impulsione seu <br />
              <span className="text-primary">Negócio.</span>
            </h2>
            <p className="text-xl text-zinc-400 font-medium leading-relaxed max-w-xl">
              Não deixe sua empresa parar por falta de conexão. Temos planos sob medida para pequenos comércios até grandes indústrias em Fortaleza.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <motion.div 
                 key={adv.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-8 bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 hover:border-primary/50 transition-all group"
              >
                <div className="bg-primary/20 w-14 h-14 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <adv.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-white mb-2">{adv.title}</h4>
                <p className="text-sm text-zinc-500 font-medium">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-primary p-12 md:p-16 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/20"
        >
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-2">Precisa de um plano personalizado?</h3>
            <p className="text-primary-dark font-bold text-lg">Nossos consultores estão prontos para te atender.</p>
          </div>
          <a
             href="https://wa.me/558596458789" 
             target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-3 bg-white text-nossa-black font-black text-xl px-12 py-6 rounded-3xl hover:bg-nossa-black hover:text-white transition-all shadow-xl group"
          >
            Consultar Agora
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
