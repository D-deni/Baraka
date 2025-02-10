<script setup lang="ts">

import {ref} from "vue";
import {useGlobalStore} from "../../store/global.ts";

interface INavItem {
  id: number,
  text: string;
  flag?: string
}
const global = useGlobalStore()
defineProps({
  navArray: {
    type: Array as () => INavItem[],
    default: () => []
  }
})

const currentItem = ref<number>(0)

</script>

<template>
  <div class="flex gap-y-4 flex-wrap w-fit gap-x-2 bg-white px-2 py-2 mt-20 mb-10 rounded-xl">
    <div class="py-2 cursor-pointer transition-all duration-200 px-10" v-for="item in navArray" :key="item.id" @click="currentItem = item.id; global.currentComponent = item.flag || 'buyHistory'" :class="{'bg-to rounded-xl text-white' : currentItem === item.id}">
      {{item.text}}
    </div>
  </div>
</template>

<style scoped>

</style>