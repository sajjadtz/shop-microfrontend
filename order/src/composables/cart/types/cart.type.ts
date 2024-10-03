import { CartItem } from "./cart-item.type";

export type Cart = {
  items: CartItem[];
  totalPrice: number;
};
