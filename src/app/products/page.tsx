"use client";

import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Filter, ChevronDown, Grid, LayoutList } from "lucide-react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    let result = activeCategory === "All" 
      ? [...products] 
      : products.filter(p => p.category === activeCategory);
    
    if (sortBy === "price-low") {
      result.sort((a, b) => parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, '')));
    } else if (sortBy === "price-high") {
      result.sort((a, b) => parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, '')));
    }
    
    return result;
  }, [activeCategory, sortBy]);

  return (
    <main className="min-h-screen bg-[#0a0a0a] pt-32 pb-40">
      <div className="container mx-auto px-6 lg:px-12 space-y-20">
        
        {/* Header Section */}
        <section className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.6em] text-accent uppercase">Collections</span>
              <h1 className="text-4xl md:text-6xl font-light text-white tracking-widest uppercase mb-4">L'Atelier Sarrluxury</h1>
              <p className="max-w-2xl text-white/40 font-light leading-relaxed">
                Explorez notre sélection exclusive de pièces conçues avec passion. 
                De la soie sauvage au velours de minuit, chaque création raconte une histoire d'élégance intemporelle.
              </p>
            </div>
            
            {/* Stats Mock */}
            <div className="flex gap-12 border-l border-white/10 pl-10">
              <div>
                <span className="block text-2xl font-light text-white tracking-widest">32+</span>
                <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.25em]">CREATIONS</span>
              </div>
              <div>
                <span className="block text-2xl font-light text-white tracking-widest">100%</span>
                <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.25em]">ARTISANAL</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Controls */}
        <section className="sticky top-[72px] z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-y border-white/5 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-wrap items-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-500 border ${
                    activeCategory === cat ? "bg-accent border-accent text-black" : "bg-white/5 border-white/10 text-white hover:border-white/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="relative group">
                <select 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-white text-[10px] font-bold tracking-widest uppercase pr-8 outline-none cursor-pointer appearance-none border-b border-white/5 pb-1 hover:border-accent transition-colors"
                >
                  <option value="default" className="bg-[#111]">Trier par</option>
                  <option value="price-low" className="bg-[#111]">Prix croissant</option>
                  <option value="price-high" className="bg-[#111]">Prix décroissant</option>
                </select>
                <ChevronDown size={14} className="absolute right-0 top-1 text-white/40 pointer-events-none group-hover:text-accent transition-colors" />
              </div>
              <div className="flex gap-4 border-l border-white/10 pl-6 text-white/30">
                 <Grid size={18} className="cursor-pointer text-accent" />
                 <LayoutList size={18} className="cursor-pointer hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section>
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProducts.length === 0 && (
            <div className="py-40 text-center space-y-8">
               <Filter size={48} strokeWidth={1} className="mx-auto text-white/10" />
               <p className="text-white/40 text-sm tracking-widest uppercase">Aucun produit ne correspond à votre sélection</p>
               <button onClick={() => setActiveCategory("All")} className="btn-outline px-10 py-4 text-[10px]">REINITIALISER LES FILTRES</button>
            </div>
          )}
        </section>

      </div>
    </main>
  );
}
