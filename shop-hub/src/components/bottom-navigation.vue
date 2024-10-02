<template>
  <div
    class="md:!hidden w-full flex justify-around fixed bottom-0 card-shadow min-h-10 items-center"
  >
    <RouterLink to="/">
      <span
        :class="[
          'text-3xl text-neutral-700',
          path.fullPath !== '/' ? 'material-icons-outlined' : 'material-icons',
        ]"
        >home</span
      >
    </RouterLink>
    <RouterLink to="/cart">
      <span
        :class="[
          'text-3xl text-neutral-700',
          path.fullPath !== '/cart'
            ? 'material-icons-outlined'
            : 'material-icons',
        ]"
        >shopping_cart</span
      >
    </RouterLink>
    <RouterLink to="/profile">
      <span
        :class="[
          'text-3xl text-neutral-700',
          path.fullPath !== '/profile'
            ? 'material-icons-outlined'
            : 'material-icons',
        ]"
        >person</span
      >
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const path = useRoute();
</script>
