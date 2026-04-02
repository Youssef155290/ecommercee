export default function FeatureBar() {
  return (
    <section className="feature-bar fade-in">
      <div className="container feature-grid">
        <div className="feature-item animate-up">
          <div className="icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1" y="3" width="15" height="13" />
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
          </div>
          <div className="text-wrap">
            <h3>Worldwide Express</h3>
            <p>Complimentary shipping on orders over 10.000 DA</p>
          </div>
        </div>

        <div className="feature-item animate-up" style={{transitionDelay: '0.1s'}}>
          <div className="icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="text-wrap">
            <h3>Secure Transactions</h3>
            <p>Premium encryption for your peace of mind</p>
          </div>
        </div>

        <div className="feature-item animate-up" style={{transitionDelay: '0.2s'}}>
          <div className="icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="text-wrap">
            <h3>Curated Craft</h3>
            <p>Designed in Algiers, tailored for excellence</p>
          </div>
        </div>
      </div>
    </section>
  );
}
