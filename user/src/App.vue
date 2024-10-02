<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: user</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "auth/AuthStore";
import { watch } from "vue";

const authStore = useAuthStore();

watch(authStore, () => {
  console.log(authStore.getIdentity);
});
</script>
