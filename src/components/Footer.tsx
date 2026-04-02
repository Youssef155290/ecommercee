import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo-text">SARRLUXURY</Link>
          <p className="brand-desc">
            Curated elegance for the modern woman. Designed in Algeria, made for the world. 
            Est. 2024.
          </p>
          <div className="social-links">
            <Link href="#" className="social-link">Instagram</Link>
            <Link href="#" className="social-link">TikTok</Link>
            <Link href="#" className="social-link">Pinterest</Link>
          </div>
        </div>

        <div className="footer-links-group">
          <h3>Collection</h3>
          <ul>
            <li><Link href="/products">View All</Link></li>
            <li><Link href="/products?category=ensembles">Ensembles</Link></li>
            <li><Link href="/products?category=abayas">Abayas</Link></li>
            <li><Link href="/products?category=hauts">Hauts</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h3>Customer Core</h3>
          <ul>
            <li><Link href="/shipping">Shipping Info</Link></li>
            <li><Link href="/returns">Returns</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Stay Inspired</h3>
          <p>Join our inner circle for exclusive previews and editorial content.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p>© 2026 SARRLUXURY. ALL RIGHTS RESERVED.</p>
          <div className="legal-links">
             <Link href="/privacy">Privacy Policy</Link>
             <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
