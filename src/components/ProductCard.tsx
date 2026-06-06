import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card">
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
  );
}
