<script setup lang="ts">
import {ref} from "vue";
import {useGlobalStore} from "../../store/global.ts";


const global = useGlobalStore()
const headerNav = ref([
  {
    id: 0,
    url: '/offers',
    text: 'Мои предложения'
  },
  {
    id: 1,
    url: '/coupons',
    text: 'Купоны'
  },
  {
    id: 2,
    url: '/shopping-list',
    text: 'Мои покупки'
  },
  {
    id: 3,
    url: '/actions',
    text: 'Правила программы'
  },
])
</script>

<template>
  <div class="bg-white py-4">
   <div class="container mx-auto flex max-md:flex-col items-center justify-between">
     <div class="flex items-center justify-between max-md:w-full">
       <div @click="global.showMenuProfile = !global.showMenuProfile; global.showMenuProfileUser = false" class="hidden max-xl:block">
         <div v-if="!global.showMenuProfile">
           <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H20C20.4142 10.25 20.75 10.5858 20.75 11C20.75 11.4142 20.4142 11.75 20 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H11C11.4142 15.25 11.75 15.5858 11.75 16C11.75 16.4142 11.4142 16.75 11 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z" fill="#1C274C"/>
             <path d="M17.0119 14.4306C17.2928 14.1898 17.7072 14.1898 17.9881 14.4306L21.4881 17.4306C21.8026 17.7001 21.839 18.1736 21.5695 18.4881C21.2999 18.8026 20.8264 18.839 20.5119 18.5694L17.5 15.9878L14.4881 18.5694C14.1736 18.839 13.7001 18.8026 13.4306 18.4881C13.161 18.1736 13.1974 17.7001 13.5119 17.4306L17.0119 14.4306Z" fill="#1C274C"/>
           </svg>
         </div>
         <div v-else>
           <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H20C20.4142 10.25 20.75 10.5858 20.75 11C20.75 11.4142 20.4142 11.75 20 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z" fill="#1C274C"/>
             <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0119 18.5695C17.2928 18.8102 17.7072 18.8102 17.9881 18.5695L21.4881 15.5695C21.8026 15.2999 21.839 14.8264 21.5695 14.5119C21.2999 14.1974 20.8264 14.161 20.5119 14.4306L17.5 17.0122L14.4881 14.4306C14.1736 14.161 13.7001 14.1974 13.4306 14.5119C13.161 14.8264 13.1974 15.2999 13.5119 15.5695L17.0119 18.5695Z" fill="#1C274C"/>
           </svg>
         </div>
       </div>
       <nav class="flex gap-x-10 font-oregular max-xl:flex-wrap max-xl:gap-x-4 max-xl:items-center max-xl:absolute max-xl:top-[93px] max-md:top-[152px] max-xl:rounded-b-xl max-xl:shadow-xl max-xl:px-10 max-xl:bg-white max-xl:z-30 max-xl:h-[10%] max-sm:max-h-[30%] max-xl:max-h-min transition-all max-md:justify-center" :class="{'max-xl:h-0 !max-sm:h-0 max-xl:max-h-0 transition-all duration-200 max-xl:overflow-hidden' : !global.showMenuProfile, 'max-[450px]:h-[30%] max-md:mx-4 ' : global.showMenuProfile}">
         <RouterLink class="max-xl:text-lg max-xl:font-obold" @click="global.showMenuProfile = false" :class="{'text-to' : $route.path === item.url, ' transition-all duration-200' : !global.showMenuProfile}" :to="item.url" v-for="item in headerNav" :key="item.id">
           {{item.text}}
         </RouterLink>
       </nav>
       <button @click='$router.push("/profile")' class="hidden max-md:flex items-center gap-x-4 bg-bgGray px-3 py-2 rounded-full cursor-pointer">
         <span>
           <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="white"/>
             <path d="M22.1601 20.87C22.0601 20.86 21.9401 20.86 21.8301 20.87C19.4501 20.79 17.5601 18.84 17.5601 16.44C17.5601 13.99 19.5401 12 22.0001 12C24.4501 12 26.4401 13.99 26.4401 16.44C26.4301 18.84 24.5401 20.79 22.1601 20.87Z" stroke="#FE5000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M17.16 24.56C14.74 26.18 14.74 28.82 17.16 30.43C19.91 32.27 24.42 32.27 27.17 30.43C29.59 28.81 29.59 26.17 27.17 24.56C24.43 22.73 19.92 22.73 17.16 24.56Z" stroke="#FE5000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
         </span>
         <p>+998 95 558 56 65</p>
         <span>
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M13.2788 5.96875L8.93208 10.3154C8.41875 10.8288 7.57875 10.8288 7.06542 10.3154L2.71875 5.96875" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
         </span>
       </button>
     </div>
     <div class="flex gap-x-6 items-center">
        <div class="flex gap-x-6 max-md:hidden">
          <div class="text-to bg-bgGray px-4 text-[17px] py-2 rounded-xl flex items-center gap-x-4">
            <p class="font-obold">5000</p>
            <p class="font-oregular">{{$t('бонусов')}}</p>
          </div>
          <select>
            <option value="ru" selected>Русский</option>
            <option value="uz">Узбекский</option>
          </select>
        </div>
       <button @click='$router.push("/profile")' class="flex max-md:hidden items-center gap-x-4 bg-bgGray px-3 py-2 rounded-full cursor-pointer">
         <span>
           <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z" fill="white"/>
             <path d="M22.1601 20.87C22.0601 20.86 21.9401 20.86 21.8301 20.87C19.4501 20.79 17.5601 18.84 17.5601 16.44C17.5601 13.99 19.5401 12 22.0001 12C24.4501 12 26.4401 13.99 26.4401 16.44C26.4301 18.84 24.5401 20.79 22.1601 20.87Z" stroke="#FE5000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M17.16 24.56C14.74 26.18 14.74 28.82 17.16 30.43C19.91 32.27 24.42 32.27 27.17 30.43C29.59 28.81 29.59 26.17 27.17 24.56C24.43 22.73 19.92 22.73 17.16 24.56Z" stroke="#FE5000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
         </span>
         <p>+998 95 558 56 65</p>
         <span>
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M13.2788 5.96875L8.93208 10.3154C8.41875 10.8288 7.57875 10.8288 7.06542 10.3154L2.71875 5.96875" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
         </span>
       </button>
     </div>
     <div class="gap-x-10 hidden max-md:flex max-md:justify-around w-full max-md:mt-4">
       <div class="text-to bg-bgGray px-4 text-[17px] py-2 rounded-xl flex items-center gap-x-4">
         <p class="font-obold">5000</p>
         <p class="font-oregular">{{$t('бонусов')}}</p>
       </div>
       <select>
         <option value="ru" selected>Русский</option>
         <option value="uz">Узбекский</option>
       </select>
     </div>
   </div>
  </div>
</template>

<style scoped>

</style>