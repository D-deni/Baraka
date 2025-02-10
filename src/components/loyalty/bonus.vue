<script setup lang="ts">

import ImgSix from "/img/elements/loyalty/six.webp?url";
import TheTitle from "../UI/TheTitle.vue";
</script>

<template>
  <div class="container mx-auto px-6 py-[112px]">
    <div class="flex relative z-20  max-lg:flex-col max-lg:gap-y-10">
      <div class="w-6/12 max-lg:w-full max-lg:text-center max-lg:mx-auto max-lg:items-center flex flex-col gap-y-10">
        <TheTitle class="">{{$t('Бонусы')}}</TheTitle>
        <div class="flex flex-col gap-y-4 text-[22px] w-8/12 max-lg:w-full">
          <p class="font-oregular">{{ $t('Каждая покупка с картой Baraka Club приближает вас к новому статусу в программе. Чем больше сумма ваших покупок за календарный месяц, тем выше ваш статус в следующем календарном месяце!')}}</p>
          <p class="font-oregular">{{$t('Бонусные баллы начисляются на все покупки с использованием карты по курсу, который соответствует Вашему статусу. В этом правиле есть исключение: мы не можем начислять бонусные баллы на товары, которые участвуют в других акциях')}}</p>
        </div>
      </div>
      <div class="w-6/12 max-lg:w-full">
        <img class=" w-max mx-auto" :src="ImgSix" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>