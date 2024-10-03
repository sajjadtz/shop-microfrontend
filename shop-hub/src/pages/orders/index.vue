<template>
  <div class="mt-6 px-4 pb-12">
    <order-list />
  </div>
</template>

<script setup lang="ts">
import OrderList from "order/OrderList";
import { useAuthStore } from "auth/AuthStore";
import { useRouter } from "vue-router";
import { watch } from "vue";

const router = useRouter();
const authStore = useAuthStore();

watch(
  authStore,
  () => {
    if (!authStore.isLoggedIn) router.push("login");
  },
  { immediate: true, deep: true }
);
</script>
