import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';

export default function ProductsPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  // Simple filter
  let displayedProducts = products;
  if (searchParams.category) {
    displayedProducts = products.filter(p => p.category.toLowerCase() === String(searchParams.category).toLowerCase());
  }

  return (
    <main className="product-page-list">
      <div className="container">
        <h1 className="page-title">Notre Boutique</h1>
        <p className="page-subtitle">Découvrez notre collection de pièces iconiques.</p>
        
        <div className="product-grid" style={{marginTop: '3rem'}}>
          {displayedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {displayedProducts.length === 0 && (
           <p style={{textAlign: 'center', marginTop: '2rem'}}>Aucun produit trouvé dans cette catégorie.</p>
        )}
      </div>

    </main>
  );
}
