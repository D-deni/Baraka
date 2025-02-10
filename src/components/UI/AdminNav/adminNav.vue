<script setup lang="ts">
import LogoIcon from '/public/img/logo/logo.svg?skipsvgo'
import LogoText from '/public/img/logo/logo-text.svg?skipsvgo'
import {ref} from "vue";
import {useRoute} from "vue-router";


const route = useRoute()

const exitHover = ref(false)

const navArray = ref([
  {
    id: 0,
    name: 'Продукты',
    url: "/admin/products"
  },
  {
    id: 1,
    name: 'Скидки',
    url: "/admin/discounts",
  },
  {
    id: 2,
    name: 'Магазины',
    url: "/admin/shops",
  },
  {
    id: 3,
    name: 'Вакансии',
    url: "/admin/vacancies",
  },
  {
    id: 4,
    name: 'Условие работы',
    url: "/admin/condition",
  },
  {
    id: 5,
    name: 'Новости',
    url: "/admin/news",
  },
  {
    id: 6,
    name: 'Акции',
    url: "/admin/promotion",
  },
  {
    id: 6,
    name: 'Соц. сети',
    url: "/admin/social",
  },

]);

</script>


<template>
  <div class="py-4 px-2 bg-white rounded-3xl h-full">
    <div class="flex gap-x-10">
      <RouterLink class="flex items-center gap-x-2 max-sm:w-6/12 max-sm:gap-x-2" to="/admin/products">
        <LogoIcon/>
        <LogoText class="fill-to"/>
      </RouterLink>
      <div class="text-to h-max p-2 rounded-[10px] font-oregular text-[15px] bg-bgGray">
        <p>Admin</p>
      </div>
    </div>
    <div class="flex flex-col gap-y-6 justify-center text-center mt-[72px] text-lg">

      <RouterLink class="flex gap-x-2 justify-center items-center" :class="{'text-to' : route.path === item.url}" :to="item.url" v-for="item in navArray">
       <Transition name="fade">
         <div v-if="route.path === item. url">
           <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="6" cy="6" r="6" fill="#FF5000"/>
           </svg>
         </div>
       </Transition>
        <p>{{item.name}}</p>
      </RouterLink>
    </div>
    <div class="flex justify-center mt-[232px]">
      <button class="flex items-center gap-x-3 py-4 px-[34px] bg-bgGray rounded-[10px] text-[#EB5757] hover:bg-[#EB5757] transition-all duration-200 hover:text-white" @mouseenter="exitHover = true" @mouseleave="exitHover = false">
        <span>
          <svg :class="{'!stroke-[#EB5757] transition-all' : !exitHover, 'stroke-white transition-all' : exitHover}" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1V19V1ZM19 10H5H19ZM5 10L12 17L5 10ZM5 10L12 3L5 10Z" fill="#EB5757"/>
            <path d="M1 1V19M19 10H5M5 10L12 17M5 10L12 3"  stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class=" font-oregular text-[16px] ">
          {{$t('Выйти из аккаунта')}}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>