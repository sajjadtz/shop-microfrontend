import { CartItem } from "../../cart/types/cart-item.type";

export type Order = {
  items: CartItem[];
  totalPrice: number;
  createdAt: Date;
};
