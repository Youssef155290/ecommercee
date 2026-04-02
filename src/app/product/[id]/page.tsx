'use client';
import { useParams } from 'next/navigation';
import { products } from '@/lib/data';
import Link from 'next/link';

export default function ProductPage() {
  const params = useParams();
  const product = products.find(p => p.id === Number(params.id)) || products[0];

  return (
    <main className="product-detail-page">
      <div className="container product-grid-detail">
        {/* Images */}
        <div className="product-images animate-up">
           <img src={product.image} alt={product.name} />
        </div>

        {/* Info */}
        <div className="product-info-detail animate-up" style={{animationDelay: '0.2s'}}>
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link> / <Link href="/products">{product.category}</Link>
          </nav>
          
          <h1>{product.name}</h1>
          <p className="price-detail">{product.price}</p>
          
          <div className="product-description">
            <p>
              Élevez votre style avec notre {product.name}. 
              Conçu pour allier élégance et confort, cette pièce est un incontournable de notre collection. 
              Matières sélectionnées avec soin pour une qualité exceptionnelle.
            </p>
          </div>

          <div className="purchase-options">
             <div className="quantity">
               <span>Quantité</span>
               <div className="qty-controls">
                 <button>-</button>
                 <span>1</span>
                 <button>+</button>
               </div>
             </div>

             <button className="btn-primary buy-btn">AJOUTER AU PANIER</button>
             <button className="btn-outline checkout-btn" style={{marginTop: '1rem', width: '100%'}}>COMMANDER MAINTENANT</button>
          </div>

          <div className="trust-badges">
             <div className="badge">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
               En Stock
             </div>
             <div className="badge">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polyline points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
               Livraison 48h
             </div>
          </div>
        </div>
      </div>

    </main>
  );
}
