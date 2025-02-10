<script setup lang="ts">
import TheTitle from "../../components/UI/TheTitle.vue";
import {ref} from "vue";

const activeTarrif = ref()
const tariffArray = ref([
  {
    id: 0,
    name: 'Regular',
    percent: 1,
    description: 'Базовый статус программы лояльности. Участники на данном статусе получают стандартное начисление бонусов за свои покупки'
  },
  {
    id: 1,
    name: 'Silver',
    percent: 2,
    description: 'Базовый статус программы лояльности. Участники на данном статусе получают стандартное начисление бонусов за свои покупки'
  },
  {
    id: 2,
    name: 'Gold',
    percent: 3,
    description: 'Базовый статус программы лояльности. Участники на данном статусе получают стандартное начисление бонусов за свои покупки'
  },
  {
    id: 3,
    name: 'Platinum',
    percent: 4,
    description: 'Базовый статус программы лояльности. Участники на данном статусе получают стандартное начисление бонусов за свои покупки'
  },
  {
    id: 4,
    name: 'Vip',
    percent: 5,
    description: 'Базовый статус программы лояльности. Участники на данном статусе получают стандартное начисление бонусов за свои покупки'
  },
])
</script>

<template>
  <div class="container mx-auto h-full py-10">
    <div class="flex flex-col gap-y-10">
      <TheTitle>{{$t('Программа лояльности')}}</TheTitle>
      <div class="w-6/12">
        <p>{{$t('Каждая покупка с картой Baraka Market - это шаг к новому статусу в программе. Чем выше сумма ваших покупок в магазинах Baraka Market за календарный месяц, тем выше ваш статус в следующем календарном месяце!')}}</p>
      </div>
      <div>
        <TheTitle class="text-[24px]">
          {{$t('Статусы Baraka Market')}}
        </TheTitle>
        <div class="flex flex-col gap-y-6 mt-10">
          <div class="bg-white rounded-lg p-6 cursor-pointer"
              v-for="item in tariffArray" :key="item.id" @click="activeTarrif = item.id">
            <div class="flex items-center justify-between">
              <div class="flex gap-x-4 items-center">
                <div class="w-[64px] h-[64px] bg-to text-white flex items-center justify-center text-lg font-obold rounded-full">{{item.percent + '%'}}</div>
                <p class="font-obold text-lg uppercase">{{item.name}}</p>
              </div>
              <div class="p-4 rounded-full bg-to" :class="{'!bg-[#F2F2F2]' : activeTarrif !== item.id}">
                <div v-if="activeTarrif !== item.id">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1V13" stroke="#FE5000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 7H13" stroke="#FE5000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div v-else-if=" activeTarrif === item.id">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.23975 12.7583L12.7597 1.23828" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.7597 12.7583L1.23975 1.23828" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-7/12 mt-6 transition-all duration-200" :class="{'h-full transition-all duration-200' : activeTarrif === item.id, 'h-0 transition-all duration-200 overflow-hidden' : activeTarrif !== item.id}">
              <p :class="{'opacity-0 transition-all' : activeTarrif !== item.id}">{{item.description}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-y-10">
        <TheTitle class="text-[24px]">
          {{$t('Таблица начисленных бонусов')}}
        </TheTitle>
        <div class="w-7/12 font-oregular text-lg">
          <p>{{$t('Бонус - это внутренняя валюта программы и комплимент, который вы получаете, когда показываете на кассе карту Baraka Market. Бонусы начисляются на ваши покупки с использованием карты по курсу, который соответствует вашему статусу.')}}</p>
        </div>
        <div class="flex flex-col gap-y-4 font-obold">
          <button class="flex w-max items-center gap-x-3 text-to bg-white py-2 px-4 rounded-xl">
            <span>{{$t('Правила участия в программе')}}</span>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_266_8408" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect x="24" y="24" width="24" height="24" transform="rotate(180 24 24)" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_266_8408)">
                <path d="M16.6269 11.248L11.4577 6.07872C11.309 5.93 11.2356 5.75597 11.2375 5.55662C11.2394 5.35725 11.318 5.18001 11.4731 5.02489C11.6282 4.88002 11.8038 4.80502 12 4.79989C12.1961 4.79476 12.3718 4.86976 12.5269 5.02489L18.8673 11.3653C18.9609 11.4588 19.0269 11.5576 19.0653 11.6614C19.1038 11.7652 19.123 11.8774 19.123 11.9979C19.123 12.1185 19.1038 12.2306 19.0653 12.3345C19.0269 12.4383 18.9609 12.537 18.8673 12.6306L12.5269 18.971C12.3884 19.1095 12.217 19.1803 12.0125 19.1835C11.808 19.1867 11.6282 19.1159 11.4731 18.971C11.318 18.8159 11.2404 18.6377 11.2404 18.4364C11.2404 18.2351 11.318 18.0569 11.4731 17.9018L16.6269 12.7479L5.25002 12.7479C5.0372 12.7479 4.85901 12.6761 4.71542 12.5325C4.57182 12.389 4.50002 12.2108 4.50002 11.9979C4.50002 11.7851 4.57182 11.6069 4.71542 11.4633C4.85901 11.3198 5.0372 11.248 5.25002 11.248L16.6269 11.248Z" fill="#FE5000"/>
                </g>
              </svg>
            </span>
          </button>
          <button class="flex w-max items-center gap-x-3 text-to bg-white py-2 px-4 rounded-xl">
            <span>{{$t('Политика конфиденциальности')}}</span>
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_266_8408" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                <rect x="24" y="24" width="24" height="24" transform="rotate(180 24 24)" fill="#D9D9D9"/>
                </mask>
                <g mask="url(#mask0_266_8408)">
                <path d="M16.6269 11.248L11.4577 6.07872C11.309 5.93 11.2356 5.75597 11.2375 5.55662C11.2394 5.35725 11.318 5.18001 11.4731 5.02489C11.6282 4.88002 11.8038 4.80502 12 4.79989C12.1961 4.79476 12.3718 4.86976 12.5269 5.02489L18.8673 11.3653C18.9609 11.4588 19.0269 11.5576 19.0653 11.6614C19.1038 11.7652 19.123 11.8774 19.123 11.9979C19.123 12.1185 19.1038 12.2306 19.0653 12.3345C19.0269 12.4383 18.9609 12.537 18.8673 12.6306L12.5269 18.971C12.3884 19.1095 12.217 19.1803 12.0125 19.1835C11.808 19.1867 11.6282 19.1159 11.4731 18.971C11.318 18.8159 11.2404 18.6377 11.2404 18.4364C11.2404 18.2351 11.318 18.0569 11.4731 17.9018L16.6269 12.7479L5.25002 12.7479C5.0372 12.7479 4.85901 12.6761 4.71542 12.5325C4.57182 12.389 4.50002 12.2108 4.50002 11.9979C4.50002 11.7851 4.57182 11.6069 4.71542 11.4633C4.85901 11.3198 5.0372 11.248 5.25002 11.248L16.6269 11.248Z" fill="#FE5000"/>
                </g>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>