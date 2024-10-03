<template>
  <div class="flex justify-around items-center mb-2">
    <n-button
      strong
      secondary
      type="info"
      class="text-lg font-bold"
      @click="
        () =>
          handleChangeItem({
            productId: id,
            count: count + 1,
          })
      "
      >+</n-button
    >
    <span class="font-bold">{{ count }}</span>
    <n-button
      strong
      secondary
      type="error"
      class="text-lg font-bold"
      @click="
        () =>
          handleChangeItem({
            productId: id,
            count: count - 1,
          })
      "
      >-</n-button
    >
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import { useChangeItem } from "order/useCart";

const props = defineProps({
  id: String,
  count: Number,
});

const { handleChangeItem } = useChangeItem();
</script>
