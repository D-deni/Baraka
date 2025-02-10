<script setup lang="ts">

import ImgEight from '/img/elements/loyalty/eight.png?url'
import TheTitle from "../UI/TheTitle.vue";
</script>

<template>
  <div class="container mx-auto px-6 py-[112px]">
    <div class="flex justify-between items-center relative z-20 max-lg:flex-col max-lg:gap-y-10">
      <div class="w-4/12 max-lg:w-full max-lg:text-center max-lg:mx-auto max-lg:items-center flex flex-col gap-y-10">
        <TheTitle class="">{{$t('Мы помним про Ваш День Рождения и дарим подарки!')}}</TheTitle>
        <div class="flex flex-col gap-y-6 text-[22px] w-full max-lg:w-full">
          <p class="font-oregular">{{ $t('В предшествующий день, в День Вашего Рождения и на следующий день')}}</p>
          <p class="text-to font-omedium">{{$t('За регистрацию карты через приложение “Baraka Club” Вы получаете 10 000 приветственных бонусных баллов!')}}</p>
        </div>
      </div>
      <div class="w-6/12 max-lg:w-full">
        <img class=" w-max mx-auto" :src="ImgEight" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>