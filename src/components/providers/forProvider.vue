<script setup lang="ts">

import TheTitle from "../UI/TheTitle.vue";
import ImgOne from "/public/img/elements/providers/provider.webp?url"
import LogoVector from "/public/img/logo/logoVector.svg?skipsvgo";
import {ref} from "vue";
const conditionArray = ref([
  {
    id: 0,
    number: 1,
    text: 'Коммерческое предложение'
  },
  {
    id: 1,
    number: 2,
    text: 'Прейскурант'
  },
  {
    id: 2,
    number: 3,
    text: 'Сертификаты на продукцию'
  },
])
</script>

<template>
  <div>
    <div class="flex items-center gap-x-20 relative z-20 max-sm:py-0 max-lg:flex-col max-lg:gap-y-10">
        <div class="w-6/12 max-xl:w-7/12 max-lg:w-full max-sm:px-4 max-lg:text-center max-lg:mx-auto max-lg:items-center flex flex-col  gap-y-10">
          <TheTitle class="!text-2xl max-sm:!text-xl">{{$t('Для того, чтобы стать поставщиком, необходимо предоставить следующие документы:')}}</TheTitle>
          <ul class="flex flex-col gap-y-10">
            <li class="flex items-center gap-x-10 max-sm:flex-col max-sm:text-center max-sm:gap-y-2" v-for="item in conditionArray" :key="item.id">
              <div class="relative bg-white px-6 py-2 rounded-lg shadow-numberShadow">
                <p class="text-to text-[33px] font-semibold">{{item.number}}</p>
                <img src="/img/logo/logo.webp" alt="Logo" class="absolute -top-2 -right-2 w-[35px] h-[35px]"/>
              </div>

              <div>
                <p class="text-[22px] font-oregular">{{$t(item.text)}}</p>
              </div>
            </li>
          </ul>
        </div>
      <div class="mt-32">
        <svg width="115" height="33" viewBox="0 0 115 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.28787 9.77C1.66303 10.5896 0.779914 11.9803 0.750518 14.0687L0.725503 14.0964C1.02764 17.0138 3.32544 18.5914 5.74347 19.9253C14.7633 24.8969 24.3684 28.334 34.2549 31.044C34.3892 31.0843 34.5329 31.1358 34.6819 31.1892C35.4561 31.4667 36.3723 31.7952 36.8363 30.8641C37.3775 29.7936 36.5854 29.3596 35.8439 28.9534C35.6285 28.8353 35.4173 28.7196 35.2443 28.5913C34.7188 28.2088 34.1559 27.8887 33.59 27.5669C33.2408 27.3683 32.8905 27.1691 32.5471 26.9541C28.0986 24.2023 23.407 21.9263 18.7142 19.6497C15.7286 18.2012 12.7425 16.7526 9.81834 15.1811C9.66725 15.1036 9.49586 15.0332 9.32014 14.961C8.67595 14.6963 7.9735 14.4076 7.99898 13.6592C8.02499 12.8948 8.756 12.623 9.41793 12.377C9.58093 12.3164 9.73974 12.2573 9.8828 12.1929C10.6382 11.8526 11.3931 11.5105 12.1482 11.1684C17.053 8.94561 21.9643 6.71994 27.0782 4.98028C27.18 4.94511 27.2826 4.91078 27.3852 4.87647C28.5406 4.49005 29.6875 4.10644 29.4176 2.56692C29.0947 0.839295 27.6341 0.699816 26.1839 0.771175C26.121 0.774267 26.0571 0.776372 25.9927 0.77849C25.7331 0.787035 25.4666 0.795806 25.2373 0.870598C17.7498 3.40521 10.3544 6.19943 3.28787 9.77Z" fill="#FFC600"/>
          <path d="M111.789 31.799C113.49 32.5342 114.404 31.7759 114.553 29.9722L114.581 29.9973C114 27.7095 112.074 26.77 110.23 25.8707L110.147 25.8303C103.947 22.8333 97.4439 20.6701 90.9173 18.5609C70.6628 11.9495 50.0439 9.21289 28.892 13.3709C28.5024 13.4471 28.0393 13.4828 27.561 13.5197C26.0463 13.6366 24.3789 13.7652 24.4108 15.2292C24.428 16.8426 26.1651 16.8149 27.6951 16.7905C28.1181 16.7838 28.5253 16.7773 28.876 16.8058C32.7585 17.1377 36.6514 17.391 40.5441 17.6443C47.2699 18.082 53.9954 18.5196 60.6665 19.3626C78.1417 21.5935 95.4724 24.6504 111.789 31.799Z" fill="#FFC600"/>
        </svg>
      </div>
        <div class="w-6/12 max-xl:w-5/12 max-lg:w-full mt-10">
          <div class="relative flex items-center justify-center ">
            <img :src="ImgOne" alt="" class="z-10"/>
            <LogoVector class="absolute max-xl:-left-20 max-lg:left-0 -top-18 right-0 left-0 mx-auto z-0 w-[459px] h-[460px] max-sm:hidden"/>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>

</style>