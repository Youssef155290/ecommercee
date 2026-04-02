'use client';
import { useParams } from 'next/navigation';
import { products } from '@/lib/data';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function ProductPage() {
  const params = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === Number(params.id)) || products[0];

  return (
    <main className="product-detail-page fade-in">
      <div className="container product-grid-detail">
        {/* Images */}
        <div className="product-images animate-up">
           <img src={product.image} alt={product.name} className="main-product-img" />
        </div>

        {/* Info */}
        <div className="product-info-detail animate-up">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/products">{product.category}</Link>
          </nav>
          
          <h1 className="luxury-text product-detail-title">{product.name}</h1>
          <p className="price-detail">{product.price}</p>
          
          <div className="product-description">
            <span className="desc-subtitle">THE DETAILS</span>
            <p>
              Elevate your daily presence with the {product.name}. 
              Meticulously tailored from our signature textiles, this piece embodies the intersection of architectural structure and fluid grace. 
              Designed in Algiers for the world.
            </p>
          </div>

          <div className="purchase-options">
             <div className="quantity-wrap">
               <span className="label">QUANTITY</span>
               <div className="qty-controls">
                 <button className="qty-btn" aria-label="Decrease quantity">－</button>
                 <span className="qty-val">1</span>
                 <button className="qty-btn" aria-label="Increase quantity">＋</button>
               </div>
             </div>

             <button 
               className="btn-primary buy-btn" 
               onClick={() => addToCart(product)}
             >
               ADD TO BAG
             </button>
             <button className="btn-outline checkout-btn">
               EXPRESS CHECKOUT
             </button>
          </div>

          <div className="trust-badges">
             <div className="badge">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12l2 2 4-4"/></svg>
               In Limited Stock
             </div>
             <div className="badge">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="1" y="3" width="15" height="13"/><polyline points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
               Global Express Shipping
             </div>
             <div className="badge">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
               Boutique Packaging
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
