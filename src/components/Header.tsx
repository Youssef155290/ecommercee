'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header-glass">
      {/* Top Bar - Announcement */}
      <div className="top-banner">
        <p>LIVRAISON GRATUITE SUR TOUTES LES COMMANDES DE PLUS DE 10.000 DA</p>
      </div>

      <nav className="container">
        <div className="nav-grid">
          {/* Menu Icon (Mobile) */}
          <div className="menu-icon-wrap">
            <button className="menu-icon">
              <span></span>
              <span></span>
            </button>
          </div>

          {/* Logo */}
          <div className="logo-section">
            <Link href="/" className="logo-text">
              SARRLUXURY
            </Link>
          </div>

          {/* Main Links (Desktop) */}
          <ul className="nav-links">
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/products">Boutique</Link></li>
            <li><Link href="/products?category=ensembles">Catégories</Link></li>
            <li><Link href="#about">À propos</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>

          {/* Actions */}
          <div className="nav-actions">
            <button className="icon-btn search-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21L16.65 16.65" />
              </svg>
            </button>
            <Link href="/account" className="icon-btn account-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
            <Link href="/cart" className="cart-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="cart-count">{cartCount}</span>
            </Link>
          </div>
        </div>
      </nav>

    </header>
  );
}
