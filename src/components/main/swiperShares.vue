<script setup lang="ts">

import TheTitle from "../UI/TheTitle.vue";
import {Pagination, Navigation, Autoplay} from "swiper/modules";
import {computed, onMounted, ref} from "vue";

import {Swiper, SwiperSlide} from "swiper/vue";
import Card from "../reused/UI/card.vue";
import {useStocksStore} from "../../store/stocks.ts";
import {globalUrl} from "../../composables/hooks.ts";


const prevShare = ref<HTMLElement | null>(null);
const nextShare = ref<HTMLElement | null>(null);

const isMobile = computed(() => {
  return window.innerWidth >= 790
})

const stocksStore = useStocksStore()

onMounted(() => {
  stocksStore.loadAllStocks({page: 1, limit:15})
})
</script>

<template>
  <div>
    <div class="flex justify-between max-sm:px-4">
      <TheTitle class="mb-10">
        {{$t('Акции')}}
      </TheTitle>
      <div class="flex gap-x-4 max-md:hidden">
        <button ref="prevShare" class="w-[40px] h-max transform -translate-y-1/2 bg-[#F2F2F2] p-[10px] rounded-full flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.575 3.4001L7.14162 8.83343C6.49995 9.4751 6.49995 10.5251 7.14162 11.1668L12.575 16.6001" stroke="#292D32" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button ref="nextShare" class="w-[40px] h-max transform -translate-y-1/2 bg-[#F2F2F2] p-[10px] rounded-full flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999" stroke="#292D32" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    <Swiper class="h-[350px] max-md:h-max max-md:w-full mx-auto"
            id="swiper"
            :navigation="{
            prevEl: prevShare,
            nextEl: nextShare,
          }"
            :breakpoints="{
              '640': {
                slidesPerView: 1,
              },
              '768': {
                slidesPerView: 2,
              },
              '1024': {
                slidesPerView: 3,
              }
            }"
            :on-before-init="(swiper) => {
            swiper.params.navigation = {
               prevEl: prevShare,
               nextEl: nextShare,
            }
          }"
            :effect="'creative'"
            :space-between="30"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: false,
            }"
            :pagination="isMobile ? {clickable: true} : false"
            :modules="[Pagination, Navigation, Autoplay]"
    >
      <SwiperSlide v-for="item in stocksStore.stocks" :key="item.id" class="cursor-pointer w-full max-sm:px-4">
        <Card :card-image-flag="true"
              :card-percent-flag="true"
              :card-link-text="`stocks`"
              :card-image-style="`w-full mx-auto flex justify-center`"
              :card-link="item?.id"
        >
          <template v-slot:cardImage>
            <img class="rounded-lg " width="100%" height="100%" :src="globalUrl + item?.poster_url" alt="">
          </template>
        </Card>
      </SwiperSlide>
    </Swiper>

  </div>
</template>

<style scoped>
.swiper-pagination {
  margin-top: -20px !important
}
</style>