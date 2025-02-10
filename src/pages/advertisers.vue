<script setup lang="ts">

import TheTitle from "../components/UI/TheTitle.vue";
import {ref} from "vue";
import ImgOne from '/img/elements/advertisers/one.png?url'
import ImgTwo from '/img/elements/advertisers/two.png?url'
import ImgThree from '/img/elements/advertisers/three.png?url'
import TheBlock from "../components/UI/TheBlock.vue";
import Contacts from "../components/reused/contacts.vue";

const adArray = ref([
  {
    id: 0,
    img: ImgOne,
    text: 'Передовые рекламные технологии'
  },
  {
    id: 1,
    img: ImgTwo,
    text: 'Индивидуальные программы для каждого рекламодателя'
  },
  {
    id: 2,
    img: ImgThree,
    text: 'Комплексные программы продвижения республиканского уровня'
  },
])
</script>

<template>
  <div>
    <div class="container mx-auto mb-[40px]">
      <TheTitle>{{ $t('Рекламодателям') }}</TheTitle>
    </div>
    <div class="bg-bgGray max-md:px-6">
      <div class="container mx-auto py-[112px]">
        <div class="flex flex-col gap-y-10 justify-center mx-auto items-center ">
          <TheTitle class="text-center w-6/12 max-lg:w-9/12 max-md:w-full max-sm:text-2xl">
            {{ $t('Сеть розничных магазинов товаров народного потребления «Baraka Market» – эффективный инструмент продвижения товаров и услуг.') }}
          </TheTitle>
          <p>{{ $t('Реклама в сети гипермаркетов «Baraka Market» – это:') }}</p>
          <div class="flex max-lg:flex-wrap gap-x-10 max-lg:gap-y-10 max-lg:justify-center max-lg:mx-auto">
            <TheBlock v-for="item in adArray" class="w-4/12 max-lg:w-full bg-white p-10 flex flex-col gap-y-6 rounded-xl">
              <div>
                <img class="w-max mx-auto" :src="item.img" alt="">
              </div>
              <p class="text-to text-[18px] text-center  font-osemibold">{{ item.text }}</p>
            </TheBlock>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto ">
      <Contacts :title-style="`!w-6/12 max-lg:!w-8/12 max-md:!text-center`" :vacancies-block-flag="true" :block-style="`overflow-hidden`">
        <template #title>
          {{$t('Если вас заинтересовало наше предложение, пожалуйста, свяжитесь с нами, отправив письмо на:')}}
        </template>
      </Contacts>
    </div>
  </div>
</template>

<style scoped>

</style>