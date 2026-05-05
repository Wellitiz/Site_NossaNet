'use client';
import { motion } from 'framer-motion';
import { Cpu, Globe, Headphones, ShieldCheck, Zap, Activity } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Latência Ultra Baixa",
    description: "Ideal para gamers e reuniões por vídeo sem travamentos. Nossa rede é otimizada para o menor ping possível.",
    color: "bg-blue-500"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Equipamento Premium",
    description: "Roteadores Wi-Fi de última geração inclusos, garantindo sinal forte em todos os cômodos da sua casa.",
    color: "bg-primary"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Estabilidade Garantida",
    description: "Tecnologia 100% fibra óptica de ponta a ponta. Sem interferências externas ou quedas por clima.",
    color: "bg-purple-500"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Suporte em 30 min",
    description: "Time técnico local em Fortaleza pronto para te atender via WhatsApp ou presencialmente com agilidade.",
    color: "bg-orange-500"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "IP Fixo Opcional",
    description: "Soluções avançadas para quem precisa de acesso remoto, servidores ou câmeras de segurança.",
    color: "bg-emerald-500"
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Monitoramento 24h",
    description: "Nosso NOC monitora a rede em tempo real para resolver qualquer oscilação antes mesmo de você perceber.",
    color: "bg-rose-500"
  }
];

export function Features() {
  return (
    <section className="py-32 bg-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-nossa-black leading-tight"
            >
              Tecnologia que <br />
              <span className="text-primary">faz a diferença.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xl text-zinc-500 font-medium max-w-sm"
          >
            Não vendemos apenas megas, entregamos uma experiência digital completa e sem estresse.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] shadow-premium border border-zinc-100 hover:border-primary/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 text-9xl font-black text-zinc-50 opacity-0 group-hover:opacity-100 group-hover:text-primary/10 transition-all duration-500 pointer-events-none">
                {index < 9 ? `0${index + 1}` : index + 1}
              </div>
              
              <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform relative z-10`}>
                {feature.icon}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-primary font-black text-lg opacity-40">{(index + 1).toString().padStart(2, '0')}.</span>
                <h3 className="text-2xl font-black text-nossa-black">{feature.title}</h3>
              </div>

              <p className="text-zinc-500 font-medium leading-relaxed relative z-10">
                {feature.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Saiba Mais <div className="w-10 h-px bg-primary"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
