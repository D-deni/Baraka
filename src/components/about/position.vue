<script setup lang="ts">
import ImgTwo from '/public/img/elements/about/twoVector.png?url'
import TheTitle from "../UI/TheTitle.vue";
</script>

<template>
  <div class="container mx-auto px-6 py-[112px]">
    <div class="flex items-center relative z-20  max-lg:flex-col max-lg:gap-y-10">
      <div class="w-7/12 max-lg:w-full max-lg:text-center max-lg:mx-auto max-lg:items-center flex flex-col gap-y-10">
        <TheTitle class="">{{ $t('Позиционирование') }}</TheTitle>
        <div class="flex flex-col gap-y-4 text-[22px] w-8/12 max-lg:w-full">
          <p class="font-oregular">
            {{ $t('Качественные и отборные продукты по честной цене, открытые люди и современный сервис в шаговой доступности от дома.') }}</p>
          <p class="font-omedium text-to">{{ $t('Все, что нужно - в одном магазине!') }}</p>
        </div>
      </div>
      <div class="w-max max-lg:w-full">
        <img :src="ImgTwo" alt="" class="w-[538px] shadow-otherShadow rounded-2xl h-[426px] max-md:w-full max-md:h-full max-lg:mx-auto"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>