<template>
  <div class="w-screen h-screen">
    <navbar />
    <router-view />
    <bottom-navigation />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAuthStore } from "auth/AuthStore";
import { useCartStore } from "order/CartStore";
import navbar from "./components/navbar.vue";
import bottomNavigation from "./components/bottom-navigation.vue";

const authStore = useAuthStore();
const cartStore = useCartStore();

onMounted(() => {
  authStore.initial();
  cartStore.fetchAndSetCartData();
});
</script>
