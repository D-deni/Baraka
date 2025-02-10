<script setup lang="ts">
import {ref} from "vue";

const showTooltip = ref()
const historyInfo = ref([
  {
    id: 0,
    title: 'Количество покупок',
    number: 30,
  },
  {
    id: 1,
    title: 'Количество покупок',
    number: 2555000,
  },
  {
    id: 2,
    title: 'Количество покупок',
    number: 0,
  },
])

const buyHistoryArray = ref([
  {
    id: 0,
    marketName: 'Store001',
    bonus: 0.123,
    marketLocation: 'Baraka Market 011 г. Ташкент. Мирабадский р-н, ул. Нукус 88/1 (ориентир: Ташкентское городское отделение "Капиталбанк")',
    date: '31.08.2028',
    time: '07:58',
    count: 1002000.00,
  },
  {
    id: 1,
    marketName: 'Store001',
    bonus: 0.123,
    marketLocation: 'Baraka Market 011 г. Ташкент. Мирабадский р-н, ул. Нукус 88/1 (ориентир: Ташкентское городское отделение "Капиталбанк")',
    date: '',
    time: '07:58',
    count: 1002000.11,
  }
])
</script>

<template>
  <div>
    <div class="bg-white w-full flex  gap-x-10 p-6 rounded-xl">
      <div class="bg-bgGray p-10 rounded-xl w-max flex flex-col gap-y-6 relative" v-for="item in historyInfo" :key="item.id">
        <div class="absolute right-4 top-4 cursor-pointer" @mouseenter.prevent="showTooltip = item.id" @mouseleave="showTooltip = null">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0625 8.65625C0.0625 3.9105 3.9105 0.0625 8.65625 0.0625C13.402 0.0625 17.25 3.9105 17.25 8.65625C17.25 13.402 13.402 17.25 8.65625 17.25C3.9105 17.25 0.0625 13.402 0.0625 8.65625ZM8.65625 1.4375C4.66989 1.4375 1.4375 4.66989 1.4375 8.65625C1.4375 12.6426 4.66989 15.875 8.65625 15.875C12.6426 15.875 15.875 12.6426 15.875 8.65625C15.875 4.66989 12.6426 1.4375 8.65625 1.4375ZM6.76562 7.45312C6.76562 7.07343 7.07343 6.76562 7.45312 6.76562H8.82812C9.20782 6.76562 9.51562 7.07343 9.51562 7.45312V11.9219H10.7188C11.0984 11.9219 11.4062 12.2297 11.4062 12.6094C11.4062 12.9891 11.0984 13.2969 10.7188 13.2969H6.9375C6.5578 13.2969 6.25 12.9891 6.25 12.6094C6.25 12.2297 6.5578 11.9219 6.9375 11.9219H8.14062V8.14062H7.45312C7.07343 8.14062 6.76562 7.83282 6.76562 7.45312Z" fill="#141414"/>
            <path d="M8.65625 3.58594C8.43529 3.58594 8.21929 3.65146 8.03557 3.77422C7.85185 3.89698 7.70866 4.07146 7.6241 4.2756C7.53955 4.47974 7.51742 4.70436 7.56053 4.92108C7.60364 5.13779 7.71004 5.33685 7.86628 5.4931C8.02252 5.64934 8.22158 5.75574 8.4383 5.79885C8.65501 5.84195 8.87964 5.81983 9.08378 5.73527C9.28792 5.65071 9.4624 5.50752 9.58516 5.3238C9.70792 5.14008 9.77344 4.92408 9.77344 4.70312C9.77344 4.40683 9.65573 4.12267 9.44622 3.91315C9.23671 3.70364 8.95255 3.58594 8.65625 3.58594Z" fill="#141414"/>
          </svg>
        </div>
        <Transition name="fade">
          <div v-if="showTooltip === item.id" @mouseenter="showTooltip = item.id" @mouseleave="showTooltip = null" class="cursor-pointer absolute top-0 right-0 bg-black h-full bg-opacity-50 text-white rounded-xl p-6">
            Lorem ipsum dolor sit amet.
          </div>
        </Transition>
        <h3>{{item.title}}</h3>
        <p class="text-to font-obold text-[24px] text-center flex gap-x-2 justify-center items-center">{{item.number}}<span class="text-black font-oregular text-[22px]" v-if="item.id !== 0">{{$t('сум')}}</span></p>
      </div>
    </div>
    <div class="mt-10">
      <p class="text-to text-[24px] font-obold pb-10">{{$t('Покупки')}}</p>
      <div class="flex flex-col pb-20 gap-y-6">
        <div class="bg-white p-6 w-4/12 rounded-lg" v-for="item in buyHistoryArray" :key="item.id">
          <div class="flex items-center font-omedium text-[18px] justify-between">
            <p class="">{{item.marketName}}</p>
            <p class="text-[#09A552] ">{{item.bonus + ' ' + $t('бонусов')}}</p>
          </div>
          <div class="justify-between">
            <div class="flex gap-x-2 my-6">
              <div>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 12.3138C12.5795 12.3138 13.86 11.0333 13.86 9.45375C13.86 7.87422 12.5795 6.59375 11 6.59375C9.42048 6.59375 8.14001 7.87422 8.14001 9.45375C8.14001 11.0333 9.42048 12.3138 11 12.3138Z" stroke="#FE5000" stroke-width="1.375"/>
                  <path d="M3.31823 7.78511C5.12406 -0.153227 16.8849 -0.14406 18.6816 7.79427C19.7357 12.4509 16.8391 16.3926 14.2999 18.8309C12.4574 20.6093 9.5424 20.6093 7.69073 18.8309C5.16073 16.3926 2.26406 12.4418 3.31823 7.78511Z" stroke="#FE5000" stroke-width="1.375"/>
                </svg>
              </div>
              <p class="w-8/12">{{item.marketLocation}}</p>
            </div>
            <div class="flex justify-between">
              <p class="flex items-center gap-x-2 font-oregular italic">{{item.date}} <span>{{item.time}}</span></p>
              <div class="text-to bg-bgGray rounded-xl font-bold text-[17px] py-2 px-2">
                {{item.count + ' ' + 'сумов'}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>