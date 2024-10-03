<template>
  <div
    class="bg-white card-shadow top-0 sticky min-h-10 hidden md:flex justify-between px-4 items-center"
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
    <div class="flex gap-2">
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
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "auth/AuthStore";
import { useRoute } from "vue-router";

const authStore = useAuthStore();

const path = useRoute();
</script>
