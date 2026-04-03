'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-flowing-golden-silk-fabric-44474-large.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
      </div>

      <div className="hero-content container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="subtitle block mb-8 text-accent tracking-[0.6em] text-xs font-semibold animate-up">
            COLLECTION AUTOMNE/HIVER 2026
          </span>
          <h1 className="text-white text-7xl md:text-9xl leading-[0.9] mb-12 font-extralight tracking-tighter animate-up">
            L'Élégance <br />
            <span className="luxury-text italic text-accent low-case">Redéfinie</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light mb-16 max-w-2xl mx-auto leading-relaxed animate-up">
            Une fusion audacieuse entre héritage traditionnel et vision contemporaine. Conçu pour celles qui osent l'exceptionnel.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-up">
            <Link href="/products" className="btn-primary px-12 py-5 bg-white text-black hover:bg-accent hover:text-white transition-all duration-500 tracking-widest text-xs font-bold">
              DÉCOUVRIR LE LOOKBOOK
            </Link>
            <Link href="/products" className="group flex items-center gap-4 text-white hover:text-accent transition-colors tracking-widest text-xs font-bold">
              VOIR LES COLLECTIONS
              <span className="w-12 h-[1px] bg-white group-hover:bg-accent transition-all duration-500"></span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes slowZoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
}
