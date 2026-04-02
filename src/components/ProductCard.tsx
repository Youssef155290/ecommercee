'use client';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card animate-up">
      <div className="img-wrap">
        <img src={product.image} alt={product.name} />
        <div className="product-status-tag">{product.status}</div>
        <div className="quick-add">
          <button 
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
      </div>
    </div>
  );
}
