<script setup lang="ts">

import TheButton from "../../UI/TheButton.vue";
import TheTitle from "../../UI/TheTitle.vue";
import {useRoute} from "vue-router";


const route = useRoute()

defineProps<{
  adminUrl?: string;
  adminSub?: string;
}>()


</script>

<template>
  <div class="w-full p-[32px]">
    <div class="flex items-center justify-between w-full">
      <TheTitle>
        <slot name="adminTitle"/>
      </TheTitle>
      <TheButton type="btnOrange" v-if="route.fullPath === '/admin/' + adminUrl">
        <RouterLink :to="'/admin/' + adminUrl + '/' + adminSub" class="flex items-center gap-x-2 py-[12px] px-[25px]">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12H18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 18V6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <p>
            <slot name="adminBtnDesc"></slot>
          </p>
        </RouterLink>
      </TheButton>
    </div>
    <div class="bg-white w-full mt-[24px] rounded-xl">
      <slot name="adminContent"></slot>
    </div>
  </div>
</template>

<style scoped>

</style>