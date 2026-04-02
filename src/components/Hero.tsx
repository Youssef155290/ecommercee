'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content container">
        <div className="text-reveal">
          <span className="subtitle animate-up">BIENVENUE CHEZ SARRLUXURY</span>
          <h1 className="animate-up">
            Your ultimate <br />
            <span className="luxury-text">style destination</span>
          </h1>
          <p className="animate-up">
            From viral sets to iconic abayas. <br />
            Get the look you’ve been scrolling for.
          </p>
          <div className="cta-group animate-up">
            <Link href="/products" className="btn-primary">
              GET YOURS NOW
            </Link>
            <Link href="/products" className="btn-outline hero-btn-outline">
              BROWSE COLLECTIONS
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
