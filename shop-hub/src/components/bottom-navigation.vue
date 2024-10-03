<template>
  <div
    class="md:!hidden w-full flex justify-around fixed bottom-0 card-shadow min-h-10 items-center bg-white"
  >
    <RouterLink to="/">
      <span
        :class="[
          'text-3xl text-neutral-700',
          path.fullPath !== '/' ? 'material-icons-outlined' : 'material-icons',
        ]"
      >
        home
      </span>
    </RouterLink>
    <RouterLink to="/cart">
      <span
        :class="[
          'text-3xl text-neutral-700',
          path.fullPath !== '/cart'
            ? 'material-icons-outlined'
            : 'material-icons',
        ]"
      >
        shopping_cart
      </span>
    </RouterLink>
    <RouterLink to="/orders">
      <span
        :class="[
          'text-3xl text-neutral-700',
          path.fullPath !== '/orders'
            ? 'material-icons-outlined'
            : 'material-icons',
        ]"
      >
        receipt_long
      </span>
    </RouterLink>
    <RouterLink :to="authStore.isLoggedIn ? '/profile' : '/login'">
      <span
        :class="[
          'text-3xl text-neutral-700',
          path.fullPath !== '/profile'
            ? 'material-icons-outlined'
            : 'material-icons',
        ]"
      >
        person
      </span>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "auth/AuthStore";
import { useRoute } from "vue-router";

const authStore = useAuthStore();

const path = useRoute();
</script>
