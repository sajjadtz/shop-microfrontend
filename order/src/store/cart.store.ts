import { Cart } from "../composables/cart/types/cart.type";
import { useCartService } from "../composables/cart/useCart.service";
import { defineStore } from "pinia";

export type CartState = {
  loading: boolean;
  cart?: Cart;
};

export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    loading: false,
    cart: undefined,
  }),
  getters: {
    isLoading: (state) => state.loading,
    getCart: (state) => state.cart,
  },
  actions: {
    // get cart data
    setCart(cart: Cart) {
      this.cart = cart;
    },
    // fetch cart data from server and set data in store
    fetchAndSetCartData() {
      this.loading = true;
      const fetchCart = useCartService();
      void fetchCart()
        .then((response) => {
          if (response != undefined) {
            this.setCart(response);
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
});
