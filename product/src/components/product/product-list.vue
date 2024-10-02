<template>
  <div class="px-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
    <div v-for="product in products">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import ProductCard from "./product-card.vue";

import "../../index.scss";
import { useGetProductList } from "../../composables/product/useProduct";
import { Product } from "../../composables/product/types/product.type";

const { getProductList } = useGetProductList();

const products = ref<Product[]>([]);

onMounted(() => {
  getProductList().then((res) => {
    products.value = res;
  });
});
</script>
