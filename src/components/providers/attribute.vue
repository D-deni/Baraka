<script setup lang="ts">

import TheBlock from "../UI/TheBlock.vue";
import LogoVector from "/public/img/logo/logoVector.svg?skipsvgo";
import {ref} from "vue";
import TheTitle from "../UI/TheTitle.vue";


const attributeArray = ref([
  {
    id: 0,
    number: 1,
    text: 'Высокий оборот продукции и устойчивый рост прибыли'
  },
  {
    id: 1,
    number: 2,
    text: 'Гарантированный объем продаж'
  },
  {
    id: 2,
    number: 3,
    text: 'Рост узнаваемости бренда за счет широкого представления ваших товаров на полках гипермаркетов сети'
  },
  {
    id: 3,
    number: 4,
    text: 'Точность расчетов и аккуратность платежей'
  },
])
</script>

<template>
  <div class="py-[112px] max-lg:px-6">
    <TheTitle class="text-center text-[32px] max-md:text-2xl w-5/12 max-lg:w-full mx-auto ">
      {{$t('«Baraka Market», как активно развивающаяся компания, гарантирует своим поставщикам:')}}
    </TheTitle>
    <div class="flex flex-wrap justify-center gap-6 py-10">
      <TheBlock class="py-6 px-12 max-sm:px-4 rounded-xl w-4/12 max-lg:w-full overflow-hidden relative" v-for="item in attributeArray" :key="item.id">
        <div class="absolute -top-10 -right-10 max-sm:-top-14 max-sm:-right-14">
          <LogoVector class="w-[100px] h-[100px]"/>
        </div>
        <div class="flex gap-x-4 items-center">
          <p class="font-osemibold text-[42px] text-to ">{{item.number}}</p>
          <p>{{item.text}}</p>
        </div>
      </TheBlock>
    </div>
  </div>
</template>

<style scoped>

</style>