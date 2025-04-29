<script setup lang="ts">

import Contacts from "../components/reused/contacts.vue";
import TheTitle from "../components/UI/TheTitle.vue";
import QrGooglePlay from '/img/elements/loyalty/appQR.svg?url'
import TheService from "../components/UI/TheService.vue";
import TheBlock from "../components/UI/TheBlock.vue";
import ContactsSocials from "../components/contacts/contactsSocials.vue";
import {ref} from "vue";

import ArrowLeft from "/img/elements/vectors/arrow-left.png?url";

import ImgHeader from '/img/elements/loyalty/img.png?url'
import LogoOrange from "/img/logo/logoOrange.png?url";
import Map from "../components/reused/map.vue";
import router from "../router.ts";
import {useGlobalStore} from "../store/global.ts";



const cardHover = ref(false)
const globalStore = useGlobalStore()


</script>

<template>
  <div>
    <div class="container mx-auto max-lg:px-4">
      <TheTitle>
        {{ $t('Наши контакты') }}
      </TheTitle>
      <Contacts block-style="mt-[40px] py-0 h-[256px]" :img-vector="`h-[331px] w-[351px] -top-[75px]`"
                :title-flag="false" :about-block-flag="false" :contact-block-flag="true"/>
      <div class="my-[112px]">
        <TheTitle>
          {{ $t('Ссылки на наши социальные сети') }}
        </TheTitle>
        <ContactsSocials :social-array="globalStore.socials"/>
      </div>
    </div>

    <div class=" bg-[#F7F6F9] max-xl:h-max relative max-lg:px-4">
      <div class="bg-[url('/img/elements/vectors/ellipsestwo.webp')] bg-no-repeat bg-right-top bg-contain max-lg:bg-cover">
        <div class="container mx-auto py-[112px] relative">
          <div class="flex items-center justify-between max-lg:flex-col max-lg:w-full max-lg:justify-center max-lg:items-center">
            <div class="w-5/12 max-xl:w-full justify-center mx-auto">
              <div class="flex items-start gap-x-4 ml-6 max-lg:mb-10">
                <h1 class="text-to text-[64px] max-md:text-5xl max-sm:text-4xl max-[320px]:text-3xl mt-4 font-obold">Baraka club</h1>
                <img class="w-[57px] h-[57px]" :src="LogoOrange" alt="">
              </div>
              <div class="">
                <TheBlock class="p-6 w-max max-lg:w-full rounded-2xl !shadow-blockShadow">
                  <TheTitle class="text-[24px] text-center font-osemibold max-md:text-2xl max-md:text-center">
                    {{ $t('Скачать наше приложение') }}
                  </TheTitle>
                  <div>
                    <div class="flex max-[475px]:hidden gap-x-10 mt-6 justify-center">
                      <div class="bg-white p-2 shadow-qrShadow">
                        <img class="" :src="QrGooglePlay" alt="">
                      </div>
                    </div>
                    <div class="flex max-md:flex-wrap max-md:gap-y-10 max-md:justify-center justify-center  gap-x-10 max-sm:gap-y-4 mt-6">
                      <TheService :service-block-style="`bg-bgGray max-[450px]:!w-full justify-center`"></TheService>
                    </div>
                  </div>
                </TheBlock>
              </div>
            </div>
            <div class="right-20 max-lg:mt-10">
              <img :src="ImgHeader" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto my-[112px] max-lg:px-4 ">
      <div class="flex max-lg:flex-col items-center justify-between">
        <div class="w-6/12 max-lg:w-full flex justify-between items-center">
          <div class="w-8/12 max-md:w-full">
            <TheTitle>
              {{$t('Адреса магазинов')}}
            </TheTitle>
            <div class="mt-[40px] bg-[#F7F6F9] p-[40px] rounded-2xl cursor-pointer" @click="router.push('/locations')" @mouseenter="cardHover = true" @mouseleave="cardHover = false">
              <p class="font-oregular text-[17px] w-8/12">{{$t('Перейдите по ссылке чтобы посмотреть адреса магазинов')}}</p>
              <div class="flex items-center gap-x-4 mt-[24px]">
                <p class="text-to font-omedium text-[24px]">{{$t('Список адресов магазинов')}}</p>
                <div class="bg-white rounded-full w-[42px] h-[40px]  flex justify-center items-center" :class="{'transition-all rotate-0 ' : cardHover, ' rotate-[30deg] transition-all' : !cardHover}">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1227 17.2089L19.9741 10.299L13.0643 8.44756" stroke="#FE5000" stroke-width="1.26051" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M7.70539 17.3836L19.8514 10.3711" stroke="#FE5000" stroke-width="1.26051" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="w-max max-md:hidden">
            <img class="w-max mt-32 -rotate-12" :src="ArrowLeft" alt="">
          </div>
        </div>
        <div class="w-5/12 max-lg:w-full max-lg:mt-10 items-center justify-between">
          <Map :title-flag="false" :map-style="`map-block !w-full !h-[400px] shadow-mapShadow`"/>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>