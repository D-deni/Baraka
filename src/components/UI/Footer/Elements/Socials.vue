<script setup lang="ts">

import {onMounted} from "vue";
import {useGlobalStore} from "../../../../store/global.ts";
import {globalUrl} from "../../../../composables/hooks.ts";

const globalStore = useGlobalStore()

onMounted(() => {
  globalStore.loadSocial()
})
</script>

<template>
  <div class="flex flex-col items-center gap-y-3">
    <p>{{$t('Мы в социальных сетях')}}</p>
    <div class="flex gap-x-3">
      <a class="bg-[#FE5000] bg-opacity-5 py-2 px-2 rounded-full flex items-center justify-center" v-for="social in globalStore.socials" :key="social.id" :href="social.url" target="_blank">
        <img class="w-[30px] h-[30px]" :src="globalUrl + social.image_url" alt="">
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>