"use client";

import { motion, useAnimation } from "framer-motion";
import { useCart } from "@/context/CartContext";
import NextLink from "next/link";
import { useState } from "react";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const controls = useAnimation();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(product);
    
    // Quick feedback animation
    await controls.start({
      scale: [1, 0.95, 1.05, 1],
      transition: { duration: 0.4 }
    });
    
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      className="group relative"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#111] rounded-sm">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-100 transition-all duration-700" 
        />
        
        {product.status && (
          <div className="absolute top-4 left-4 py-2 px-3 bg-white text-black text-[9px] font-bold tracking-[0.25em] uppercase z-20 shadow-xl">
            {product.status}
          </div>
        )}

        {/* Hover Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-8 z-10"
        >
          <motion.button 
            animate={controls}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 shadow-2xl ${
              isAdding ? "bg-accent text-white" : "bg-white text-black hover:bg-accent hover:text-white"
            }`}
            onClick={handleAddToCart}
          >
            {isAdding ? "ADDED +" : "ADD TO CART"}
          </motion.button>
        </motion.div>
      </div>

      <div className="py-6 space-y-2">
        <div className="flex justify-between items-start gap-4">
          <div>
            <span className="text-[9px] text-[#b49b6b] tracking-[0.3em] uppercase font-semibold block mb-1">
              {product.category}
            </span>
            <NextLink href={`/product/${product.id}`}>
              <h3 className="text-sm font-light text-white tracking-widest uppercase group-hover:text-accent transition-colors duration-500">
                {product.name}
              </h3>
            </NextLink>
          </div>
          <p className="text-white text-sm font-light tracking-wider opacity-80">{product.price}</p>
        </div>
      </div>
    </motion.div>
  );
}


