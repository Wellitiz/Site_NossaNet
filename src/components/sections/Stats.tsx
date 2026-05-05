'use client';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = Intl.NumberFormat("pt-BR").format(
          Math.floor(latest)
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}

const stats = [
  { label: "Clientes Ativos", value: 5000, suffix: "+" },
  { label: "Bairros Atendidos", value: 45, suffix: "" },
  { label: "Fibra Óptica (km)", value: 120, suffix: "km" },
  { label: "Suporte Técnico", value: 24, suffix: "/7" }
];

export function Stats() {
  return (
    <section className="py-24 bg-nossa-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-black text-primary mb-4 flex items-center justify-center tracking-tighter">
                <Counter value={stat.value} />
                <span className="text-white ml-1">{stat.suffix}</span>
              </div>
              <p className="text-zinc-400 font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
