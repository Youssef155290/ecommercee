"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook, ArrowRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 pb-24">
          
          {/* Brand section */}
          <div className="lg:col-span-4 space-y-10">
            <Link href="/" className="text-3xl font-light tracking-[0.6em] text-white uppercase italic">
              SARRLUXURY
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-light">
              L'excellence à l'algérienne. Une vision contemporaine du luxe, mêlant héritage et avant-garde pour la femme moderne. 
              Fait avec passion, porté avec fierté.
            </p>
            <div className="flex gap-6">
               <Link href="#" className="p-3 bg-white/5 border border-white/10 rounded-full text-white/40 hover:text-white hover:border-accent transition-all duration-500">
                  <Instagram size={20} strokeWidth={1} />
               </Link>
               <Link href="#" className="p-3 bg-white/5 border border-white/10 rounded-full text-white/40 hover:text-white hover:border-accent transition-all duration-500">
                  <Twitter size={20} strokeWidth={1} />
               </Link>
               <Link href="#" className="p-3 bg-white/5 border border-white/10 rounded-full text-white/40 hover:text-white hover:border-accent transition-all duration-500">
                  <Facebook size={20} strokeWidth={1} />
               </Link>
            </div>
          </div>

          {/* Links sections */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">Collections</h3>
              <ul className="space-y-4">
                <li><Link href="/products" className="text-sm text-white/40 hover:text-accent transition-colors font-light">Tout voir</Link></li>
                <li><Link href="/products?category=ensembles" className="text-sm text-white/40 hover:text-accent transition-colors font-light">Ensembles</Link></li>
                <li><Link href="/products?category=abayas" className="text-sm text-white/40 hover:text-accent transition-colors font-light">Abayas</Link></li>
                <li><Link href="/products?category=kimonos" className="text-sm text-white/40 hover:text-accent transition-colors font-light">Kimonos</Link></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h3 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">Service Client</h3>
              <ul className="space-y-4">
                <li><Link href="/shipping" className="text-sm text-white/40 hover:text-accent transition-colors font-light">Livraison</Link></li>
                <li><Link href="/returns" className="text-sm text-white/40 hover:text-accent transition-colors font-light">Retours & Échanges</Link></li>
                <li><Link href="/faq" className="text-sm text-white/40 hover:text-accent transition-colors font-light">FAQ</Link></li>
                <li><Link href="/contact" className="text-sm text-white/40 hover:text-accent transition-colors font-light">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-10">
            <h3 className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">Newsletter</h3>
            <p className="text-white/40 text-sm font-light">Inscrivez-vous pour recevoir nos dernières collections et actualités exclusives.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="VOTRE EMAIL" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-xs tracking-widest text-white outline-none focus:border-accent transition-colors"
              />
              <button className="absolute right-0 top-0 text-white/40 group-hover:text-accent transition-colors">
                 <ArrowRight size={20} strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>

        {/* trust bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 border-y border-white/5 mb-16">
           <div className="flex items-center gap-4 text-white/60">
              <ShieldCheck size={24} strokeWidth={1} className="text-accent" />
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase">Paiement Sécurisé</span>
           </div>
           <div className="flex items-center gap-4 text-white/60">
              <Truck size={24} strokeWidth={1} className="text-accent" />
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase">Expédition Mondiale</span>
           </div>
           <div className="flex items-center gap-4 text-white/60">
              <RotateCcw size={24} strokeWidth={1} className="text-accent" />
              <span className="text-[9px] font-bold tracking-[0.25em] uppercase">Retours sous 30 Jours</span>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-white/20 tracking-[0.3em] font-bold uppercase">
          <p>© {currentYear} SARRLUXURY. TOUS DROITS RÉSERVÉS.</p>
          <div className="flex gap-10">
             <Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link>
             <Link href="/terms" className="hover:text-white transition-colors">Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
