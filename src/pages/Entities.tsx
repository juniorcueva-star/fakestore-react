import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";

export function Entities() {
  const { products, isLoading, error } = useProducts();

  return (
    <main className="page">
      <h1>Productos</h1>

      {isLoading && <p>Cargando productos...</p>}

      {error && <p className="error-message">{error}</p>}

      {!isLoading && !error && (
        <section className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}
