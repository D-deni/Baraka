<script setup lang="ts">

import {useStocksStore} from "../../store/stocks.ts";
import {useRoute} from "vue-router";
import {computed, onMounted} from "vue";
import {globalUrl} from "../../composables/hooks.ts";

const stocksStore = useStocksStore()
const route = useRoute()

const isMobile = computed(() => {
  return window.innerWidth > 768
})

onMounted(() => {
  stocksStore.loadCurrentStock({id: route.params.id})
})
</script>

<template>
  <div class="container mx-auto px-4">
    <h2 class="font-obold text-3xl text-to">{{stocksStore.stock?.title}}</h2>
    <img class="mx-auto mt-[32px] max-md:mt-[15px]" :src=" isMobile ? globalUrl + stocksStore.stock?.image_url : globalUrl + stocksStore.stock.poster_url" alt="">
    <div class="my-10">
      <span class="font-omedium mb-6 w-6/12 max-md:w-full text-xl" v-html="stocksStore.stock?.content"></span>
      <p>{{$t('Акция действует с')}} <span class="text-to font-osemibold">{{new Date(stocksStore.stock?.start_date).toLocaleDateString() + ' по ' + new Date(stocksStore.stock?.end_date).toLocaleDateString()}}</span> {{$t('включительно')}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>