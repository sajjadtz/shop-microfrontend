import { useFetchData } from "../api/axios";
import { Product } from "./types/product.type";

export const useGetProductListService = () => {
  return useFetchData<Product[]>(`/v1/product`, {}, false);
};

export const useCreateProductService = (
  data: Pick<Product, "name" | "price">
) => {
  return useFetchData<Product[]>(
    `/v1/product`,
    {
      data,
      method: "post",
    },
    true
  );
};
