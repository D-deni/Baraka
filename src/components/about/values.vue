<script setup lang="ts">
import TheTitle from "../UI/TheTitle.vue";
import {ref} from "vue";
import ImgOne from "/img/elements/about/value/one.png?url";
import ImgTwo from "/img/elements/about/value/two.png?url";
import ImgThree from '/img/elements/about/value/three.png?url'
import ImgFour from '/img/elements/about/value/four.png?url'
const valueArray = ref([
  {
    id: 0,
    title: 'Отборность',
    description: 'Мы берем лучшее от наших поставщиков и то, что чаще всего покупает наш покупатель.',
    img: ImgOne
  },
  {
    id: 1,
    title: 'Честность и открытость',
    description: 'Мы всегда открыты к общению с нашими покупателями, к их обратной связи и потребностям, мы внимательны и тактичны, готовы решить спорную ситуацию в пользу покупателя.',
    img: ImgTwo
  },
  {
    id: 2,
    title: 'Ответственность и слово',
    description: 'Мы гарантируем честные цены, стабильное качество и свежесть каждого продукта, его наличие на полке.',
    img: ImgThree
  },
  {
    id: 3,
    title: 'Уважение традиций',
    description: 'Мы совершенствуем привычный подход к покупкам и адаптируем под современный мир сервиса, не лишая душевности и эмоциональности; у нас чисто, свежо, аккуратно.',
    img: ImgFour
  },
])
</script>

<template>
  <div>
    <TheTitle class="text-center">
      {{$t('Наши ценности')}}
    </TheTitle>
    <div class="flex gap-x-10 max-lg:flex-wrap justify-center mt-10 max-sm:px-6">
      <div class="flex flex-col gap-y-6 w-3/12 max-lg:w-4/12 max-md:mx-auto max-md:items-center max-md:w-full" v-for="item in valueArray" :key="item.id">
        <img class="w-max" :src="item.img" alt="">
        <div class="bg-bgGray h-full w-full p-6 flex flex-col gap-y-6 items-center rounded-xl">
          <h3 class="text-to text-[22px] font-omedium">{{item.title}}</h3>
          <p class="text-[17px] font-oregular">{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>