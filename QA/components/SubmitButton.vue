<template>
  <button type="submit" @click="handleClick"
    class="w-full px-4 py-2 rounded-md border bg-black border-black hover:border-white flex items-center justify-center
     hover:text-gray-400 cursor-pointer text-center text-white/40 font-semibold">
    <slot v-if="!authStore.loading">Enter</slot>
    <span v-if="authStore.loading" class="self-center">
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g class="spinner_GuJz">
          <circle cx="3" cy="12" r="2" fill="currentColor" />
          <circle cx="21" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="21" r="2" fill="currentColor" />
          <circle cx="12" cy="3" r="2" fill="currentColor" />
          <circle cx="5.64" cy="5.64" r="2" fill="currentColor" />
          <circle cx="18.36" cy="18.36" r="2" fill="currentColor" />
          <circle cx="5.64" cy="18.36" r="2" fill="currentColor" />
          <circle cx="18.36" cy="5.64" r="2" fill="currentColor" />
        </g>
      </svg>
    </span>
  </button>
</template>

<script setup>
import { useAuthStore } from '~/stores/AuthStore';

const authStore = useAuthStore();
const props = defineProps({
  handleClick: {
    type: Function,
    required: true
  }
});
</script>

<style scoped>
.spinner_GuJz {
  transform-origin: center;
  animation: spinner_STY6 1.5s linear infinite;
}

@keyframes spinner_STY6 {
  100% {
    transform: rotate(360deg);
  }
}
</style>
