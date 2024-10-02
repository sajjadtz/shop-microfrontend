<template>
  <div class="px-3 h-screen flex justify-center items-center">
    <ProfileInfo />
  </div>
</template>

<script setup lang="ts">
import ProfileInfo from "user/ProfileInfo";
import { useAuthStore } from "auth/AuthStore";
import { useRouter } from "vue-router";
import { watch } from "vue";

const router = useRouter();
const authStore = useAuthStore();

watch(
  authStore,
  () => {
    if (!authStore.isLoggedIn) router.push("login");
  },
  { immediate: true, deep: true }
);
</script>
