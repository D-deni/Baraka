<script setup lang="ts">
defineProps<{
  type: string,
  t?: 'button' | 'submit' | 'reset'
}>()
</script>

<template>
  <button :type="t"
          :class="{
    '!bg-to text-white font-osemibold tracking-wider rounded-lg' : type === 'btnOrange',
    'bg-ty font-osemibold rounded-[10px]' : type === 'btnYellow'
          }"
  >
    <slot/>
  </button>
</template>

<style scoped>

</style>