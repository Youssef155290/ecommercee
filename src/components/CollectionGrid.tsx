'use client';
import Link from 'next/link';

import { collections } from '@/lib/data';

export default function CollectionGrid() {
  return (
    <section className="collections">
      <div className="container">
        <h2 className="section-header luxury-text" style={{fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center'}}>Selected Collections</h2>
        <div className="collections-grid">
          {collections.map((c, i) => (
            <Link href={`/products?category=${c.slug}`} key={i} className="collection-card animate-up">
              <div className="img-wrap">
                <img src={c.image} alt={c.name} />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{c.name}</h3>
                    <span className="discover">EXPLORE COLLECTION</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
