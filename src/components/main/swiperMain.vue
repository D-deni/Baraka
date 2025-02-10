<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Pagination, Autoplay} from "swiper/modules";

import {computed, ref} from "vue";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useStocksStore} from "../../store/stocks.ts";
import {globalUrl} from "../../composables/hooks.ts";

let activeSlide = ref(0)
const onSlideChange = (swiper: any) => {
  activeSlide.value = swiper.activeIndex
  console.log(swiper.activeIndex)
  console.log(activeSlide)
  console.log(123)
}

const isMobile = computed(() => {
  return window.innerWidth >= 500
})
const isMobileImage = computed(() => {
  return window.innerWidth >= 900;
})
const stockStore = useStocksStore()
</script>

<template>
  <Swiper class=""
          :slides-per-view=" isMobileImage ? 1.15 : 1"
          :centered-slides="true"
          :space-between="-40"
          :pagination="isMobile ? {clickable: true} : false"
          @slide-change="onSlideChange"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
          }"
          :modules="[Pagination, Autoplay]"
          :breakpoints="{
              '320': {
                spaceBetween: -5
              },
              '640': {
                spaceBetween: -40
              }
            }"
  >
    <SwiperSlide class="h-auto max-sm:w-max" v-for="item in stockStore.stocks" :key="item.id">
      <RouterLink :to="`/stocks/${item.id}`">
        <img class="max-lg:h-auto max-lg:w-11/12 max-sm:w-max mx-auto my-auto transition-all rounded-xl duration-200"
             :class="{'scale-90 transition-all duration-200' : item.id !== activeSlide}" :src=" isMobileImage ? globalUrl + item.image_url : globalUrl + item.poster_url" alt="">
      </RouterLink>
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper-pagination-bullet {
  background: rgba(0, 0, 0, .4);
}

.swiper-pagination-bullet-active {
  background: #FE5000;
}
</style>
