import { useFetchData } from "../api/axios";
import { Cart } from "./types/cart.type";

export const useCartService = () => {
  return useFetchData<Cart>(`/v1/cart`, {}, true);
};

export const useChangeItemService = (data: {
  productId: string;
  count: number;
}) => {
  return useFetchData<Cart>(`/v1/cart`, { data, method: "post" }, true);
};
