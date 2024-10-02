<template>
  <div
    v-if="identity"
    class="md:h-fit h-full w-full flex flex-col py-3 md:border md:border-gray-200 md:rounded-xl md:shadow dark:bg-gray-800 dark:border-gray-700 md:max-w-sm gap-4"
  >
    <span class="font-bold md:mx-3 mx-0"> Profile Info </span>

    <div
      class="flex flex-col justify-between gap-3 md:mx-5 mx-3 md:h-fit h-full md:mb-0 mb-12"
    >
      <div class="flex flex-col gap-1">
        <span class="text-sm">username:</span>
        <n-input placeholder="username" v-model:value="username" />
      </div>
      <n-button
        :disabled="username === identity.username"
        strong
        secondary
        type="info"
        @click="handleSubmit"
      >
        Submit
      </n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useAuthStore } from "auth/AuthStore";
import { NInput, NButton } from "naive-ui";

import "../../index.scss";

import { useUser } from "../../composables/user/useUser";

const authStore = useAuthStore();
const { handleUpdateUser } = useUser();

const identity = computed(() => authStore.getIdentity);

const username = ref(identity.value?.username);

watch(identity, () => {
  if (identity) username.value = identity.value.username;
});

const handleSubmit = () => {
  if (identity.value.username.length) handleUpdateUser(username.value);
};
</script>
