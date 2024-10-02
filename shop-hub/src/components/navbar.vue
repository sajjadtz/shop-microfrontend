<template>
  <div
    class="bg-white card-shadow top-0 sticky min-h-10 hidden md:flex justify-between px-4 items-center"
  >
    <RouterLink to="/">
      <span class="text-3xl text-neutral-700 material-icons">home</span>
    </RouterLink>
    <div class="flex gap-2">
      <RouterLink to="/cart">
        <span class="text-3xl text-neutral-700 material-icons"
          >shopping_cart</span
        >
      </RouterLink>
      <RouterLink :to="authStore.isLoggedIn ? '/profile' : '/login'">
        <span class="text-3xl text-neutral-700 material-icons">person</span>
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
