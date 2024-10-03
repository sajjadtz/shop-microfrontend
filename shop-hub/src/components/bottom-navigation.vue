<template>
  <div
    class="md:!hidden w-full flex justify-around fixed bottom-0 card-shadow min-h-10 items-center bg-white"
  >
    <n-tooltip trigger="hover">
      <template #trigger>
        <RouterLink to="/">
          <span
            :class="[
              'text-3xl text-neutral-700',
              path.fullPath !== '/'
                ? 'material-icons-outlined'
                : 'material-icons',
            ]"
          >
            home
          </span>
        </RouterLink>
      </template>
      Home
    </n-tooltip>
    <n-tooltip trigger="hover">
      <template #trigger>
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
      </template>
      Cart
    </n-tooltip>
    <n-tooltip v-if="authStore.isAdmin" trigger="hover">
      <template #trigger>
        <RouterLink to="/product-create">
          <span class="text-3xl text-neutral-700 material-icons">
            {{
              path.fullPath !== "/product-create"
                ? "add_circle_outline"
                : "add_circle"
            }}
          </span>
        </RouterLink>
      </template>
      Create New Product
    </n-tooltip>
    <n-tooltip trigger="hover">
      <template #trigger>
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
      </template>
      Orders
    </n-tooltip>
    <n-tooltip trigger="hover">
      <template #trigger>
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
      </template>
      Profile
    </n-tooltip>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "auth/AuthStore";
import { useRoute } from "vue-router";
import { NTooltip } from "naive-ui";

const authStore = useAuthStore();

const path = useRoute();
</script>
