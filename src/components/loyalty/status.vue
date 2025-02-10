<script setup lang="ts">
import TheTitle from "../UI/TheTitle.vue";
import ImgFour from "/img/elements/loyalty/four.webp?url";
</script>

<template>
  <div class="container mx-auto px-6 py-[112px]">
   <div class="flex  relative z-20  max-lg:flex-col max-lg:gap-y-10">
     <div class="w-6/12 max-lg:w-full max-lg:text-center max-lg:mx-auto max-lg:items-center flex flex-col gap-y-10">
       <TheTitle class="">{{$t('Статусы участников')}}</TheTitle>
       <p class="text-[22px] w-8/12 max-lg:w-full font-oregular">{{ $t('Каждая покупка с картой Baraka Club приближает вас к новому статусу в программе. Чем больше сумма ваших покупок за календарный месяц, тем выше ваш статус в следующем календарном месяце!')}}</p>
       <p class="text-to text-[22px] w-6/12 max-lg:w-full font-osemibold">{{$t('На VIP-статусе – самый большой кешбэк от Baraka Club!')}}</p>
     </div>
     <div class="w-6/12 max-lg:w-full">
       <img class="w-max mx-auto" :src="ImgFour" alt="">
     </div>
   </div>
  </div>
</template>

<style scoped>

</style>