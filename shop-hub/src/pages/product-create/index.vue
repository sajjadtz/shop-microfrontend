<template>
  <div class="px-3 h-screen flex justify-center items-center">
    <product-form :createCallbackFn="createCallbackFn" />
  </div>
</template>

<script setup lang="ts">
import ProductForm from "product/ProductForm";
import { useRouter } from "vue-router";

const router = useRouter();

const createCallbackFn = () => {
  router.push("/");
};
</script>
