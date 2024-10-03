import { Product } from "./types/product.type";
import {
  useCreateProductService,
  useGetProductListService,
} from "./useProduct.service";

export const useGetProductList = () => {
  const getProductList = async () => {
    const fetchData = useGetProductListService();

    // fetch list of products
    const response = await fetchData();

    return response ?? [];
  };

  return { getProductList };
};

export const useCreateProduct = (callbackFn?: Function) => {
  const getProductList = async (data: Pick<Product, "name" | "price">) => {
    const fetchData = useCreateProductService(data);

    // send request for creating new product
    const response = await fetchData();

    // check response and callbackFn and then call callbackFn
    if (response && callbackFn) callbackFn();

    return;
  };

  return { getProductList };
};
