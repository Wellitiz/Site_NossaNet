'use client';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  { name: '300 Mega', price: '90,00', features: ['Fibra Óptica Real', 'Wi-Fi Dual Band (2.4 / 5G)', 'Sem limite de dados', 'Suporte Técnico Humanizado'] },
  { name: '500 Mega', price: '100,00', features: ['Ideal para streaming 4K', 'Fibra Óptica Real', 'Wi-Fi Dual Band (2.4 / 5G)', 'Equipamento Incluso'] },
  { name: 'Plano Ilimitado', price: '149,99', features: ['Máxima Performance em Jogos', 'Fibra Óptica Real', 'Wi-Fi Dual Band (2.4 / 5G)', 'Atendimento Vip'] },
];

export function Pricing() {
  return (
    <section id="planos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-nossa-black"
          >
            Escolha seu plano residencial
          </motion.h2>
          <p className="text-zinc-500 mt-4 text-lg">Internet fibra de ultra velocidade para conectar toda a sua casa.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] border border-zinc-200 shadow-sm overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative"
            >
              {index === 1 && (
                 <div className="bg-primary text-white text-xs font-bold uppercase tracking-widest text-center py-2">Mais Escolhido</div>
              )}
              <div className="p-8 md:p-10 flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-zinc-900">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-zinc-500 text-lg mr-1 font-medium">R$</span>
                  <span className="text-5xl font-black text-nossa-black tracking-tighter">{plan.price}</span>
                  <span className="text-zinc-500 ml-1 font-medium">/mês</span>
                </div>
                <div className="space-y-5 mb-8">
                  {plan.features.map(feat => (
                    <div key={feat} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 text-primary flex items-center justify-center flex-shrink-0">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-zinc-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-zinc-50 border-t border-zinc-100 mt-auto">
                <a 
                  href="https://wa.me/558596458789?text=Ol%C3%A1%21%20Eu%20gostaria%20de%20assinar%20o%20plano%20de%20internet%20residencial." 
                  target="_blank" 
                  rel="noreferrer"
                  className="block w-full py-4 rounded-xl bg-nossa-black text-white text-center font-bold text-lg hover:bg-zinc-800 transition-colors shadow-md"
                >
                  Assinar Agora
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
