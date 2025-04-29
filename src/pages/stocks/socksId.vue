<script setup lang="ts">

import {useStocksStore} from "../../store/stocks.ts";
import {useRoute, useRouter} from "vue-router";
import {computed, nextTick, onMounted, ref, watch} from "vue";
import {globalUrl} from "../../composables/hooks.ts";
import TheBreadcrumbs from "../../components/UI/TheBreadcrumbs.vue";
import {useGlobalStore} from "../../store/global.ts";
import StocksSceleton from "../../components/UI/Sceletons/StocksSceleton.vue";

const stocksStore = useStocksStore()
const route = useRoute()
const globalStore = useGlobalStore()
const isMobile = computed(() => {
  return window.innerWidth > 768
})
const contentContainer = ref<HTMLElement | null>(null)


const isLoading = ref(true);
const router = useRouter()

onMounted(() => {
  stocksStore.loadCurrentStock({id: route.params.id, router: router})
})

watch(() => globalStore.language, () => {
  stocksStore.loadCurrentStock({id: route.params.id, router: router})
    }
);

watch(
    () => stocksStore.stock,
    (newStock) => {
      if (newStock) {
        isLoading.value = false;
      }
    },
    { immediate: true }
);



const addUnderlineToLinks = () => {
  if (contentContainer.value) {
    const links = contentContainer.value.querySelectorAll('a')
    links.forEach(link => {
      link.classList.add('underline')
      link.classList.add('text-to')
    })
  }
}
const htmlContent = computed(() =>
    globalStore.language !== 'ru'
        ? stocksStore.stock.content_uz
        : stocksStore.stock.content
)


watch(htmlContent, async (newVal) => {
  if (newVal) {
    await nextTick()
    addUnderlineToLinks()
  }
})

onMounted(async ()=> {
  if (htmlContent.value) {
    await nextTick()
    addUnderlineToLinks()
  }
})

</script>

<template>
  <div class="container mx-auto px-4">
    <StocksSceleton v-if="!stocksStore.stock.id"/>
    <div v-else>
      <TheBreadcrumbs class="mb-10"/>
      <h2 class="font-obold text-3xl text-to">{{ globalStore.language !== 'ru' ? stocksStore.stock?.title_uz : stocksStore.stock?.title}}</h2>
      <img class="mx-auto mt-[32px] max-md:mt-[15px]" :src=" isMobile ? globalUrl + stocksStore.stock?.image_url : globalUrl + stocksStore.stock.poster_url" alt="">
      <div class="my-10" v-if="stocksStore.stock.id != null" ref="contentContainer">
        <span class="font-omedium mb-6 w-6/12 max-md:w-full text-xl" v-html="htmlContent"></span>
        <p>{{$t('Акция действует с')}} <span class="text-to font-osemibold">{{new Date(stocksStore.stock?.start_date).toLocaleDateString() + ' ' + $t('по') + ' ' + new Date(stocksStore.stock?.end_date).toLocaleDateString()}}</span> {{$t('включительно')}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>