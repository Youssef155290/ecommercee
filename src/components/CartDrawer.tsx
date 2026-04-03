"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import Link from "next/link";

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, cartTotal, cartCount } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-[450px] bg-[#0a0a0a] border-l border-white/5 z-[2001] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-accent" />
                <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-white">Your Panier ({cartCount})</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-white/50 hover:text-white transition-colors"
              >
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-8 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <ShoppingBag size={48} strokeWidth={1} className="text-white/10" />
                  <p className="text-white/40 text-xs tracking-widest uppercase">Votre panier est vide</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="btn-outline text-[10px] py-4 px-10"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      key={item.id} 
                      className="flex gap-6 group"
                    >
                      <div className="w-24 aspect-[3/4] overflow-hidden bg-[#111] rounded-sm flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-xs font-bold tracking-widest uppercase text-white group-hover:text-accent transition-colors">
                              {item.name}
                            </h3>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-white/30 hover:text-red-400 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <p className="text-[10px] text-white/40 tracking-wider uppercase mb-4">{item.category}</p>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex items-center border border-white/10 rounded-full h-8 px-2">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 text-white/50 hover:text-white"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 text-center text-[10px] text-white font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 text-white/50 hover:text-white"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <p className="text-xs font-semibold text-white tracking-widest">{item.price}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 border-t border-white/5 bg-[#0d0d0d] space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40">Sous-total</span>
                  <span className="text-xl font-light text-white tracking-widest">{cartTotal}</span>
                </div>
                <p className="text-[9px] text-white/30 tracking-wider text-center">Taxes et frais de livraison calculés à la caisse.</p>
                <div className="grid grid-cols-1 gap-4">
                  <Link href="/checkout" className="btn-primary w-full py-5 text-[10px] bg-accent text-white hover:bg-white hover:text-black">
                    PASSER À LA CAISSE
                  </Link>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-[9px] font-bold tracking-[0.4em] uppercase text-white/40 hover:text-white transition-colors py-2"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
