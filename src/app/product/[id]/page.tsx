'use client';

import { useParams, useRouter } from 'next/navigation';
import { products } from '@/lib/data';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ArrowLeft, Truck, ShieldCheck, Heart, Share2, Plus, Minus } from "lucide-react";
import { useState } from 'react';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart, setIsCartOpen } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const product = products.find(p => p.id === Number(id)) || products[0];

  const handleAddToCart = () => {
    // Add multiple quantities if context supports it, otherwise repeat for simplicity
    for(let i = 0; i < quantity; i++) {
        addToCart(product);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <Link href="/products" className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-12 transition-colors uppercase text-[10px] tracking-[0.3em] font-bold">
          <ArrowLeft size={16} /> Retour aux collections
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Images Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className="space-y-6"
          >
            <div className="aspect-[3/4] overflow-hidden bg-[#111] rounded-sm relative group">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
              />
              <div className="absolute top-6 right-6 flex flex-col gap-4">
                <button className="p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-accent hover:border-accent transition-all duration-500 shadow-2xl">
                  <Heart size={18} strokeWidth={1} />
                </button>
                <button className="p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-accent hover:border-accent transition-all duration-500 shadow-2xl">
                  <Share2 size={18} strokeWidth={1} />
                </button>
              </div>
            </div>
            
            {/* Thumbnails Mocks */}
            <div className="grid grid-cols-4 gap-4">
               {[...Array(4)].map((_, i) => (
                 <div key={i} className="aspect-[3/4] bg-[#111] rounded-sm overflow-hidden border border-white/5 hover:border-accent/40 transition-colors cursor-pointer group">
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col py-4"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-accent uppercase">{product.category}</span>
                  {product.status && (
                    <span className="text-[9px] font-bold bg-[#fff] text-black px-2 py-1 tracking-widest uppercase">{product.status}</span>
                  )}
                </div>
                <h1 className="text-4xl md:text-6xl font-light text-white tracking-widest uppercase leading-tight">
                  {product.name}
                </h1>
                <p className="text-2xl text-white font-light tracking-wide">{product.price}</p>
              </div>

              <div className="h-[1px] w-full bg-white/5" />

              <div className="space-y-6">
                <p className="text-white/60 text-sm leading-relaxed font-light tracking-wide">
                  Cette pièce iconique de la maison Sarrluxury incarne l'alliance ultime entre tradition et modernité. 
                  Confectionnée avec les tissus les plus nobles, elle est pensée pour la femme qui ne fait aucun compromis sur l'élégance.
                </p>
                <ul className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold space-y-3">
                  <li className="flex items-center gap-3">✓ 100% Soie d'Alger</li>
                  <li className="flex items-center gap-3">✓ Coupe Signature Sarrluxury</li>
                  <li className="flex items-center gap-3">✓ Détails finis à la main</li>
                </ul>
              </div>

              <div className="space-y-8 pt-4">
                {/* Quantity */}
                <div className="space-y-4">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-white/40 uppercase">SÉLECTIONNER QUANTITÉ</span>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center border border-white/10 rounded-full py-2 px-4 h-12">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-white/40 hover:text-white transition-colors p-2"><Minus size={16} /></button>
                      <span className="w-12 text-center text-sm font-bold text-white">{quantity}</span>
                      <button onClick={() => setQuantity(quantity + 1)} className="text-white/40 hover:text-white transition-colors p-2"><Plus size={16} /></button>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className="h-16 bg-white text-black text-[10px] font-bold tracking-[0.4em] flex items-center justify-center gap-3 uppercase hover:bg-accent hover:text-white transition-all duration-500 shadow-2xl"
                  >
                    AJOUTER AU PANIER
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                        handleAddToCart();
                        router.push('/checkout');
                    }}
                    className="h-16 border border-white/20 text-white text-[10px] font-bold tracking-[0.4em] flex items-center justify-center uppercase hover:bg-white hover:text-black transition-all duration-500"
                  >
                    ACHETER MAINTENANT
                  </motion.button>
                </div>
              </div>

              {/* Service Tabs Mock */}
              <div className="pt-12 space-y-6">
                <div className="flex items-center gap-8 border-b border-white/5 pb-4">
                   <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-accent">
                      <Truck size={14} strokeWidth={1} /> LIVRAISON COMPLIMENTAIRE
                   </div>
                   <div className="flex items-center gap-3 text-[10px] font-bold tracking-widest text-white/40">
                      <ShieldCheck size={14} strokeWidth={1} /> PAIEMENT À LA LIVRAISON
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

