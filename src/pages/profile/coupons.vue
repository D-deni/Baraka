<script setup lang="ts">

import ElementsContent from "../../components/profile/elementsContent.vue";
import NavElements from "../../components/profile/navElements.vue";
import {ref} from "vue";

const array = ref([
  {
    id: 0,
    text: 'Купоны',
  },
  {
    id: 1,
    text: 'Мои купоны',
  },
  {
    id: 2,
    text: 'История',
  },
])
</script>

<template>
  <div class="container mx-auto h-screen">
    <nav-elements :nav-array="array"/>
    <elements-content :default-text="$t('У вас нет доступных персональных акций')"/>
  </div>
</template>

<style scoped>

</style>