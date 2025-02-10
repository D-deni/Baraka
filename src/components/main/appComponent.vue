<script setup lang="ts">
import ImgQr from '../../../public/img/elements/loyalty/appQR.svg?url'
import ImgArrow from '/img/elements/mobile/arrow.webp?url'
import ImgIphone from '/img/elements/mobile/phone.webp?url'
import ImgIphoneTwo from '/img/elements/mobile/phonetwo.webp?url'
import TheService from "../UI/TheService.vue";
</script>

<template>
  <div class="flex max-md:flex-col max-md:mx-auto max-md:w-full items-center justify-between max-md:justify-center">
    <div class="w-4/12 max-md:w-full max-md:mx-auto max-md:flex max-md:flex-col max-md:justify-center max-md:text-center">
      <div class="hidden w-full mx-auto max-md:flex justify-center">
        <img class="w-max z-10 absolute -top-28" :src="ImgIphoneTwo" alt="">
      </div>
      <div class="z-20 relative flex flex-col max-md:mt-[232px] gap-y-10">
        <p class="font-osemibold text-3xl text-to w-9/12 max-md:w-full">{{ $t('Скачайте') + ' ' }}<span
          class="text-black"> {{ $t('наше мобильное приложение') }}</span></p>
        <div class="flex gap-x-6 justify-center max-sm:flex-col max-sm:items-center max-sm:gap-y-4">
          <TheService :svg-color-apple="'#fff'" :service-block-style="'bg-black text-white'"/>
        </div>
      </div>
    </div>
    <div class="w-3/12 z-20 h-full flex flex-col items-center max-md:hidden">
      <img :src="ImgQr" alt="">
      <img class="mr-20" :src="ImgArrow" alt="">
      <p class="w-4/12 text-center font-oregular text-to mt-4">{{$t('Отсканируйте чтобы скачать')}}</p>
    </div>
    <div class="w-4/12 mt-10">
      <div class="w-max max-md:hidden">
        <img class="w-full" :src="ImgIphone" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>