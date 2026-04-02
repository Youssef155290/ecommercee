'use client';
import Link from 'next/link';

const collections = [
  { name: "Ensembles", slug: "ensembles", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800" },
  { name: "Hauts", slug: "hauts", image: "https://images.unsplash.com/photo-1594932224010-756707767eaa?auto=format&fit=crop&q=80&w=800" },
  { name: "Robe", slug: "robe", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800" }
];

export default function CollectionGrid() {
  return (
    <section className="collections">
      <div className="container">
        <h2 className="section-title">Collections sélectionnées</h2>
        <div className="grid">
          {collections.map((c, i) => (
            <Link href={`/products?category=${c.slug}`} key={i} className="collection-card">
              <div className="img-wrap">
                <img src={c.image} alt={c.name} />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{c.name}</h3>
                    <span className="discover">DÉCOUVRIR</span>
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
