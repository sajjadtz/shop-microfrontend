<template>
  <div class="w-screen h-screen">
    <router-view />
    <bottom-navigation/>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useAuthStore } from "auth/AuthStore";
import bottomNavigation from "./components/bottom-navigation.vue";

const authStore = useAuthStore();

onMounted(() => {
  authStore.initial();
});
</script>
