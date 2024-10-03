import { useCartStore } from "../../store/cart.store";
import {
  useChangeItemService,
  useCheckoutCartService,
} from "./useCart.service";

export const useChangeItem = () => {
  const handleChangeItem = async (body: {
    productId: string;
    count: number;
  }) => {
    const fetchData = useChangeItemService(body);
    const cartStore = useCartStore();

    const response = await fetchData();

    if (response) {
      cartStore.setCart(response);
    }
  };

  return {
    handleChangeItem,
  };
};

export const useCheckoutCart = (callbackFn?: Function) => {
  const handleCheckoutCart = async () => {
    const fetchData = useCheckoutCartService();
    const cartStore = useCartStore();

    const response = await fetchData();

    if (response) {
      cartStore.setCart(response);
      if (callbackFn) callbackFn();
    }
    return response;
  };

  return {
    handleCheckoutCart,
  };
};
