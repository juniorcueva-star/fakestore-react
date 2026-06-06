import axios from "axios";
import type { Product } from "../types/product";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function getProducts() {
  const response = await api.get<Product[]>("/products");

  return response.data;
}
