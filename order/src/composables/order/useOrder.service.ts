import { useFetchData } from "../api/axios";
import { Order } from "./types/order.type";

export const useGetOrderListService = () => {
  return useFetchData<Order[]>(`/v1/order`, {}, true);
};
