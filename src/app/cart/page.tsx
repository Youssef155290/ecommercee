'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, cartTotal } = useCart();

  return (
    <main className="cart-page">
      <div className="container">
        <h1 className="page-title">Votre Panier</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Votre panier est actuellement vide.</p>
            <Link href="/products" className="btn-primary" style={{marginTop: '2rem'}}>
              CONTINUER VOS ACHATS
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p className="price">{item.price}</p>
                    <p className="qty">Quantité: {item.quantity}</p>
                  </div>
                  <div className="item-actions">
                    <button onClick={() => removeFromCart(item.id)} className="remove-btn">
                      Supprimer
                    </button>
                    <p className="item-total">
                       {/* Calculate item total quickly parsing price string */}
                       {(parseInt(item.price.replace(/[^\d]/g, '')) * item.quantity).toLocaleString() + ' DA'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <h3>Résumé de la commande</h3>
              <div className="summary-row">
                <span>Sous-total</span>
                <span>{cartTotal}</span>
              </div>
              <div className="summary-row">
                <span>Livraison</span>
                <span>Calculé à l'étape suivante</span>
              </div>
              <div className="summary-total">
                <span>Total</span>
                <span>{cartTotal}</span>
              </div>
              
              <button className="btn-primary" style={{width: '100%', marginTop: '2rem'}}>
                VALIDER LA COMMANDE
              </button>
              
              <div className="trust-checkout">
                <p>✓ Paiement Sécurisé</p>
                <p>✓ Paiement à la livraison disponible (COD)</p>
              </div>
            </div>
          </div>
        )}
      </div>

    </main>
  );
}
