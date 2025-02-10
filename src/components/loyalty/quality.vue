<script setup lang="ts">
import TheBlock from "../UI/TheBlock.vue";
import {ref} from "vue";
import ImgOne from '/img/elements/loyalty/one.webp?url'
import ImgTwo from "/img/elements/loyalty/two.webp?url";
import ImgThree from "/img/elements/loyalty/three.webp?url";
const qualityArray = ref([
  {
    id: 0,
    title:'Давайте дружить',
    linkText: 'Зарегистрируйте',
    link:'',
    desc: 'карту Baracka club',
    img: ImgOne
  },
  {
    id: 1,
    title:'Получайте кешбек',
    linkText: '',
    link:'',
    desc: 'Совершайте покупки и получайте кешбэк в магазине Baraka Market.',
    img: ImgTwo
  },
  {
    id: 2,
    title:'Получайте статусы',
    linkText: '',
    link:'',
    desc: 'Процент кешбэка зависит от суммы покупок в предыдущем месяце',
    img: ImgThree
  },

])
</script>

<template>
  <div class="flex flex-wrap items-center justify-around max-lg:gap-y-10 max-lg:px-6">
    <TheBlock :class="'w-3/12 h-[396px] max-lg:w-6/12 max-md:w-full flex justify-center flex-col gap-y-10 items-center rounded-xl'" v-for="item in qualityArray" :key="item.id">
      <div class="w-max mx-auto">
        <img class="w-full mx-auto" :src="item.img" alt="">
      </div>
      <div class="w-10/12 flex flex-col gap-y-4 text-center">
        <h3 class="text-2xl text-to font-osemibold">{{item.title}}</h3>
        <p class="font-oregular text-[17px] flex flex-col"><RouterLink :to="item.link" class="text-to">{{$t(item.linkText) + ' '}}</RouterLink>{{item.desc}}</p>
      </div>
    </TheBlock>
  </div>
</template>

<style scoped>

</style>