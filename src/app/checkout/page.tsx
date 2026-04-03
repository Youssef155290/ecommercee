"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Truck, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, cartTotal, cartCount } = useCart();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2500);
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center space-y-8"
        >
          <div className="w-24 h-24 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} strokeWidth={1} />
          </div>
          <h1 className="text-4xl font-light text-white tracking-widest uppercase">Merci pour votre commande</h1>
          <p className="text-white/60 font-light leading-relaxed">
            Votre commande a été reçue et est en cours de traitement. Un email de confirmation vous a été envoyé.
          </p>
          <div className="pt-8">
            <Link href="/" className="btn-primary px-12 py-5 bg-white text-black hover:bg-accent hover:text-white transition-all duration-500 tracking-[0.4em] text-[10px] font-bold">
              RETOUR À L'ACCUEIL
            </Link>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Checkout Form */}
          <div className="flex-1 space-y-12">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-light text-white tracking-widest uppercase">Paiement</h1>
              <div className="flex gap-4">
                {[1, 2, 3].map((s) => (
                  <div key={s} className={`h-1 w-8 rounded-full ${step >= s ? "bg-accent" : "bg-white/10"}`} />
                ))}
              </div>
            </div>

            <form onSubmit={handleCheckout} className="space-y-12">
              {/* Shipping Info */}
              <section className="space-y-8">
                <div className="flex items-center gap-4 text-accent">
                  <Truck size={20} strokeWidth={1} />
                  <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase">Informations de livraison</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-white/40 tracking-widest uppercase">Prénom</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-sm h-12 px-4 text-white text-sm focus:border-accent outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-white/40 tracking-widest uppercase">Nom</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-sm h-12 px-4 text-white text-sm focus:border-accent outline-none transition-colors" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[9px] font-bold text-white/40 tracking-widest uppercase">Adresse de livraison</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-sm h-12 px-4 text-white text-sm focus:border-accent outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-white/40 tracking-widest uppercase">Ville</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-sm h-12 px-4 text-white text-sm focus:border-accent outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-white/40 tracking-widest uppercase">Wilaya / État</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-sm h-12 px-4 text-white text-sm focus:border-accent outline-none transition-colors" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[9px] font-bold text-white/40 tracking-widest uppercase">Téléphone</label>
                    <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-sm h-12 px-4 text-white text-sm focus:border-accent outline-none transition-colors" />
                  </div>
                </div>
              </section>

              {/* Payment Method */}
              <section className="space-y-8">
                <div className="flex items-center gap-4 text-accent">
                  <CreditCard size={20} strokeWidth={1} />
                  <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase">Méthode de paiement</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-6 bg-accent/5 border border-accent rounded-sm flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full border-2 border-accent flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                      </div>
                      <span className="text-xs text-white font-bold tracking-widest uppercase">Paiement à la livraison</span>
                    </div>
                    <span className="text-[9px] text-accent/60 uppercase">Gratuit</span>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-sm flex items-center justify-between opacity-50 cursor-not-allowed">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full border-2 border-white/20" />
                      <span className="text-xs text-white/40 font-bold tracking-widest uppercase">Carte Edahabia / CIB (Bientôt)</span>
                    </div>
                  </div>
                </div>
              </section>

              <button 
                type="submit"
                disabled={isProcessing}
                className="w-full h-16 bg-white text-black text-[10px] font-bold tracking-[0.5em] uppercase hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl disabled:opacity-50"
              >
                {isProcessing ? "TRAITEMENT EN COURS..." : "CONFIRMER L'ACHAT"}
              </button>

              <div className="flex justify-center items-center gap-3 text-[9px] text-white/30 tracking-widest uppercase">
                 <ShieldCheck size={14} /> Transactions sécurisées par cryptage 256-bits
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-[450px]">
            <div className="sticky top-40 bg-[#0d0d0d] border border-white/5 rounded-sm p-10 space-y-10 shadow-2xl">
              <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60">Résumé de la commande ({cartCount})</h2>
              
              <div className="space-y-8 max-h-[400px] overflow-y-auto custom-scrollbar pr-4">
                {cart.map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-20 aspect-[3/4] bg-[#111] rounded-sm overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 py-1">
                      <h3 className="text-[10px] font-bold tracking-widest uppercase text-white mb-1">{item.name}</h3>
                      <p className="text-[9px] text-white/40 tracking-wider uppercase mb-2">Quantité: {item.quantity}</p>
                      <p className="text-xs text-white/60">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-[1px] w-full bg-white/5" />

              <div className="space-y-4">
                <div className="flex justify-between text-[10px] tracking-widest uppercase">
                  <span className="text-white/40">Sous-total</span>
                  <span className="text-white">{cartTotal}</span>
                </div>
                <div className="flex justify-between text-[10px] tracking-widest uppercase">
                  <span className="text-white/40">Livraison</span>
                  <span className="text-white">Gratuite</span>
                </div>
                <div className="h-[1px] w-full bg-white/5" />
                <div className="flex justify-between items-end pt-2">
                  <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white">Total</span>
                  <span className="text-2xl font-light text-white tracking-widest">{cartTotal}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
