'use client';
import Link from 'next/link';

import { collections } from '@/lib/data';

export default function CollectionGrid() {
  return (
    <section className="collections py-24 md:py-32 bg-black">
      <div className="container">
        <div className="text-center mb-20 animate-up">
          <span className="text-accent tracking-[0.4em] text-[10px] font-bold uppercase mb-4 block">SÉLECTION EXCLUSIVE</span>
          <h2 className="text-4xl md:text-6xl font-extralight text-white tracking-widest uppercase">
            Nos <span className="luxury-text italic text-accent low-case">Univers</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.slice(0, 3).map((c, i) => (
            <Link href={`/products?category=${c.slug}`} key={i} className="group relative block h-[700px] overflow-hidden animate-up">
              <div className="absolute inset-0 transition-transform duration-[2s] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
                <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </div>
              <div className="absolute inset-0 p-12 flex flex-col justify-end items-center text-center">
                <span className="text-accent text-[10px] tracking-[0.3em] font-bold mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  DÉCOUVRIR
                </span>
                <h3 className="text-3xl font-extralight text-white tracking-widest uppercase mb-8 group-hover:text-accent transition-colors duration-700">
                  {c.name}
                </h3>
                <div className="w-0 h-[1px] bg-accent group-hover:w-32 transition-all duration-700"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
