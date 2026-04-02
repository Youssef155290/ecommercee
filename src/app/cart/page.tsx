'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <main className="cart-page fade-in">
      <div className="container">
        <header className="page-header animate-up">
          <span className="subtitle">REVIEW SELECTION</span>
          <h1 className="page-title luxury-text">Your Shopping Bag</h1>
        </header>
        
        {cart.length === 0 ? (
          <div className="empty-cart animate-up">
            <p>Your bag is currently empty.</p>
            <Link href="/products" className="btn-primary" style={{marginTop: '3rem'}}>
              CONTINUE BROWSING
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items animate-up">
              <div className="cart-labels">
                <span>PRODUCT</span>
                <span>TOTAL</span>
              </div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-main-info">
                    <div className="item-img">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <span className="item-category">{item.category}</span>
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-price">{item.price}</p>
                      <div className="item-meta">
                        <span className="qty">Qty: {item.quantity}</span>
                        <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                          REMOVE
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item-total-display">
                    <p className="item-total-price">
                       {(parseInt(item.price.replace(/[^\d]/g, '')) * item.quantity).toLocaleString() + ' DA'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary animate-up">
              <div className="summary-box">
                <h3 className="summary-title">Summary</h3>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>{cartTotal}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span className="muted-text">Calculated at next step</span>
                </div>
                <div className="summary-total-row">
                  <span>Estimated Total</span>
                  <span className="total-amount">{cartTotal}</span>
                </div>
                
                <button className="btn-primary checkout-btn" style={{width: '100%', marginTop: '3rem'}}>
                  PROCEED TO CHECKOUT
                </button>
                
                <div className="checkout-perks">
                  <p>Secure global checkout</p>
                  <p>Cash on delivery available in Algeria</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
