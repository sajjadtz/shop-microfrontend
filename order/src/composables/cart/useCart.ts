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

    // send request for changing an item in cart
    const response = await fetchData();

    // check response
    if (response) {
      // update cart global store
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

    // send checkout request for checkout cart and create order
    const response = await fetchData();

    // check response
    if (response) {
      // update cart global store
      cartStore.setCart(response);

      // check if callbackFn provided and then call it
      if (callbackFn) callbackFn();
    }
    return response;
  };

  return {
    handleCheckoutCart,
  };
};
