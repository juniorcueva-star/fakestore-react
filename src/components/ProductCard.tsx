import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.title} />
      </div>

      <CardContent className="product-content">
        <span>{product.category}</span>
        <h2>{product.title}</h2>
        <p>{product.description.slice(0, 90)}...</p>
        <strong>${product.price.toFixed(2)}</strong>
        <Button
          className="favorite-button"
          type="button"
          variant={isFavorite ? "outline" : "default"}
          onClick={() => onToggleFavorite(product.id)}
        >
          {isFavorite ? "Quitar favorito" : "Agregar favorito"}
        </Button>
      </CardContent>
    </Card>
  );
}
