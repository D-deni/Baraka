<template>
  <div class="!flex flex-col gap-y-10 justify-between">
    <div class="skeleton w-full h-[300px]"></div>
    <div class="flex flex-col w-full gap-y-10 gap-x-10">
      <div v-for="index in 3" class="skeleton h-[20px] w-full" :key="index"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.skeleton {
  background-color: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
}


@keyframes pulse {
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #c0c0c0;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style>