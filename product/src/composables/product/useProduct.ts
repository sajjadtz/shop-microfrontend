import { Product } from "./types/product.type";
import {
  useCreateProductService,
  useGetProductListService,
} from "./useProduct.service";

export const useGetProductList = () => {
  const getProductList = async () => {
    const fetchData = useGetProductListService();

    const response = await fetchData();

    return response ?? [];
  };

  return { getProductList };
};

export const useCreateProduct = (callbackFn?: Function) => {
  const getProductList = async (data: Pick<Product, "name" | "price">) => {
    const fetchData = useCreateProductService(data);

    const response = await fetchData();

    if (response && callbackFn) callbackFn();

    return;
  };

  return { getProductList };
};
