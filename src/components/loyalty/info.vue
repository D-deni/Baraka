<script setup lang="ts">
import {ref} from "vue";
import TheBlock from "../UI/TheBlock.vue";
import TheTitle from "../UI/TheTitle.vue";
import LogoOrange from "/public/img/logo/logoOrange.svg?skipsvgo";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const infoArray = ref([
  {
    id: 0,
    number: 1,
    desc: t('Приобретите пластиковую Карту Baraka Club в любом магазине “Baraka Market за 6 000 сум!'),
  },
  {
    id: 1,
    number: 2,
    desc: t('Скачайте мобильное приложение Baraka Club и пользуйтесь бесплатной виртуальной картой!'),
  },
  {
    id: 2,
    number: 3,
    desc: t('Совершите покупки в магазине на сумму 100 000 сум и получите карту Baraka Club бесплатно'),
  },
  {
    id: 3,
    number: 4,
    desc: t('Регистрация в программе лояльности Baraka Market возможна на сайте или через колл-центр'),
  },
])
</script>

<template>
  <div class="max-md:px-10">
    <TheTitle class="max-md:text-center max-sm:text-2xl">
      {{$t('Как зарегестрироваться?')}}
    </TheTitle>
    <div class="flex w-full max-lg:flex-wrap justify-center gap-10 mt-20" >
      <TheBlock class="flex gap-x-2 p-4 w-4/12 max-md:w-6/12 max-sm:w-full rounded-2xl relative" v-for="item in infoArray" :key="item.id">
        <LogoOrange class="absolute w-[60px] h-[60px] -left-7 -top-8"/>
        <p class="font-obold text-to text-[50px]">{{item.number}}</p>
        <p class="font-oregular text-[17px] mt-6">{{item.desc}}</p>
      </TheBlock>
    </div>
  </div>
</template>

<style scoped>

</style>