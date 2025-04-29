<template>
  <div class="!flex justify-between max-md:flex-col max-md:gap-y-6 max-md:px-4">
    <div class="skeleton w-6/12 max-md:w-full h-[300px] max-md:h-[400px] max-sm:h-[300px]"></div>
    <div class="flex flex-col w-5/12 max-md:w-full gap-y-10 gap-x-10 max-md:mt-28 max-sm:mt-10">
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