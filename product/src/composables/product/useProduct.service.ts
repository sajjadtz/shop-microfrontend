import { useFetchData } from "../api/axios";
import { Product } from "./types/product.type";

export const useGetProductListService = () => {
  return useFetchData<Product[]>(`/v1/product`, {}, false);
};
