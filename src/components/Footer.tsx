import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo-text" style={{fontSize: '1.2rem'}}>SARRLUXURY</Link>
          <p className="brand-desc">
            Your ultimate style destination. From viral sets to iconic abayas. 
            Designed in Algeria, made for the world.
          </p>
          <div className="social-links">
            {/* Social Icons Placeholder */}
            <span className="social-icon">IG</span>
            <span className="social-icon">FB</span>
            <span className="social-icon">TT</span>
          </div>
        </div>

        <div className="footer-links-group">
          <h3>Liens rapides</h3>
          <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">À propos</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/conditions">Conditions générales</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h3>Boutique</h3>
          <ul>
            <li><Link href="/products?type=all">Tous les produits</Link></li>
            <li><Link href="/products?type=new">Nouveautés</Link></li>
            <li><Link href="/products?sort=popular">Tendances</Link></li>
            <li><Link href="/products?max_price=3000">Petits prix</Link></li>
            <li><Link href="/cart">Panier</Link></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Communauté</h3>
          <p>Rejoignez-nous pour nos dernières collections.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Votre email" />
            <button>REJOINDRE</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p>© 2026 Sarrluxury. Tous droits réservés.</p>
          <div className="payment-methods">
             {/* Payment Icons */}
             <span>COD</span>
             <span>STRIPE</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
