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
            <article className="product-card" key={product.id}>
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.title} />
              </div>

              <div className="product-content">
                <span>{product.category}</span>
                <h2>{product.title}</h2>
                <p>{product.description.slice(0, 90)}...</p>
                <strong>${product.price.toFixed(2)}</strong>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
