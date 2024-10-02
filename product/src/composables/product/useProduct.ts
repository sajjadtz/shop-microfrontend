import { useGetProductListService } from "./useProduct.service";

export const useGetProductList = () => {
  const getProductList = async () => {
    const fetchData = useGetProductListService();

    const response = await fetchData();

    return response ?? [];
  };

  return { getProductList };
};
