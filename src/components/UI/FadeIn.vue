<script setup lang="ts">
import {useMotion} from "@vueuse/motion";
import {ref} from "vue";


const element = ref<HTMLElement | null>(null);

useMotion(element, {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
});
</script>

<template>
  <div ref="element" class="transition-all duration-700 ease-out">
    <slot />
  </div>
</template>

<style scoped>
.opacity-0 {
  opacity: 0;
  transform: translateY(20px);
}

.opacity-100 {
  opacity: 1;
  transform: translateY(0);
}
</style>