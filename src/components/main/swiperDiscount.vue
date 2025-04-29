<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Grid, Navigation, Pagination, Autoplay} from 'swiper/modules';
import TheTitle from "../UI/TheTitle.vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import Card from "../reused/UI/card.vue";
import {useDiscountsStore} from "../../store/products.ts";
import {globalUrl} from "../../composables/hooks.ts";
import {useI18n} from "vue-i18n";
import {useGlobalStore} from "../../store/global.ts";

const productsStore = useDiscountsStore()

const prevDiscount = ref<HTMLElement | null>(null)
const nextDiscount = ref<HTMLElement | null>(null)

const globalStore = useGlobalStore()
const {t} = useI18n()

const isMobile = computed(() => {
  return window.innerWidth <= 700
})

const gridConfig = computed(() => {
  return {
    rows: productsStore.products.length > 5 ? 2 : 1
  }
})

const formatNumber = (number: any) => {
  if (!number) return '';
  let numberStr = number.toLocaleString();
  const [integerPart, decimalPart] = numberStr.split('.');

  if (integerPart.length <= 3) return numberStr;

  const integerWithoutLastDigits = integerPart.slice(0, -3);
  const lastDigits = integerPart.slice(-3);
  let formattedInteger = `${integerWithoutLastDigits}<sup>${lastDigits}</sup>`;

  if (decimalPart) {
    formattedInteger += `.${decimalPart}`;
  }

  return formattedInteger;
};

onMounted(() => {
  productsStore.loadProducts({page: 1, limit: 30 })
})

</script>

<template>
  <div class="flex container mx-auto justify-between items-center max-sm:px-4">
    <TheTitle class="text-[24px]">
      {{ t('Каталог скидок') }}
    </TheTitle>
    <div class="flex gap-x-4 max-sm:!hidden">
      <button ref="prevDiscount"
              aria-label="Предыдущая скидка"
              class="w-[40px] h-max transform -translate-y-1/2 bg-[#F2F2F2] p-[10px] rounded-full flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.575 3.4001L7.14162 8.83343C6.49995 9.4751 6.49995 10.5251 7.14162 11.1668L12.575 16.6001"
                stroke="#292D32" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </button>
      <button ref="nextDiscount"
              aria-label="Следующая скидка"
              class="w-[40px] h-max transform -translate-y-1/2 bg-[#F2F2F2] p-[10px] rounded-full flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.42505 16.5999L12.8584 11.1666C13.5 10.5249 13.5 9.4749 12.8584 8.83324L7.42505 3.3999"
                stroke="#292D32" stroke-width="1.25" stroke-miterlimit="10" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
  <Swiper
      class="!ml-10 max-2xl:!hidden"
      :grid="gridConfig"
      :navigation="{
            prevEl: prevDiscount,
            nextEl: nextDiscount,
            }"
      :autoplay="{
              delay: 4500,
              disableOnInteraction: false,
            }"
      :slides-per-view="4"
      :on-before-init="(swiper) => {
            swiper.params.navigation = {
              prevEl: prevDiscount,
              nextEl: nextDiscount
            }
            }"
      :effect="'creative'"

      :pagination="{
            clickable: true
            }"
      :modules="[Grid, Navigation, Autoplay]">
    <SwiperSlide v-for="item in productsStore.products" :key="item.id"
                 class="w-max mx-[-10px] px-20 cursor-pointer  ">
      <div class="">
        <span class="text-[28px] pt-[24px] font-obold text-white">99$</span>
      </div>

      <Card :card-image-flag="true"
            :card-percent-flag="true"
            :price-container-flag="true"
            :card-description-flag="true"
            :card-title-flag="true"
            :card-discount-flag="true"
            :card-price-flag="true"
            :card-block-style="`w-[326px] h-[440px] flex flex-col justify-center items-center mx-2 bg-white shadow-blockShadow p-7 mb-10 mt-10 rounded-xl`"
            :card-link-text="`product`"
            :card-price-design-container="`absolute top-40 -right-10 text-white`"
            :card-discount-style="`text-2xl w-full z-20 font-obold flex justify-center top-6 left-1`"
            :card-price-style="`text-[15px] font-oregular flex`"
            :card-price-and-percent="`flex gap-x-2 items-center pl-4 absolute bottom-0 right-0 w-full`"
            :card-percent-style="`text-[14px] font-obold text-black bg-[#FFC600] py-3 px-1 rounded-tl-xl rounded-br-[20px] rounded-bl-md rounded-tr-md -right-1 absolute [clip-path:polygon(33%_0,100%_0,100%_70%,68%_100%,0_100%,0%_39%)]`"
            :card-title-style="`text-[22px] mt-10 max-sm:w-full max-[425px]:pl-4 !font-omedium`"
            :card-image-style="`mx-auto h-[250px] flex items-center w-max relative rounded-full`"
            :card-link="item?.id"
      >
        <template v-slot:cardImage>
          <img class="rounded-lg w-[200px] " :src="globalUrl + item?.image_url" alt="">
        </template>
        <template v-slot:cardTitle>
          {{ globalStore.language !== 'ru' ? item?.title_uz?.slice(0, 30) + '...' : item?.title?.slice(0,30) + "..." }}
        </template>
        <template v-slot:cardDescription>
          {{ globalStore.language !== 'ru' ? item?.description_uz?.slice(0, 30) + '...' : item?.description?.slice(0,30) + "..." }}
        </template>
        <template v-slot:cardDiscount>
          <span v-html="formatNumber(item?.new_price)"></span>
        </template>
        <template v-slot:cardPrice>
          <div class="price-container relative">
            <span class="price-text"
                  v-html="formatNumber(item.price)"
            ></span>
            <svg class="price-strike absolute -bottom-1.5 -left-1" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 100 20" width="110%" height="40">
              <line x1="100" y1="0" x2="0" y2="25" stroke="white" stroke-width="2"/>
            </svg>
          </div>
        </template>
      </Card>
    </SwiperSlide>
  </Swiper>
  <Swiper class="!hidden max-2xl:!block"
          :slidesPerView="1"
          :grid="{
              rows: 1
            }"
          :breakpoints="{
              '640': {
                slidesPerView: 1,
              },
              '768': {
                slidesPerView: 2,
              },
              '1200': {
                slidesPerView: 3,
              }
            }"
          :navigation="{
            prevEl: prevDiscount,
            nextEl: nextDiscount,
            }"
          :autoplay="{
              delay: 4500,
              disableOnInteraction: false,
            }"
          :on-before-init="(swiper) => {
            swiper.params.navigation = {
              prevEl: prevDiscount,
              nextEl: nextDiscount
            }
            }"
          :space-between="90"
          :effect="'creative'"
          :pagination="isMobile ? {clickable: true} : false"
          :modules="[Grid, Navigation, Pagination, Autoplay]">
    <SwiperSlide v-for="item in productsStore.products.slice(-15)" :key="item.id"
                 class="max-md:px-10 max-[425px]:px-0 cursor-pointer">
      <Card :card-image-flag="true"
            :card-percent-flag="true"
            :price-container-flag="true"
            :card-description-flag="true"
            :card-title-flag="true"
            :card-discount-flag="true"
            :card-price-flag="true"
            :card-block-style="`w-[326px] h-[440px] max-md:w-full max-sm:w-[300px] flex flex-col justify-center mx-auto items-center mx-2 bg-white shadow-blockShadow p-7 mb-10 mt-10 max-sm:mt-[32px] rounded-xl`"
            :card-link-text="`product`"
            :card-price-design-container="`absolute top-40 -right-10 text-white`"
            :card-discount-style="`text-2xl w-full z-20 font-obold flex justify-center top-6 left-1`"
            :card-price-style="`text-[15px] font-oregular flex`"
            :card-price-and-percent="`flex gap-x-2 items-center pl-4 absolute bottom-0 right-0 w-full`"
            :card-percent-style="`text-[14px] font-obold text-black bg-[#FFC600] py-3 px-1 rounded-tl-xl rounded-br-[20px] rounded-bl-md rounded-tr-md -right-1 absolute [clip-path:polygon(33%_0,100%_0,100%_70%,68%_100%,0_100%,0%_39%)]`"
            :card-title-style="`text-[22px] mt-10 max-sm:w-full max-[425px]:pl-4 !font-omedium`"
            :card-image-style="`mx-auto h-[250px] flex items-center w-max relative rounded-full`"
            :card-description-style="`max-sm:w-full max-[425px]:pl-4`"
            :card-link="item?.id"
      >
        <template v-slot:cardImage>
          <img
              class="rounded-lg w-[200px]"
              :src="globalUrl + item?.image_url"
              :alt="`Изображение ${item?.title}`"
              width="500"
              height="450"
          >
        </template>
        <template v-slot:cardTitle>
          {{ globalStore.language !== 'ru' ? item?.title_uz?.slice(0, 30) + '...' : item?.title?.slice(0,30) + '...' }}
        </template>
        <template v-slot:cardDescription>
          {{ globalStore.language !== 'ru' ? item?.description_uz?.slice(0, 30) + '...' : item?.description?.slice(0,30) + '...' }}
        </template>
        <template v-slot:cardDiscount>
          <span v-html="formatNumber(item?.new_price)"></span>
        </template>
        <template v-slot:cardPrice>
          <div class="price-container relative">
              <span class="price-text"
                    v-html="formatNumber(item?.price)"></span>
            <svg class="price-strike absolute -bottom-1.5 -left-1" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 100 20" width="110%" height="40">
              <line x1="100" y1="0" x2="0" y2="25" stroke="white" stroke-width="2"/>
            </svg>
          </div>
        </template>
      </Card>
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper-wrapper {
  flex-direction: row !important;
}

</style>