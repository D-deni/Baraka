<script setup lang="ts">
import LogoVector from "/public/img/logo/logoVector.svg?skipsvgo";
import ImgOne from "/public/img/elements/career/one.webp?url";
import TheTitle from "../components/UI/TheTitle.vue";
import TheBlock from "../components/UI/TheBlock.vue";
import {onMounted, ref} from "vue";
import Contacts from "../components/reused/contacts.vue";
import {useCareer} from "../store/vacancies.ts";
import TheModal from "../components/UI/TheModal.vue";
import {useI18n} from "vue-i18n";
import {useGlobalStore} from "../store/global.ts";

const careerStore = useCareer()
const hoverBlock = ref()
const showMore = ref<number | null>(null)
const {t} = useI18n()
const globalStore = useGlobalStore()
const careerNavArray = ref([
  {
    id: 0,
    title: t('Вакансии'),
    url: 'vacancy'
  },
  {
    id: 1,
    title: t('Условия'),
    url: 'conditions'
  },
  {
    id: 2,
    title: t('Контакты'),
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
    <div class="relative bg-bgCareer bg-no-repeat bg-left max-sm:bg-[center_left_-6.5rem] max-sm:bg-[auto_600px] bg-cover">
      <div class="relative h-[690px] bg-gradient-to-t from-black to-15%">
        <div class=" to-5% flex container mx-auto justify-between items-end h-full max-lg:flex-col max-lg:justify-center max-lg:items-center">
          <div class="flex flex-col text-white justify-end h-full px-10 gap-y-5 pb-10 max-[450px]:px-6">
            <p class="text-[64px] font-obold max-sm:text-[44px] bg-black bg-opacity-40 max-sm:bg-opacity-60 p-4 max-[450px]:text-[30px] rounded-xl w-fit">{{ $t("Ждём тебя в команду!") }}</p>
            <p class="text-[17px] font-oregular w-5/12 max-lg:w-full max-xl:w-8/12 bg-black bg-opacity-40 max-sm:bg-opacity-60 p-4 rounded-xl">
              {{$t('Приглашаем вас на постоянную работу в крупную розничную сеть магазинов товаров народного потребления — BARAKA MARKET')}}</p>
          </div>
          <div class="flex max-sm:flex-wrap max-sm:justify-center gap-x-14 mb-10 max-sm:mb-6">
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
        <TheBlock class="py-6 px-12 max-sm:px-4 rounded-xl w-full overflow-hidden relative flex flex-col justify-between cursor-pointer" @click="showMore = item.id" v-for="item in careerStore.vacancies" :key="item.id" @mouseenter="hoverBlock = item.id" @mouseleave="hoverBlock = null">
            <div class="absolute -top-10 -right-10">
              <LogoVector class="w-[100px] h-[100px]"/>
            </div>
          <div class="flex justify-between">
            <p class="font-osemibold text-[24px] text-to">{{globalStore.language !== 'ru' ? item?.title_uz : item?.title}}</p>
            <div>
              <svg :class="{'stroke-black transition-all duration-200 fill-black' : hoverBlock != item.id, 'stroke-to fill-to transition-all duration-200 scale-110' : hoverBlock == item.id}"  width="40px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <title/>
                <g data-name="Layer 13" id="Layer_13">
                  <path d="M57,11H42V8.06A5.07,5.07,0,0,0,36.94,3H27.06A5.07,5.07,0,0,0,22,8.06V11H7a4,4,0,0,0-4,4V30a5,5,0,0,0,2,4V55a6,6,0,0,0,6,6H53a6,6,0,0,0,6-6V34a5,5,0,0,0,2-4V15A4,4,0,0,0,57,11ZM24,8.06A3.06,3.06,0,0,1,27.06,5h9.88A3.06,3.06,0,0,1,40,8.06V11H24ZM57,35V55a4,4,0,0,1-4,4H11a4,4,0,0,1-4-4V35h4v5a3,3,0,0,0,6,0V35H29v2a3,3,0,0,0,6,0V35H47v5a3,3,0,0,0,6,0V35h4ZM13,40V30a1,1,0,0,1,2,0V40a1,1,0,0,1-2,0Zm18-3V33a1,1,0,0,1,2,0v4a1,1,0,0,1-2,0Zm18,3V30a1,1,0,0,1,2,0V40a1,1,0,0,1-2,0ZM59,30a3,3,0,0,1-3,3H53V30a3,3,0,0,0-6,0v3H35a3,3,0,0,0-6,0H17V30a3,3,0,0,0-6,0v3H8a3,3,0,0,1-3-3V15a2,2,0,0,1,2-2H57a2,2,0,0,1,2,2Z"/>
                </g>
              </svg>
            </div>
          </div>
          <TheModal @showModal="showMore = null" v-if="showMore == item.id" class="w-full" :modal-class="`w-8/12 max-lg:w-11/12 max-sm:w-full  flex items-center`" >
            <div>
              <div class="flex max-sm:mt-10 items-center">
                <div class="w-full">
                  <TheTitle class="text-center">{{globalStore.language !== 'ru' ? item.title_uz : item.title}}</TheTitle>
                </div>
                <div class="flex" @click.stop="showMore = null">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div>
                </div>
              </div>
              <div class="my-10 overflow-auto h-[350px] p-2">
                <span v-html="globalStore.language !== 'ru' ? item.description_uz : item.description"></span>
              </div>
              <div>
                <div  class="flex items-center gap-x-2 mt-6">
                  <div>
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 12.3118C13.0795 12.3118 14.36 11.0313 14.36 9.4518C14.36 7.87226 13.0795 6.5918 11.5 6.5918C9.92048 6.5918 8.64001 7.87226 8.64001 9.4518C8.64001 11.0313 9.92048 12.3118 11.5 12.3118Z" stroke="#FE5000" stroke-width="1.375"/>
                      <path d="M3.81823 7.78315C5.62406 -0.15518 17.3849 -0.146013 19.1816 7.79232C20.2357 12.449 17.3391 16.3907 14.7999 18.829C12.9574 20.6073 10.0424 20.6073 8.19073 18.829C5.66073 16.3907 2.76406 12.4398 3.81823 7.78315Z" stroke="#FE5000" stroke-width="1.375"/>
                    </svg>
                  </div>
                  <p class="text-[17px]"><span class="font-omedium">{{$t('Адрес')+ ':' + ' '}}</span>{{globalStore.language !== 'ru' ? item?.address_uz : item?.address}}</p>
                </div>
              </div>
            </div>
          </TheModal>
          <div  class="flex items-center gap-x-2 mt-6">
            <div>
              <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 12.3118C13.0795 12.3118 14.36 11.0313 14.36 9.4518C14.36 7.87226 13.0795 6.5918 11.5 6.5918C9.92048 6.5918 8.64001 7.87226 8.64001 9.4518C8.64001 11.0313 9.92048 12.3118 11.5 12.3118Z" stroke="#FE5000" stroke-width="1.375"/>
                <path d="M3.81823 7.78315C5.62406 -0.15518 17.3849 -0.146013 19.1816 7.79232C20.2357 12.449 17.3391 16.3907 14.7999 18.829C12.9574 20.6073 10.0424 20.6073 8.19073 18.829C5.66073 16.3907 2.76406 12.4398 3.81823 7.78315Z" stroke="#FE5000" stroke-width="1.375"/>
              </svg>
            </div>
            <p class="text-[17px]"><span class="font-omedium">{{$t('Адрес')+ ':' + ' '}}</span>{{globalStore.language !== 'ru' ? item?.address_uz : item?.address}}</p>
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
                <div class="relative bg-white px-6 py-2 max-md:px-8 max-md:py-3 rounded-lg shadow- numberShadow">
                  <p class="text-to text-[33px] max-md:text-[40px] font-semibold">{{item.position}}</p>
                  <img src="/img/logo/logo.webp" alt="Logo" class="absolute -top-2 -right-2 w-[35px] h-[35px]"/>
                </div>
                <div>
                  <p class="text-[22px] font-oregular">{{globalStore.language !== 'ru' ? item?.title_uz : item?.title}}</p>
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