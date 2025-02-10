<script setup lang="ts">

import TheTitle from "../UI/TheTitle.vue";
import TheBlock from "../UI/TheBlock.vue";
import {ref} from "vue";
import ImgLogo from '/img/logo/logoOrange.png?url'

const tarrifsArray = ref([
  {
    id: 0,
    price: 399,
    title: 'REGULAR',
    percent: '1%',
    logo: null
  },
  {
    id: 1,
    price: 599,
    title: 'SILVER',
    percent: '2%',
    logo: null
  },
  {
    id: 2,
    price: 799,
    title: 'GOLD',
    percent: '3%',
    logo: null
  },
  {
    id: 3,
    price: 999,
    title: 'PLATINUM',
    percent: '4%',
    logo: null,
  },
  {
    id: 4,
    price: 1,
    title: 'VIP',
    percent: '5%',
    logo: ImgLogo,
  }
])
</script>

<template>
  <div>
    <TheTitle class="max-md:text-center">{{ $t('Ваш статус и персональный кешбек в следующем месяце') }}</TheTitle>
    <div class="flex flex-wrap items-center gap-14 my-10 max-md:gap-y-20 max-sm:px-8">
      <div v-for="item in tarrifsArray" :key="item.id" class="shadow-[0px_0px_1px_22px_rgba(0,0,0,0.04)] bg-white rounded-lg max-md:shadow-[0px_0px_1px_15px_rgba(0,0,0,0.04)] w-[22%] max-lg:w-4/12 max-md:w-6/12 max-sm:w-full mx-auto relative" :class="{'before:content-arrowRight before-inline-block before:w-8 before:absolute before:top-20 before:bottom-0 before:-left-40 after:content-arrowLeft after-inline-block after:w-8 after:absolute after:top-20 after:bottom-0 after:-right-20 max-md:after:content-none max-md:before:content-none' : item.id === 4}">
        <TheBlock :class="`flex flex-col gap-y-14 !shadow-none !bg-white !rounded-xl p-2`">
          <div class="flex justify-between !rounded-3xl">
            <div class="py-1 px-3 bg-to text-white font-obold text-[26px] max-sm:text-lg max-md:text-xl rounded-xl">
              <p class="">
                {{ $t('До') + ' ' }}<span>{{ item.price }}</span> <span>{{ item.id !== 4 ? $t('тыс.') : $t('млн.') }}</span>
              </p>
            </div>
            <div v-if="item.logo" class="w-[57px] h-[57px]">
              <img class="w-full" :src="item.logo" alt="">
            </div>
          </div>
          <div class="flex justify-between items-end">
            <p class="text-[22px] font-omedium" >{{ item.title }}</p>
            <p class="text-[80px] h-[95px] font-obold text-[#4F4F4F] max-sm:text-[55px] max-sm:h-[60px]" :class="{'text-to' : item.id === 4}">{{ item.percent }}</p>
          </div>
        </TheBlock>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>