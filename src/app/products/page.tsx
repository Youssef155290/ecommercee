import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';

export default function ProductsPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  // Simple filter
  let displayedProducts = products;
  if (searchParams.category) {
    displayedProducts = products.filter(p => p.category.toLowerCase() === String(searchParams.category).toLowerCase());
  }

  return (
    <main className="product-page-list fade-in">
      <div className="container">
        <header className="page-header animate-up">
          <span className="subtitle">COLLECTIONS</span>
          <h1 className="page-title luxury-text">The Complete Edit</h1>
          <p className="page-subtitle">From minimal silhouettes to signature statement pieces. Designed to endure.</p>
        </header>
        
        <div className="product-grid-wrap animate-up" style={{marginTop: '6rem'}}>
          <div className="product-grid">
            {displayedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          {displayedProducts.length === 0 && (
             <div className="empty-state" style={{textAlign: 'center', padding: '4rem 0'}}>
               <p style={{marginBottom: '2rem'}}>No pieces found in this selection.</p>
               <Link href="/products" className="btn-outline">VIEW ALL</Link>
             </div>
          )}
        </div>
      </div>
    </main>
  );
}
