<script setup lang="ts">

import NavElements from "../../components/profile/navElements.vue";
import ElementsContent from "../../components/profile/elementsContent.vue";
import {ref} from "vue";


interface INavItem {
  id: number,
  text: string,
  flag?: string
}

const array = ref<INavItem[]>([
  {
    id: 0,
    text: 'Мои акции',
  },
  {
    id: 1,
    text: 'Мои персональные акции',
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