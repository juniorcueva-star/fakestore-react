import { useEffect, useState } from "react";

const FAVORITES_KEY = "fakestore-react:favorites";

function getInitialFavorites() {
  const savedFavorites = localStorage.getItem(FAVORITES_KEY);

  if (!savedFavorites) {
    return [];
  }

  try {
    return JSON.parse(savedFavorites) as number[];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(getInitialFavorites);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  useEffect(() => {
    if (!notification) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setNotification("");
    }, 2200);

    return () => window.clearTimeout(timeoutId);
  }, [notification]);

  function isFavorite(productId: number) {
    return favoriteIds.includes(productId);
  }

  function toggleFavorite(productId: number) {
    setFavoriteIds((currentFavorites) => {
      const productIsFavorite = currentFavorites.includes(productId);

      setNotification(
        productIsFavorite
          ? "Producto quitado de favoritos"
          : "Producto agregado a favoritos",
      );

      if (productIsFavorite) {
        return currentFavorites.filter((id) => id !== productId);
      }

      return [...currentFavorites, productId];
    });
  }

  return { favoriteIds, isFavorite, notification, toggleFavorite };
}
