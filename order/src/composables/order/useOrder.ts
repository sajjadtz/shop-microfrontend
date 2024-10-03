import { useGetOrderListService } from "./useOrder.service";

export const useGetOrderList = () => {
  const getOrderList = async () => {
    const fetchData = useGetOrderListService();

    // fetch list of order from server
    const response = await fetchData();

    return response ?? [];
  };

  return { getOrderList };
};
