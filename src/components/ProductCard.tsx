import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (productId: number) => void;
};

export function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) {
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
        <button
          className="favorite-button"
          type="button"
          onClick={() => onToggleFavorite(product.id)}
        >
          {isFavorite ? "Quitar favorito" : "Agregar favorito"}
        </button>
      </div>
    </article>
  );
}
