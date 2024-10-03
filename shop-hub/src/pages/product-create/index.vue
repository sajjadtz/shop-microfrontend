<template>
  <div class="px-3 h-screen flex justify-center items-center">
    <product-form :createCallbackFn="createCallbackFn" />
  </div>
</template>

<script setup lang="ts">
import ProductForm from "product/ProductForm";
import { useAuthStore } from "auth/AuthStore";
import { useRouter } from "vue-router";
import { watch } from "vue";

const router = useRouter();

const createCallbackFn = () => {
  router.push("/");
};

const authStore = useAuthStore();

watch(
  authStore,
  () => {
    if (!authStore.isLoggedIn) router.push("login");
  },
  { immediate: true, deep: true }
);
</script>
