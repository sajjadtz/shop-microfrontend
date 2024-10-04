<template>
  <div class="mt-6 px-4">
    <Cart :checkoutCallbackFn="checkoutCallbackFn" />
  </div>
</template>

<script setup lang="ts">
import Cart from "order/Cart";
import { useRouter } from "vue-router";
import { useAuthStore } from "auth/AuthStore";
import { useCartStore } from "order/CartStore";
import { onMounted, watch } from "vue";

const router = useRouter();
const authStore = useAuthStore();

const cartStore = useCartStore();

onMounted(() => {
  if (!cartStore.getCart && !cartStore.isLoading)
    cartStore.fetchAndSetCartData();
});

watch(
  authStore,
  () => {
    if (!authStore.isLoggedIn) router.push("login");
  },
  { immediate: true, deep: true }
);

const checkoutCallbackFn = () => {
  router.push("orders");
};
</script>
