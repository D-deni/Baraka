<script setup lang="ts">
import TheTitle from "../UI/TheTitle.vue";
import TheBlock from "../UI/TheBlock.vue";
import arrowLeft from '/img/elements/vectors/arrow-left.png?url'
import TheService from "../UI/TheService.vue";
import QrAppStore from '/img/elements/loyalty/appQR.svg?url'
</script>

<template>
  <div class="flex justify-between max-lg:flex-col max-lg:px-6 max-lg:gap-y-10 items-center w-full">
    <div class="flex items-end gap-x-10">
      <div>
        <TheTitle class="max-sm:text-center">
          {{$t('Возникли вопросы?')}}
        </TheTitle>
        <div class="bg-[#F7F6F9] flex flex-col gap-y-10 p-8 rounded-2xl mt-10">
          <p class="text-[17px] font-oregular">{{$t('Обращайтесь к нам в колл-центр по телефону:')}}</p>
          <div class="flex items-center gap-x-4 ">
            <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.6167 30.5526C36.6167 31.1526 36.4833 31.7693 36.2 32.3693C35.9167 32.9693 35.55 33.5359 35.0667 34.0693C34.25 34.9693 33.35 35.6193 32.3333 36.0359C31.3333 36.4526 30.25 36.6693 29.0833 36.6693C27.3833 36.6693 25.5667 36.2693 23.65 35.4526C21.7333 34.6359 19.8167 33.5359 17.9167 32.1526C16 30.7526 14.1833 29.2026 12.45 27.4859C10.7333 25.7526 9.18334 23.9359 7.80001 22.0359C6.43334 20.1359 5.33334 18.2359 4.53334 16.3526C3.73334 14.4526 3.33334 12.6359 3.33334 10.9026C3.33334 9.76927 3.53334 8.68594 3.93334 7.68594C4.33334 6.66927 4.96668 5.73594 5.85001 4.9026C6.91668 3.8526 8.08334 3.33594 9.31668 3.33594C9.78334 3.33594 10.25 3.43594 10.6667 3.63594C11.1 3.83594 11.4833 4.13594 11.7833 4.56927L15.65 10.0193C15.95 10.4359 16.1667 10.8193 16.3167 11.1859C16.4667 11.5359 16.55 11.8859 16.55 12.2026C16.55 12.6026 16.4333 13.0026 16.2 13.3859C15.9833 13.7693 15.6667 14.1693 15.2667 14.5693L14 15.8859C13.8167 16.0693 13.7333 16.2859 13.7333 16.5526C13.7333 16.6859 13.75 16.8026 13.7833 16.9359C13.8333 17.0693 13.8833 17.1693 13.9167 17.2693C14.2167 17.8193 14.7333 18.5359 15.4667 19.4026C16.2167 20.2693 17.0167 21.1526 17.8833 22.0359C18.7833 22.9193 19.65 23.7359 20.5333 24.4859C21.4 25.2193 22.1167 25.7193 22.6833 26.0193C22.7667 26.0526 22.8667 26.1026 22.9833 26.1526C23.1167 26.2026 23.25 26.2193 23.4 26.2193C23.6833 26.2193 23.9 26.1193 24.0833 25.9359L25.35 24.6859C25.7667 24.2693 26.1667 23.9526 26.55 23.7526C26.9333 23.5193 27.3167 23.4026 27.7333 23.4026C28.05 23.4026 28.3833 23.4693 28.75 23.6193C29.1167 23.7693 29.5 23.9859 29.9167 24.2693L35.4333 28.1859C35.8667 28.4859 36.1667 28.8359 36.35 29.2526C36.5167 29.6693 36.6167 30.0859 36.6167 30.5526Z" stroke="#FE5000" stroke-width="2.5" stroke-miterlimit="10"/>
                <path d="M30.8333 15.0072C30.8333 14.0072 30.05 12.4738 28.8833 11.2238C27.8167 10.0738 26.4 9.17383 25 9.17383" stroke="#FE5000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M36.6667 15.0026C36.6667 8.55261 31.45 3.33594 25 3.33594" stroke="#FE5000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="text-[50px] text-to font-obold">1247</p>
          </div>
        </div>
      </div>
      <div class="mb-16 max-sm:hidden">
        <img :src="arrowLeft" alt="">
      </div>
    </div>
    <div>
      <TheBlock class="p-6 rounded-2xl !shadow-blockShadow">
        <TheTitle class="text-[24px] text-center font-osemibold max-md:text-2xl max-md:text-center">
          {{$t('Скачать наше приложение')}}
        </TheTitle>
       <div>
         <div class="flex max-[475px]:hidden mx-auto justify-center mt-6">
            <div class="bg-white p-4 shadow-qrShadow">
              <img class="" :src="QrAppStore" alt="">
            </div>
         </div>
         <div class="flex max-md:flex-wrap max-md:gap-y-10 max-md:justify-center justify-center gap-x-10 mt-6">
           <TheService :service-block-style="`bg-bgGray !w-full`"></TheService>
         </div>
       </div>
      </TheBlock>
    </div>
  </div>
</template>

<style scoped>

</style>