"use client";

import { motion } from "framer-motion";
import { User, Package, Settings, LogOut, ChevronRight, Heart } from "lucide-react";
import Link from "next/link";

export default function AccountPage() {
  const user = {
    name: "Client Privilégié",
    email: "client@sarrluxury.com",
    memberSince: "Oct 2025"
  };

  const sections = [
    { title: "Commandes Récentes", icon: <Package size={20} />, href: "#" },
    { title: "Liste d'Envies", icon: <Heart size={20} />, href: "#" },
    { title: "Paramètres", icon: <Settings size={20} />, href: "#" }
  ];

  return (
    <div className="min-height-screen bg-[#0a0a0a] pt-32 pb-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-sm"
        >
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 border-b border-white/5 pb-12 mb-12">
            <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-black shadow-2xl">
              <User size={40} strokeWidth={1.5} />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-light tracking-widest text-white uppercase mb-2">{user.name}</h1>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">{user.email}</p>
              <span className="text-[10px] text-accent font-bold tracking-widest uppercase">Membre {user.memberSince}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {sections.map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 p-8 border border-white/5 hover:border-accent transition-all duration-500 group cursor-pointer"
              >
                <div className="text-accent mb-6 transform group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">{section.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Account Details */}
          <div className="space-y-4">
            <button className="w-full flex items-center justify-between p-6 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-500 group">
              <span className="text-[10px] font-bold tracking-widest uppercase">Éditer le profil</span>
              <ChevronRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="w-full flex items-center justify-between p-6 border border-white/5 text-white/50 hover:text-red-400 transition-all duration-500">
              <span className="text-[10px] font-bold tracking-widest uppercase flex items-center gap-3">
                <LogOut size={16} /> Déconnexion
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
