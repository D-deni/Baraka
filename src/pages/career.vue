<script setup lang="ts">
import LogoVector from "/public/img/logo/logoVector.svg?skipsvgo";
import Logo from "/public/img/logo/logo.svg?skipsvgo";
import ImgOne from "/public/img/elements/career/one.png?url";
import TheTitle from "../components/UI/TheTitle.vue";
import TheBlock from "../components/UI/TheBlock.vue";
import {onMounted, ref} from "vue";
import Contacts from "../components/reused/contacts.vue";
import {useCareer} from "../store/vacancies.ts";

const careerStore = useCareer()


const careerNavArray = ref([
  {
    id: 0,
    title: 'Вакансии',
    url: 'vacancy'
  },
  {
    id: 1,
    title: 'Условия',
    url: 'conditions'
  },
  {
    id: 2,
    title: 'Контакты',
    url: 'contacts'
  },
])

onMounted(() => {
  careerStore.loadVacancies()
  careerStore.loadCondition()
})
</script>

<template>
  <div class="break-words">
    <div class="relative bg-bgCareer bg-no-repeat bg-top bg-cover">
      <div class="relative h-[690px] bg-gradient-to-t from-black to-15%">
        <div class=" to-5% flex container mx-auto justify-between items-end h-full max-md:flex-col max-md:justify-center max-md:items-center">
          <div class="flex flex-col text-white justify-end h-full px-10 gap-y-5 pb-10 ">
            <p class="text-[64px] font-obold max-sm:text-[44px] max-md:bg-black max-md:bg-opacity-40 max-md:p-4 max-md:rounded-xl">{{ $t("Ждём тебя в команду!") }}</p>
            <p class="text-[17px] font-oregular w-5/12 max-lg:w-full max-md:bg-black max-md:bg-opacity-40 max-md:p-4 max-md:rounded-xl">
              {{$t('Приглашаем вас на постоянную работу в крупную розничную сеть магазинов товаров народного потребления — BARAKA MARKET')}}</p>
          </div>
          <div class="flex max-sm:flex-wrap max-sm:justify-center gap-x-14 mb-10">
            <a :href="`#` + item.url" v-for="item in careerNavArray" class="text-white tracking-wide font-oregular text-[16px] hover:bg-white hover:text-to py-[6px] px-[8px] rounded-[4px] transition-all duration-200">
              {{item.title}}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-[112px] max-lg:px-6 max-sm:px-6" id="vacancy">
      <TheTitle>{{$t("Вакансии")}}</TheTitle>
      <div class="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mt-10" >
        <TheBlock class="py-6 px-12 max-sm:px-4 rounded-xl w-full overflow-hidden relative" v-for="item in careerStore.vacancies" :key="item.id">
          <div class="absolute -top-10 -right-10">
            <LogoVector class="w-[100px] h-[100px]"/>
          </div>
          <p class="font-osemibold text-[24px]  text-to">{{item.title}}</p>
          <div  class="flex items-center gap-x-2 mt-6">
            <div>
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 12.3118C13.0795 12.3118 14.36 11.0313 14.36 9.4518C14.36 7.87226 13.0795 6.5918 11.5 6.5918C9.92048 6.5918 8.64001 7.87226 8.64001 9.4518C8.64001 11.0313 9.92048 12.3118 11.5 12.3118Z" stroke="#FE5000" stroke-width="1.375"/>
                <path d="M3.81823 7.78315C5.62406 -0.15518 17.3849 -0.146013 19.1816 7.79232C20.2357 12.449 17.3391 16.3907 14.7999 18.829C12.9574 20.6073 10.0424 20.6073 8.19073 18.829C5.66073 16.3907 2.76406 12.4398 3.81823 7.78315Z" stroke="#FE5000" stroke-width="1.375"/>
              </svg>
            </div>
            <p class="text-[17px]"><span class="font-omedium">{{$t('Адрес:') + ' '}}</span>{{item.address}}</p>
          </div>
        </TheBlock>
      </div>

    </div>

    <div class="bg-bgGray" id="conditions">
      <div class="container mx-auto my-[112px] py-[112px] max-md:px-6">
        <div class="flex items-center gap-x-20 relative z-20 max-lg:flex-col max-lg:gap-y-10">
          <div class="w-5/12 max-xl:w-7/12 max-lg:w-full max-lg:text-center max-lg:mx-auto max-lg:items-center flex flex-col gap-y-10">
            <TheTitle class="">{{$t('Условия работы')}}</TheTitle>
            <div class="flex flex-col gap-y-4 text-[22px] w-8/12 max-lg:w-full">
              <img :src="ImgOne" alt="" class="w-[538px] h-[426px] max-md:w-full max-md:h-full max-lg:mx-auto rounded-xl bg-white shadow-mapShadow p-10"/>
            </div>
          </div>
          <div class="w-6/12 max-xl:w-5/12 max-lg:w-full mt-10">
            <ul class="flex flex-col gap-y-10">
              <li class="flex items-center gap-x-10 max-sm:flex-col max-sm:text-center max-sm:gap-y-2" v-for="item in careerStore.condition" :key="item.id">
                <div class="relative bg-white px-6 py-2 rounded-lg shadow- numberShadow">
                  <p class="text-to text-[33px] font-semibold">{{item.position}}</p>
                  <Logo class="absolute -top-2 -right-2 w-[35px] h-[35px]"/>
                </div>
                <div>
                  <p class="text-[22px] font-oregular">{{$t(item.title)}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="contacts" class="container mx-auto my-20 max-md:!mt-10">
      <Contacts :title-flag="true" :bot-block-flag="true"/>
    </div>
  </div>
</template>

<style >
html {
  scroll-behavior: smooth;
}
</style>