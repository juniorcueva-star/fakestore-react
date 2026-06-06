import { ProductCard } from "../components/ProductCard";
import { useFavorites } from "../hooks/useFavorites";
import { useProducts } from "../hooks/useProducts";

export function Home() {
  const { products, isLoading, error } = useProducts();
  const { isFavorite, notification, toggleFavorite } = useFavorites();
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="page">
      <section className="hero">
        <h1>fakestore-react</h1>
        <p>Una SPA para explorar productos de Fake Store API.</p>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <h2>Productos destacados</h2>
          <p>Una muestra rapida de productos disponibles.</p>
        </div>

        {isLoading && <p>Cargando productos...</p>}

        {error && <p className="error-message">{error}</p>}

        {!isLoading && !error && (
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isFavorite={isFavorite(product.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </section>

      {notification && <div className="notification">{notification}</div>}
    </main>
  );
}
