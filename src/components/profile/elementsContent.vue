<script setup lang="ts">
defineProps({
  defaultText: String
})
</script>

<template>
  <div class="w-full rounded-xl h-[300px] bg-white flex justify-center items-center">
    <p class="font-oregular">{{defaultText}}</p>
  </div>
</template>

<style scoped>

</style>