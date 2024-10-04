<template>
  <div class="flex flex-col gap-4">
    <span v-if="orders.length===0">
      There is no order
    </span>
    <template v-for="order in orders">
      <div class="border rounded-2xl flex justify-between p-5 flex-col gap-4">
        <div class="flex gap-2 items-center overflow-x-auto flex-wrap">
          <template v-for="item in order.items">
            <n-image
              :src="item.product.imageUrl"
              height="100"
              width="100"
              class="rounded-2xl overflow-hidden aspect-square"
              object-fit="cover"
            />
          </template>
        </div>
        <div class="flex flex-col gap-2">
          <span class="md:text-lg font-bold">
            $ {{ Number(order.totalPrice ?? 0).toLocaleString() }}
          </span>
          <span> {{ new Date(order.createdAt).toLocaleDateString() }} </span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useGetOrderList } from "../../composables/order/useOrder";
import { Order } from "../../composables/order/types/order.type";
import { onMounted, ref } from "vue";
import { NImage } from "naive-ui";
import "../../index.scss";

const { getOrderList } = useGetOrderList();
const orders = ref<Order[]>([]);

onMounted(() => {
  getOrderList().then((res) => {
    orders.value = res;
  });
});
</script>
