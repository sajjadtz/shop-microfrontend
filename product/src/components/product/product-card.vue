<template>
  <div
    class="card-shadow rounded-2xl flex flex-col md:h-[250px] h-[350px] overflow-hidden gap-1"
  >
    <n-image
      :src="product?.imageUrl"
      height="250"
      width="100%"
      class="overflow-hidden"
      object-fit="cover"
    />
    <div class="flex flex-col gap-1 p-3 pt-0">
      <span class="text-sm">{{ product?.name }}</span>
      <span class="text-sm">
        $ {{ Number(product?.price).toLocaleString() }}
      </span>
    </div>
    <n-button
      v-if="cartItemCount === 0"
      strong
      secondary
      type="info"
      @click="
        () =>
          handleChangeItem({
            productId: product?.id,
            count: 1,
          })
      "
    >
      add to cart
    </n-button>
    <counter v-else :id="product!.id" :count="cartItemCount" />
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, watch } from "vue";
import { Product } from "../../composables/product/types/product.type";
import { NButton, NImage } from "naive-ui";
import { useCartStore } from "order/CartStore";
import { useChangeItem } from "order/useCart";
import Counter from "./counter.vue";

const props = defineProps({
  product: Object as PropType<Product>,
});

const cartStore = useCartStore();
const { handleChangeItem } = useChangeItem();
const cart = computed(() => cartStore.getCart);

const cartItemCount = computed(
  () =>
    cart.value?.items.find((item) => item.product.id === props.product.id)
      ?.count ?? 0
);
</script>
