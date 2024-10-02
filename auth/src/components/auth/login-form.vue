<template>
  <div
    class="w-full flex flex-col p-5 border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 max-w-sm gap-4"
  >
    <n-input placeholder="username" v-model:value="username" />
    <n-input
      placeholder="password"
      type="password"
      show-password-on="click"
      v-model:value="password"
    />
    <n-button
      strong
      secondary
      type="info"
      :disabled="!(username.length && password.length)"
      @click="loginSubmit"
    >
      Login
    </n-button>
  </div>
</template>

<script setup lang="ts">
import { NInput, NButton } from "naive-ui";
import { ref } from "vue";

import "../../index.scss";

import { useAuth } from "../../composables/auth/useAuth";

const username = ref("");
const password = ref("");

const { handleLogin } = useAuth();

// handle submit of login form 
const loginSubmit = () => {
  if (username.value.length && password.value.length)
    handleLogin({
      username: username.value,
      password: password.value,
    });
};
</script>
