<template>
  <div
    class="md:h-fit h-full w-full flex flex-col py-3 md:border md:border-gray-200 md:rounded-xl md:shadow dark:bg-gray-800 dark:border-gray-700 md:max-w-sm gap-4"
  >
    <span class="font-bold md:mx-3 mx-0"> New Product Info </span>

    <div
      class="flex flex-col justify-between gap-3 md:mx-5 mx-3 md:h-fit h-full md:mb-0 mb-12"
    >
      <div class="flex flex-col gap-1">
        <n-input placeholder="name" v-model:value="name" />
        <n-input-number v-model:value="price" clearable />
      </div>
      <n-button
        strong
        secondary
        type="info"
        :disabled="!(name.length && price > 0)"
        @click="handleSubmit"
      >
        Submit
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NInput, NButton, NInputNumber } from "naive-ui";
import { ref } from "vue";

import "../../index.scss";
import { useCreateProduct } from "../../composables/product/useProduct";

const props = defineProps({
  createCallbackFn: Function,
});

const name = ref("");
const price = ref(0);

const { getProductList } = useCreateProduct(props.createCallbackFn);

const handleSubmit = () => {
  getProductList({
    name: name.value,
    price: price.value,
  });
};
</script>
