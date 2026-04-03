"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, User, Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <header className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-700 ${
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

          {/* Desktop Nav - Right */}
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
              <button className="text-white hover:text-accent transition-colors duration-500">
                <Search size={18} strokeWidth={1.5} />
              </button>
              <Link href="/account" className="text-white hover:text-accent transition-colors duration-500">
                <User size={18} strokeWidth={1.5} />
              </Link>
              <button 
                onClick={() => setIsCartOpen(true)} 
                className="relative group flex items-center transition-all duration-300 transform active:scale-95"
              >
                <div className="relative">
                  <ShoppingBag size={20} strokeWidth={1} className="text-white group-hover:text-accent transition-colors duration-500" />
                  <AnimatePresence>
                    {cartCount > 0 && (
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-2 bg-accent text-black text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg"
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
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 top-[header-height] bg-black z-[999] lg:hidden flex flex-col p-12 pt-24"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-light tracking-widest uppercase text-white mb-8 hover:text-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

