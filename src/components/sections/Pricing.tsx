'use client';
import { m } from 'framer-motion';
import { Check, Info, Rocket, Monitor, Gamepad2, Wifi } from 'lucide-react';

const plans = [
  { 
    name: '300 Mega', 
    price: '90,00', 
    icon: <Wifi className="w-6 h-6" />,
    features: ['Fibra Óptica Real', 'Wi-Fi Dual Band incluso', 'Ideal para 2-4 pessoas', 'Suporte Técnico Humanizado'],
    gradient: 'from-zinc-100 to-white'
  },
  { 
    name: '500 Mega', 
    price: '100,00', 
    popular: true,
    icon: <Monitor className="w-6 h-6" />,
    features: ['Ultra Velocidade p/ 4K', 'Wi-Fi 6 de alta performance', 'Ideal para Home Office', 'Equipamento Gigalan Incluso'],
    gradient: 'from-primary/5 to-white'
  },
  { 
    name: 'Giga Gamer', 
    price: '149,99', 
    icon: <Gamepad2 className="w-6 h-6" />,
    features: ['Ping reduzido p/ Jogos', 'Fibra Ponto-a-Ponto', 'Prioridade na rede', 'Atendimento Vip 24h'],
    gradient: 'from-nossa-black/5 to-white'
  },
];

export function Pricing() {
  return (
    <section id="planos" className="py-32 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-500 text-xs font-bold uppercase mb-4"
          >
            <Rocket size={14} className="text-primary" />
            <span>Nossos Planos em Fortaleza</span>
          </m.div>
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tight text-nossa-black mb-6"
          >
            Internet que <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">voa baixo.</span>
          </m.h2>
          <p className="text-zinc-500 text-xl font-medium max-w-2xl mx-auto">Escolha a velocidade ideal para o seu estilo de vida digital.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <m.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.12, 
                y: -20,
                zIndex: 50,
                boxShadow: "0 40px 80px -15px rgba(137, 243, 54, 0.4)" 
              }}
              className={`relative bg-gradient-to-b ${plan.gradient} rounded-[2.5rem] border ${plan.popular ? 'border-primary' : 'border-zinc-200'} p-1 flex flex-col group ${plan.popular ? 'z-10' : 'z-0'}`}
            >
              {plan.popular && (
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">Campeão de Vendas</div>
              )}

              <m.div 
                whileHover={{ backgroundColor: "var(--color-primary)" }}
                transition={{ duration: 0 }}
                className="bg-white rounded-[2.2rem] p-8 md:p-10 flex-1 flex flex-col"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className={`w-12 h-12 rounded-2xl ${plan.popular ? 'bg-primary text-white' : 'bg-zinc-100 text-zinc-500'} flex items-center justify-center shadow-lg group-hover:bg-nossa-black group-hover:text-white`}>
                    {plan.icon}
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400 group-hover:text-nossa-black/50">
                    <Info size={16} />
                  </div>
                </div>

                <h3 className="text-3xl font-black mb-2 text-nossa-black group-hover:text-nossa-black">{plan.name}</h3>
                <p className="text-zinc-400 text-sm font-medium mb-8 group-hover:text-nossa-black/60">Pagando até o vencimento</p>

                <div className="flex items-baseline mb-10">
                  <span className="text-zinc-400 text-xl mr-1 font-bold group-hover:text-nossa-black/60">R$</span>
                  <span className="text-7xl font-black text-nossa-black tracking-tighter leading-none group-hover:text-nossa-black">{plan.price.split(',')[0]}</span>
                  <div className="flex flex-col">
                    <span className="text-zinc-400 text-xl font-bold group-hover:text-nossa-black/60">,{plan.price.split(',')[1]}</span>
                    <span className="text-zinc-400 text-xs font-bold ml-1 group-hover:text-nossa-black/60">/mês</span>
                  </div>
                </div>

                <div className="space-y-5 mb-12">
                  {plan.features.map(feat => (
                    <div key={feat} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full ${plan.popular ? 'bg-nossa-black' : 'bg-zinc-200'} text-white flex items-center justify-center flex-shrink-0 group-hover:bg-nossa-black`}>
                        <Check size={12} strokeWidth={4} />
                      </div>
                      <span className="text-zinc-600 font-bold text-base group-hover:text-nossa-black">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <a 
                    href={`https://wa.me/558596458789?text=Ol%C3%A1%21%20Eu%20gostaria%20de%20assinar%20o%20plano%20${plan.name}.`}
                    target="_blank" 
                    rel="noreferrer"
                    className={`group/btn relative block w-full py-5 rounded-2xl ${plan.popular ? 'bg-nossa-black' : 'bg-nossa-black'} text-white text-center font-black text-xl overflow-hidden active:scale-95 group-hover:bg-white group-hover:text-nossa-black`}
                  >
                    <span className="relative z-10">Contratar Plano</span>
                  </a>
                </div>
              </m.div>
            </m.div>
          ))}
        </div>
        
        {/* Footnote */}
        <div className="mt-16 text-center">
          <p className="text-zinc-400 text-sm font-medium max-w-lg mx-auto">
            *Consulte viabilidade técnica para o seu endereço. Instalação grátis sujeita a análise de crédito.
          </p>
        </div>
      </div>
    </section>
  );
}
