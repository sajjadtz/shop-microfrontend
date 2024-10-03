import { useGetOrderListService } from "./useOrder.service";

export const useGetOrderList = () => {
  const getOrderList = async () => {
    const fetchData = useGetOrderListService();

    const response = await fetchData();

    return response ?? [];
  };

  return { getOrderList };
};
