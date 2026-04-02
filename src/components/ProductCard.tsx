'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`}>
        <div className="img-wrap">
          <img src={product.image} alt={product.name} />
          <div className="product-tag">{product.status}</div>
        </div>
      </Link>
      <div className="product-info">
        <Link href={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p className="price">{product.price}</p>
        <div className="quick-add" style={{position: 'static', opacity: 1, padding: '1rem 0'}}>
             <button className="add-to-cart-btn" onClick={() => addToCart(product)}>AJOUTER AU PANIER</button>
        </div>
      </div>

    </div>
  );
}
