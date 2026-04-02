'use client';
import Link from 'next/link';

const collections = [
  { name: "The Silk Road", slug: "silk", image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c33?auto=format&fit=crop&q=80&w=800" },
  { name: "Modern Heritage", slug: "heritage", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&q=80&w=800" },
  { name: "Evening Grace", slug: "grace", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800" }
];

export default function CollectionGrid() {
  return (
    <section className="collections">
      <div className="container">
        <h2 className="section-header luxury-text" style={{fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center'}}>Selected Collections</h2>
        <div className="collections-grid">
          {collections.map((c, i) => (
            <Link href={`/products?category=${c.slug}`} key={i} className="collection-card animate-up">
              <div className="img-wrap">
                <img src={c.image} alt={c.name} loading="lazy" />
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
