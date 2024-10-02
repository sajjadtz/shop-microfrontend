<template>
  <div class="card-shadow rounded-2xl flex flex-col md:h-[250px] h-[350px] overflow-hidden gap-1">
    <img
      :src="product?.imageUrl"
      height="250"
      class="overflow-hidden object-cover"
    />
    <div class="flex flex-col gap-1 p-3 pt-0">
      <span class="text-sm">{{ product?.name }}</span>
      <span class="text-sm">$ {{ Number(product?.price).toLocaleString() }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { Product } from "../../composables/product/types/product.type";

const props = defineProps({
  product: Object as PropType<Product>,
});
</script>
