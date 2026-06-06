import { useEffect, useState } from "react";
import { getProducts } from "../services/productsApi";
import type { Product } from "../types/product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("No se pudieron cargar los productos.");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  return { products, isLoading, error };
}
