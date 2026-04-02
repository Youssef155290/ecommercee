import Hero from '@/components/Hero';
import FeatureBar from '@/components/FeatureBar';
import CollectionGrid from '@/components/CollectionGrid';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureBar />
      <CollectionGrid />

      {/* Featured Products: Nouveautés */}
      <section className="product-section">
        <div className="container">
          <div className="section-header">
            <h2>Nouveautés</h2>
            <p>Découvrez notre dernière collection de produits innovants.</p>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Mid Banner */}
      <section className="mid-banner">
        <div className="container banner-inner">
          <div className="banner-content animate-up">
            <span className="subtitle">THE PHILOSOPHY</span>
            <h2 className="luxury-text">Join the world of Sarrluxury</h2>
            <p>Where traditional craft meets contemporary elegance. Designed for the bold, the graceful, and the iconic.</p>
            <button className="btn-primary" style={{marginTop: '40px', background: '#fff', color: '#000', border: 'none'}}>EXPLORE MORE</button>
          </div>
        </div>
      </section>

       {/* Trending Products: Tendances */}
       <section className="product-section" style={{paddingBottom: '8rem'}}>
        <div className="container">
          <div className="section-header">
            <h2>Tendances actuelles</h2>
          </div>
          <div className="product-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
