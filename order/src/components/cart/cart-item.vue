<template>
  <div
    v-if="item?.product"
    class="w-full min-h-20 border p-2 flex rounded-2xl justify-between items-center"
  >
    <div class="flex items-center gap-3">
      <n-image
        :src="item?.product?.imageUrl"
        height="100"
        width="100"
        class="rounded-2xl overflow-hidden aspect-square"
        object-fit="cover"
      />
      <div class="flex flex-col gap-1">
        <span class="text-sm">{{ item?.product?.name }}</span>
        <span class="text-sm">
          $ {{ Number(item?.product?.price).toLocaleString() }}
        </span>
      </div>
    </div>
    <div class="flex flex-col items-center gap-3">
      <span class="font-bold md:text-lg">
        $ {{ Number(item.product.price * item.count).toLocaleString() }}
      </span>
      <counter :count="item.count" :id="item.product.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CartItem } from "../../composables/cart/types/cart-item.type";
import { PropType } from "vue";
import { NImage } from "naive-ui";
import Counter from "./counter.vue";

const props = defineProps({
  item: Object as PropType<CartItem>,
});
</script>
