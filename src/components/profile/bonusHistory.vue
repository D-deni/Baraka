<script setup lang="ts">

import {ref} from "vue";
import {useProfileStore} from "../../store/profile.ts";
import TheTitle from "../UI/TheTitle.vue";


const profileStore = useProfileStore()
const tableArray = ref([
  {
    id: 0,
    date: new Date().toLocaleDateString(),
    check: null,
    promotion: 'Задание по расписанию',
    accrued: '5000',
    written: '0',
    active: '5000',
    dateActivation: new Date().toLocaleDateString(),
    dateCombustion: new Date().toLocaleDateString(),

  }
])
const discountArray = ref([
  {
    id: 0,
    name: 'Regular',
    percent: 1,
    price: '0',
    active: true
  },
  {
    id: 1,
    name: 'Silver',
    percent: 2,
    price: '400000',
    active: false,
  },
  {
    id: 2,
    name: 'Gold',
    percent: 3,
    price: '600000',
    active: false,
  },
  {
    id: 3,
    name: 'Platinum',
    percent: 4,
    price: '800000',
    active: false,
  }, {
    id: 4,
    name: 'Vip',
    percent: 5,
    price: '1000000',
    active: false,
  },
])
</script>

<template>
  <div class="h-screen">
    <div class="flex gap-x-2">
      <div class="bg-white w-[400px]  rounded-xl relative">
        <div class="rounded-xl">
          <div class="absolute top-0 left-0">
            <svg width="269" height="229" viewBox="0 0 269 229" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="46.2026" cy="47.7629" r="127.363" transform="rotate(30 46.2026 47.7629)" stroke="#EFEEF1"
                      stroke-opacity="0.933333" stroke-width="9.05915"/>
              <circle cx="81.9438" cy="-27.8582" r="127.363" transform="rotate(30 81.9438 -27.8582)" stroke="#EFEEF1"
                      stroke-opacity="0.933333" stroke-width="9.05915"/>
            </svg>
          </div>
          <div class="absolute bottom-0 right-0 rounded-xl">
            <svg width="124" height="124" viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M197.844 100.646L176.247 122.266C175.256 123.192 173.869 123.787 172.482 123.787H159.999L168.784 132.646C169.774 133.572 170.369 134.894 170.369 136.349V166.828C170.369 168.283 169.18 169.473 167.727 169.473H137.081C135.694 169.473 134.373 168.944 133.382 167.952L124.532 159.093V171.589C124.532 172.977 124.004 174.3 123.013 175.291L101.349 196.845C100.359 197.903 98.6414 197.903 97.6507 196.845L75.9872 175.291C74.9965 174.3 74.4681 172.977 74.4681 171.589V159.093L65.6178 167.952C64.6271 168.878 63.3061 169.473 61.9192 169.473H31.2732C29.8202 169.473 28.6314 168.283 28.6314 166.828V136.349C28.6314 134.96 29.1597 133.572 30.1504 132.646L39.0008 123.787H26.5178C25.1309 123.787 23.8099 123.192 22.8192 122.266L1.15573 100.646C0.0989704 99.6541 0.0989704 98.0011 1.15573 96.9433L22.8192 75.3893C23.7439 74.3976 25.1309 73.8686 26.5178 73.8686H39.0008L30.1504 65.009C29.1597 64.0834 28.6314 62.695 28.6314 61.3065V30.8268C28.6314 29.3722 29.8202 28.1821 31.2732 28.1821H61.9192C63.3061 28.1821 64.6271 28.7111 65.6178 29.7028L74.4681 38.4963V26.0664C74.4681 24.678 74.9965 23.3557 76.0532 22.3639L97.6507 0.74381C98.7074 -0.247937 100.359 -0.247937 101.349 0.74381L123.013 22.3639C124.004 23.3557 124.532 24.678 124.532 26.0664V38.5624L133.382 29.7028C134.373 28.7111 135.694 28.1821 137.081 28.1821H167.727C169.18 28.1821 170.369 29.3722 170.369 30.8268V61.3065C170.369 62.695 169.84 64.0834 168.85 65.009L159.999 73.8686H172.482C173.869 73.8686 175.19 74.3976 176.181 75.3893L197.844 96.9433C198.901 98.0011 198.901 99.6541 197.844 100.646ZM74.4681 123.787V159.093L99.5 134.167L124.532 159.093V123.787H159.999L134.901 98.8607L159.999 73.8686H124.532V38.5624L99.5 63.4884L74.4681 38.4963V73.8686H39.0008L64.0987 98.8607L39.0008 123.787H74.4681Z"
                    fill="#FFC600"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M74.3107 38.5703L99.3978 63.5747L124.485 38.6365V73.9602H160.031L134.877 98.9646L160.031 123.903H124.485V159.227L99.3978 134.288L74.3107 159.227V123.903H38.765L63.9184 98.9646L38.765 73.9602H74.3107V38.5703ZM124.485 88.513V73.894H109.79L99.3978 63.5747L89.0055 73.894H74.3107V88.513L63.9184 98.8984L74.3107 109.218V123.903H89.0055L99.3978 134.222L109.79 123.903H124.485V109.218L134.877 98.8984L124.485 88.513Z"
                    fill="#F68D2E"/>
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M118.313 100.714L101.178 117.81C100.182 118.874 98.455 118.874 97.4588 117.81L80.257 100.714C79.2608 99.7164 79.2608 98.0534 80.257 96.989L97.4588 79.8934C98.455 78.8956 100.182 78.8956 101.178 79.8934L118.313 96.989C119.376 98.0534 119.376 99.7164 118.313 100.714ZM124.49 73.707V88.408L109.746 73.707H124.49ZM88.8911 73.707L74.0803 88.408V73.707H88.8911ZM109.746 123.93L124.557 109.229V123.93H109.746ZM74.0803 109.229L88.8911 123.93H74.0803V109.229Z"
                    fill="#FE5000"/>
            </svg>
          </div>
        </div>
        <div class="flex justify-between w-full items-center">
          <div class="px-3 pt-0 z-10 relative">
            <p class=" py-2 px-4 bg-to rounded-lg w-max text-xl font-obold text-white uppercase">
              {{ profileStore.currentDiscountStatus }}</p>
          </div>
          <div class="w-max relative z-20 text-end ml-auto ">
            <div class="bg-[#F2F2F2] w-max ml-auto p-1 rounded m-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M4.5 4.5H4.51M15.5 4.5H15.51M4.5 15.5H4.51M11 11H11.01M15.5 15.5H15.51M15 19H19V15M12 14.5V19M19 12H14.5M13.6 8H17.4C17.9601 8 18.2401 8 18.454 7.89101C18.6422 7.79513 18.7951 7.64215 18.891 7.45399C19 7.24008 19 6.96005 19 6.4V2.6C19 2.03995 19 1.75992 18.891 1.54601C18.7951 1.35785 18.6422 1.20487 18.454 1.10899C18.2401 1 17.9601 1 17.4 1H13.6C13.0399 1 12.7599 1 12.546 1.10899C12.3578 1.20487 12.2049 1.35785 12.109 1.54601C12 1.75992 12 2.03995 12 2.6V6.4C12 6.96005 12 7.24008 12.109 7.45399C12.2049 7.64215 12.3578 7.79513 12.546 7.89101C12.7599 8 13.0399 8 13.6 8ZM2.6 8H6.4C6.96005 8 7.24008 8 7.45399 7.89101C7.64215 7.79513 7.79513 7.64215 7.89101 7.45399C8 7.24008 8 6.96005 8 6.4V2.6C8 2.03995 8 1.75992 7.89101 1.54601C7.79513 1.35785 7.64215 1.20487 7.45399 1.10899C7.24008 1 6.96005 1 6.4 1H2.6C2.03995 1 1.75992 1 1.54601 1.10899C1.35785 1.20487 1.20487 1.35785 1.10899 1.54601C1 1.75992 1 2.03995 1 2.6V6.4C1 6.96005 1 7.24008 1.10899 7.45399C1.20487 7.64215 1.35785 7.79513 1.54601 7.89101C1.75992 8 2.03995 8 2.6 8ZM2.6 19H6.4C6.96005 19 7.24008 19 7.45399 18.891C7.64215 18.7951 7.79513 18.6422 7.89101 18.454C8 18.2401 8 17.9601 8 17.4V13.6C8 13.0399 8 12.7599 7.89101 12.546C7.79513 12.3578 7.64215 12.2049 7.45399 12.109C7.24008 12 6.96005 12 6.4 12H2.6C2.03995 12 1.75992 12 1.54601 12.109C1.35785 12.2049 1.20487 12.3578 1.10899 12.546C1 12.7599 1 13.0399 1 13.6V17.4C1 17.9601 1 18.2401 1.10899 18.454C1.20487 18.6422 1.35785 18.7951 1.54601 18.891C1.75992 19 2.03995 19 2.6 19Z"
                    stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="text-to text-[14px] w-8/12 ml-auto mr-2">
              {{ $t('Нажмите на карту для отображения штрихкода.') }}</p>
          </div>
        </div>
      </div>
      <div class="bg-white w-full h-full rounded-xl p-10">
        <div class="flex gap-x-4 items-center justify-between">
          <p class="text-lg font-obold">{{ $t('Информация о статусе') }}</p>
          <button @click="$router.push('/tariff-information')" class="flex items-center gap-x-2 bg-[#F2F2F2] py-2 px-3 rounded-lg">
            <span class="text-to">
              {{ $t('Информация о тарифах') }}
            </span>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_266_8191" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24"
                      height="24">
                <rect x="24" y="24" width="24" height="24" transform="rotate(180 24 24)" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_266_8191)">
                <path
                    d="M16.6269 11.248L11.4577 6.07872C11.309 5.93 11.2356 5.75597 11.2375 5.55662C11.2394 5.35725 11.318 5.18001 11.4731 5.02489C11.6282 4.88002 11.8038 4.80502 12 4.79989C12.1961 4.79476 12.3718 4.86976 12.5269 5.02489L18.8673 11.3653C18.9609 11.4588 19.0269 11.5576 19.0653 11.6614C19.1038 11.7652 19.123 11.8774 19.123 11.9979C19.123 12.1185 19.1038 12.2306 19.0653 12.3345C19.0269 12.4383 18.9609 12.537 18.8673 12.6306L12.5269 18.971C12.3884 19.1095 12.217 19.1803 12.0125 19.1835C11.808 19.1867 11.6282 19.1159 11.4731 18.971C11.318 18.8159 11.2404 18.6377 11.2404 18.4364C11.2404 18.2351 11.318 18.0569 11.4731 17.9018L16.6269 12.7479L5.25002 12.7479C5.0372 12.7479 4.85901 12.6761 4.71542 12.5325C4.57182 12.389 4.50002 12.2108 4.50002 11.9979C4.50002 11.7851 4.57182 11.6069 4.71542 11.4633C4.85901 11.3198 5.0372 11.248 5.25002 11.248L16.6269 11.248Z"
                    fill="#FE5000"/>
                </g>
              </svg>
            </span>
          </button>
        </div>

        <div class="flex items-center gap-x-1 my-10 border-b pb-10">
          <div v-for="item in discountArray" :key="item.id" class="flex items-center gap-x-1">
            <div class="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-[#E3E3E3] relative"
                 :class="{'!bg-to' : item.active}">
              <p class="font-obold text-lg text-white">{{ item.percent + '%' }}</p>
              <div class="absolute -bottom-2 -right-8 bg-[#CBCBCB] rounded-full px-2 text-white"
                   :class="{'!bg-[#82CC05]' : item.active}">
                <p>
                  <span>{{ $t('от') + ' ' }}</span>{{ item.price.length === 6 ? item.price.slice(0, 3) : item.price.length > 6 ? item.price.slice(0, 1) : item.price }}<span>{{ item.price.length === 6 ? 'K' : item.price.length > 6 ? 'M' : '' }}</span>
                </p>
              </div>
            </div>
            <div v-if="item.id !== 4" class="w-[52px] h-[4px] rounded-[32px] bg-[#E3E3E3]"
                 :class="{'!bg-[#82CC05]' : item.active}"/>
          </div>
        </div>

        <div class="flex flex-col gap-y-4 ">
          <div class="flex justify-between items-center">
            <p class="font-oregular text-[#475467]">{{ $t('До статуса Silver осталось') }}</p>
            <p class="font-obold text-to">{{ $t('400 000 сумов') }}</p>
          </div>
          <div class="flex justify-between items-center">
            <p class="font-oregular text-[#475467]">{{ $t('Сумма покупок на этом месяце') }}</p>
            <p class="font-obold text-to">{{ $t('0 сумов') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <TheTitle>
        {{ $t('Начисленные бонусы') }}
      </TheTitle>
      <table class="table-fixed w-full mt-10">
        <thead>
          <tr class="bg-[#F9FAFB] font-oregular text-[14px] text-[#475467] border-b">
            <th>Дата</th>
            <th>Тип операции</th>
            <th>Акция</th>
            <th>Начислено</th>
            <th>Списано</th>
            <th>Активно</th>
            <th>Дата акктивации</th>
            <th>Дата сгорания</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="item in tableArray" :key="item.id" class="bg-white font-oregular text-[15px] text-[#475467]">
          <td>{{item.date}}</td>
          <td>{{$t('Чек') + ' ' + item.check}}</td>
          <td>{{item.promotion}}</td>
          <td>{{item.accrued}}</td>
          <td>{{item.written}}</td>
          <td class="text-to font-omedium">{{item.active}}</td>
          <td>{{item.dateActivation}}</td>
          <td>{{item.dateCombustion}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
td, th {
  text-align: left;
  padding: 15px 15px;
}
</style>