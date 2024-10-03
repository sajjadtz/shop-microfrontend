import { Product } from "@/store/product.type";

export type Cart = {
  items: { product: Product; count: number }[];
  totalPrice: number;
};
