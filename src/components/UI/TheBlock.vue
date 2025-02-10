<script setup lang="ts">

defineProps({
  blockStyle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="bg-white shadow-[0px_1px_20px_-0px_rgba(0,0,0,0.1)] " :class="blockStyle">
     <slot/>
  </div>
</template>

<style scoped>

</style>