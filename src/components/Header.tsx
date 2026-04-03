"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, User, Search, Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collections", href: "/products" },
    { name: "Ensembles", href: "/products?category=ensembles" },
    { name: "Abayas", href: "/products?category=abayas" },
    { name: "L'Univers", href: "/about" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[2002] transition-all duration-700 ${
      isScrolled ? "py-4 bg-black/80 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
    }`}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>

          {/* Desktop Nav - Left */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.slice(0, 2).map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-[10px] font-bold tracking-[0.3em] uppercase text-white hover:text-accent transition-colors duration-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Logo - Center */}
          <Link 
            href="/" 
            className={`text-xl lg:text-3xl font-light tracking-[0.6em] uppercase text-white transition-all duration-700 ${
              isScrolled ? "scale-90" : "scale-100"
            }`}
          >
            SARRLUXURY
          </Link>

          {/* Desktop Nav - Right Content Area */}
          <div className="flex items-center gap-6 lg:gap-10">
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.slice(2).map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-[10px] font-bold tracking-[0.3em] uppercase text-white hover:text-accent transition-colors duration-500"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4 lg:gap-6">
              {/* Search Toggle */}
              <div className="flex items-center relative">
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div 
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 160, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="overflow-hidden mr-3 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10"
                    >
                      <input 
                        type="text" 
                        autoFocus
                        placeholder="SEARCH..." 
                        className="bg-transparent text-[9px] tracking-widest text-white outline-none w-full placeholder:text-white/40"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <button 
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-white hover:text-accent transition-colors duration-500 transform hover:scale-110 active:scale-95"
                >
                  {isSearchOpen ? <X size={18} strokeWidth={1.5} /> : <Search size={18} strokeWidth={1.5} />}
                </button>
              </div>

              {/* User Account */}
              <Link href="/account" className="text-white hover:text-accent transition-colors duration-500 transform hover:scale-110 active:scale-95">
                <User size={18} strokeWidth={1.5} />
              </Link>

              {/* Shopping Bag */}
              <button 
                onClick={() => setIsCartOpen(true)} 
                className="relative group flex items-center transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <div className="relative">
                  <ShoppingBag size={20} strokeWidth={1} className="text-white group-hover:text-accent transition-colors duration-500" />
                  <AnimatePresence>
                    {cartCount > 0 && (
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-2 bg-accent text-black text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-lg"
                      >
                        {cartCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-black z-[2001] lg:hidden flex flex-col p-12 pt-32"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-light tracking-[0.2em] uppercase text-white mb-8 hover:text-accent transition-colors flex items-center justify-between group"
              >
                {link.name}
                <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


