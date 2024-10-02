import { Cart } from "../composables/cart/types/cart.type";
import { useCartService } from "../composables/cart/useCart.service";
import { defineStore } from "pinia";

export type CartState = {
  cart?: Cart;
};

export const useCartStore = defineStore("cart", {
  state: (): CartState => ({
    cart: undefined,
  }),
  getters: {
    getCart: (state) => state.cart,
  },
  actions: {
    setCart(cart: Cart) {
      this.cart = cart;
    },
    // fetch cart data from server and set data in store
    fetchAndSetCartData() {
      const fetchCart = useCartService();
      void fetchCart().then((response) => {
        if (response != undefined) {
          this.setCart(response);
        }
      });
    },
    // checkout cart(empty the cart items)
    checkout() {
      if (this.cart)
        this.setCart({
          ...this.cart,
          items: [],
        });
    },
  },
});
