<template>
  <div class="grid grid-cols-3">
    <div class="col-span-2">items</div>
    <div
      v-if="cartStore.getCart"
      class="flex flex-col justify-between border p-5 rounded-2xl min-h-32"
    >
      <span class="font-bold text-lg">
        $ {{ cartStore.getCart.totalPrice ?? 0 }}
      </span>
      <n-button secondary strong type="info" class="font-bold">
        Checkout
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import "../../index.scss";
import { useCartStore } from "../../store/cart.store";

const cartStore = useCartStore();
</script>
