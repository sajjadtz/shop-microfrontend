<template>
  <div
    class="bg-white card-shadow top-0 sticky min-h-10 hidden md:flex justify-between px-4 items-center"
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
    <div class="flex gap-2">
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
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "auth/AuthStore";
import { useRoute } from "vue-router";
import { NTooltip } from "naive-ui";

const authStore = useAuthStore();

const path = useRoute();
</script>
