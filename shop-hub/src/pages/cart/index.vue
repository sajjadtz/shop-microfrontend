<template>
  <div class="mt-6 px-4">
    <Cart :checkoutCallbackFn="checkoutCallbackFn" />
  </div>
</template>

<script setup lang="ts">
import Cart from "order/Cart";
import { useRouter } from "vue-router";

const router = useRouter();

const checkoutCallbackFn = () => {
  router.push("orders");
};
</script>
