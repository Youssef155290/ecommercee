'use client';

const features = [
  {
    title: "Paiement à la livraison",
    desc: "Payez en toute sécurité à l'arrivée de votre commande.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  },
  {
    title: "Livraison express",
    desc: "Livraison rapide à travers les 69 wilayas.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 17l5-5-5-5" />
        <path d="M13.8 12H3" />
        <rect x="13.8" y="5" width="7.2" height="14" rx="2" />
      </svg>
    )
  },
  {
    title: "Service 24/7",
    desc: "Nous sommes disponibles pour vous aider à tout moment.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
];

export default function FeatureBar() {
  return (
    <section className="feature-bar">
      <div className="container feature-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-item">
            <div className="icon-wrap">{f.icon}</div>
            <div className="text-wrap">
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
