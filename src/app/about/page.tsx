"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Zap, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const points = [
    { title: "Design Intemporel", icon: <Sparkles />, desc: "Nos silhouettes fusionnent héritage et modernité pour un allure unique." },
    { title: "Savoir-Faire Artisanal", icon: <ShieldCheck />, desc: "Chaque pièce est confectionnée avec des tissus d'exception et une attention méticuleuse." },
    { title: "Élégance Contemporaine", icon: <Zap />, desc: "Une vision audacieuse conçue pour la femme globale qui ose l'exceptionnel." }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-40 pb-20 px-6 lg:px-12 overflow-hidden">
      {/* Brand Mission Section */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 aspect-[3/4] relative overflow-hidden group"
          >
            <img 
              src="https://images.unsplash.com/photo-1594235213606-ba7d5600f7ef?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
              alt="L'Univers Sarrluxury"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <span className="text-accent text-xs font-bold tracking-[0.6em] uppercase block mb-8">L'Univers Sarrluxury</span>
            <h1 className="text-5xl lg:text-7xl font-light tracking-tighter leading-[0.9] mb-12 uppercase">
              La Définition de <br />
              <span className="luxury-text italic text-accent low-case">L'Élégance</span>
            </h1>
            <p className="text-white/40 text-lg lg:text-xl font-light leading-relaxed mb-12 max-w-xl">
              Née d'une vision d'Algers, Sarrluxury est le fruit d'une passion pour le design intemporel et le raffinement contemporain. Nous créons des pièces qui transcendent les tendances éphémères pour devenir les piliers de votre garde-robe.
            </p>
            <div className="flex items-center gap-10">
              <div className="text-center">
                <span className="text-4xl font-light block mb-2">2026</span>
                <span className="text-[9px] text-accent tracking-widest uppercase font-bold">Fondée</span>
              </div>
              <div className="w-[1px] h-10 bg-white/20"></div>
              <div className="text-center">
                <span className="text-4xl font-light block mb-2">8k+</span>
                <span className="text-[9px] text-accent tracking-widest uppercase font-bold">Membres</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-32">
          {points.map((p, i) => (
            <motion.div 
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-12 bg-white/5 border border-white/5 hover:border-accent transition-all duration-700 group hover:-translate-y-4"
            >
              <div className="text-accent mb-8 transform group-hover:scale-125 transition-transform duration-500">
                {p.icon}
              </div>
              <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-6 text-white">{p.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
