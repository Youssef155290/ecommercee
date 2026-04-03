"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Clock, Award } from "lucide-react";

export default function FeatureBar() {
  const features = [
    {
      icon: <Truck size={24} strokeWidth={1} />,
      title: "Worldwide Express",
      desc: "L'excellence livrée partout."
    },
    {
      icon: <ShieldCheck size={24} strokeWidth={1} />,
      title: "Transactions",
      desc: "Confidentialité & sécurité totale."
    },
    {
      icon: <Award size={24} strokeWidth={1} />,
      title: "Haute Couture",
      desc: "Savoir-faire traditionnel algérien."
    },
    {
      icon: <Clock size={24} strokeWidth={1} />,
      title: "Excellence",
      desc: "Un service client dévoué 24/7."
    }
  ];

  return (
    <section className="py-24 bg-white/10 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              key={i} 
              className="flex items-start gap-5 group"
            >
              <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                {f.icon}
              </div>
              <div>
                <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-1">{f.title}</h3>
                <p className="text-xs text-white/40 font-light tracking-wide">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
