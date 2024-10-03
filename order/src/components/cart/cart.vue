<template>
  <div class="grid md:grid-cols-3 grid-cols-1 gap-3">
    <div class="md:col-span-2 h-full flex flex-col gap-3 pb-44 md:pb-0">
      <template v-for="item in cart?.items">
        <cart-item :item="item" />
      </template>
    </div>
    <div
      v-if="cart"
      class="bg-white flex flex-col justify-between md:border p-5 rounded-2xl h-32 md:static bottom-9 left-0 fixed w-full"
    >
      <span class="font-bold text-lg">
        $ {{ Number(cart.totalPrice ?? 0).toLocaleString() }}
      </span>
      <n-button
        :disabled="(cart.totalPrice ?? 0) === 0"
        secondary
        strong
        type="info"
        class="font-bold"
        @click="handleCheckoutCart"
      >
        Checkout
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import "../../index.scss";
import { useCartStore } from "../../store/cart.store";
import CartItem from "./cart-item.vue";
import { computed } from "vue";
import { useCheckoutCart } from "../../composables/cart/useCart";

const props = defineProps({
  checkoutCallbackFn: Function,
});

const cartStore = useCartStore();
const { handleCheckoutCart } = useCheckoutCart(props.checkoutCallbackFn);

const cart = computed(() => cartStore.getCart);
</script>
