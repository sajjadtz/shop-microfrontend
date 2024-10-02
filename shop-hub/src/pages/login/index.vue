<template>
  <div class="px-3 h-screen flex justify-center items-center">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from "auth/LoginForm";
import { useAuthStore } from "auth/AuthStore";
import { watch } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

watch(
  authStore,
  () => {
    if (authStore.isLoggedIn) router.push("profile");
  },
  { immediate: true, deep: true }
);
</script>
