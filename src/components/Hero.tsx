'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-overlay">
        <img 
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000" 
          alt="SARRLUXURY Seasonal Campaign" 
          className="hero-image"
        />
      </div>
      <div className="hero-content container">
        <div className="hero-text-box">
          <span className="subtitle animate-up">EST. 2024 — ALGERIA</span>
          <h1 className="animate-up">
            Elevate Your <br />
            <span className="luxury-text">Presence</span>
          </h1>
          <p className="animate-up">
            Curated collections for the modern woman. Discover the intersection of tradition and avant-garde style.
          </p>
          <div className="cta-group animate-up">
            <Link href="/products" className="btn-primary">
              SHOP COLLECTION
            </Link>
            <Link href="/products" className="btn-outline">
              VIEW LOOKBOOK
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
