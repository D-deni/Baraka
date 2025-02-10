<script setup lang="ts">
import LogoIcon from '/public/img/logo/logo.svg?skipsvgo'
import LogoText from '/public/img/logo/logo-text.svg?skipsvgo'
import Search from '/public/img/icons/others/search-normal.svg?skipsvgo'
import Call from '/public/img/icons/others/call-calling.svg?skipsvgo'
import {ref, watch, watchEffect} from "vue";
import {useGlobalStore} from "../../../../store/global.ts";

import Login from '/public/img/icons/others/login.svg?skipsvgo'
import {useDiscountsStore} from "../../../../store/products.ts";
import {globalUrl} from "../../../../composables/hooks.ts";


interface SearchResultItem {
  id: number;
  name: string;
  img: string;
  price: number;
  discount: number;
}

const global = useGlobalStore()
const searchShow = ref(false)
const searchActive = ref(false)
const searchValue = ref('')

const productsStore = useDiscountsStore()

const navArray = ref([
  {
    id: 0,
    name: 'Акции',
    url: "/stocks"
  },
  {
    id: 1,
    name: 'Каталог скидок',
    url: "/discounts",
  },
  {
    id: 2,
    name: 'Программа лояльности',
    url: "/loyalty",
  },
  {
    id: 3,
    name: 'Адреса магазинов',
    url: "/locations",
  },
  {
    id: 4,
    name: 'Карьера',
    url: "/career",
  },
  {
    id: 5,
    name: 'Новости',
    url: "/news",
  },
  {
    id: 6,
    name: 'О нас',
    url: "/about",
  },

]);


const formatNumber = (number: number) => {
  const numStr = number.toString();
  const [integerPart] = numStr.split('.');
  const mainPart = Math.floor(number / 1000);
  const remainder = number % 1000;
  const remainderStr = remainder.toString().padStart(3, '0');
  let result = mainPart.toString();
  if (remainder !== 0) {
    result += `<sup>${remainderStr}</sup>`;
  } else if (remainderStr === '000' && integerPart) {
    result += `<sup>${remainderStr}</sup>`;
  }
  return result;
};

const debounceTimeout = ref<number | null>(null);


const filterSearchResults = () => {
  if (searchValue.value.trim() === '') {
    productsStore.searchedArray = []
    return
  }

  if (debounceTimeout.value !== null) {
    clearTimeout(debounceTimeout.value)
  }
  debounceTimeout.value = setTimeout(() => {
    productsStore.searchProducts({query: searchValue.value})
  }, 500)

  const value = searchValue.value.toLowerCase()
  productsStore.searchedArray.filter((item: SearchResultItem) => {
    return (
        item.name.toLowerCase().includes(value) ||
        (!isNaN(Number(value)) && item.price <= Number(value))
    )
  })
}
//
// const filteredNavArray = computed(() => {
//   return navArray.value.filter(navitem => {
//     if (route.path === '/career') {
//       return [7, 8, 9].includes(navitem.id);
//     } else {
//       return ![7, 8, 9].includes(navitem.id);
//     }
//   })
// })



const clearSearch = () => {
  searchValue.value = '';
  productsStore.searchedArray = [];
  searchActive.value = false;
  searchShow.value = false;
};

const handleFocusOut = (event: FocusEvent) => {
  setTimeout(() => {
    const target = event.relatedTarget as HTMLElement | null;
    if (target && target.tagName === 'A') {
      return;
    }

    searchActive.value = false;
    searchShow.value = false;
  });
}


watch(searchValue, () => {
  filterSearchResults();
})

watchEffect(() => {
  if (!searchActive.value) {

  }
})

</script>

<template>
  <div class="font-oregular ">
    <div class="hidden max-xl:flex items-center justify-between px-[15px]" :class="{'blur-sm' : global.showMenu}">
      <RouterLink class="flex items-center max-sm:w-6/12 max-sm:gap-x-2" to="/" aria-label="Home">
        <LogoIcon/>
        <LogoText class="fill-to"/>
      </RouterLink>
      <div class="flex items-center gap-x-4" >
        <div class="hidden max-xl:flex items-center relative">
          <Transition name="fade" @focusout="handleFocusOut" tabindex="0">
            <input
                v-if="searchShow"
                @click="searchActive = true"
                v-model="searchValue"
                class="w-[253px] h-[48px] pl-4 pr-14 bg-white rounded-full border bottom-0 max-sm:hidden absolute mx-auto justify-center flex mt-10 focus:outline-to focus:outline focus:border-none focus:outline-1 transition-transform focus:bg-white -left-[198px] duration-300"
                :class="{'translate-x-0': searchShow, '-translate-x-52': !searchShow, '!border-[#FE5000]' : searchShow && searchActive}"
                placeholder="Поиск"
            />
          </Transition>
          <Transition name="fade">
            <div v-if="searchActive && productsStore.searchedArray"
                 class="absolute z-10 top-16 rounded-2xl -left-[198px] bottom-0 bg-white max-sm:hidden shadow-searchShadow border-none w-[253px] h-max"
                 :class="{'h-[400px] overflow-auto' : productsStore.searchedArray.length > 0, 'h-full ' : productsStore.searchedArray.length === 0}">
              <div v-if="productsStore.searchedArray.length === 0 && searchValue.length > 0"
                   class="p-4 text-center text-gray-500">
                {{ $t('Нет результатов') }}
              </div>
              <div v-else>
                <RouterLink :to="`/product/${result.id}`" @click="searchActive = false; searchShow = false"
                            v-for="result in productsStore.get_searchedArray" :key="result.id"
                            class="p-4 border-b items-center hover:bg-gray-200 hover:first:rounded-t-2xl hover:last:rounded-b-2xl text-start flex gap-x-4 ">
                  <img :src="globalUrl + result.image_url" alt="" class="w-[75px] h-[62px]"/>
                  <div class="w-6/12">
                    <span class="text-[14px] font-omedium">{{ result.title }}</span>
                  </div>
                  <div class="flex flex-col gap-y-2 justify-between">
                    <span class="font-obold text-to text-[15px]"
                          v-html="result.discount.discount_type === 'percent' ? formatNumber(result.price * (1 - result.discount.value / 100)) : formatNumber(result.price)"></span>
                    <s class="text-[11px]" v-html="formatNumber(result.price)"></s>
                  </div>
                </RouterLink>
              </div>
            </div>
          </Transition>
          <div>
            <button v-if="!searchActive" @click="searchShow = !searchShow; searchValue = ''"
                    class="p-3 bg-white rounded-full transition-all duration-200"
                    :class="{'!bg-opacity-0 !bg-transparent max-sm:!bg-to transition-all duration-200' : searchShow}">
             <span v-if="!searchShow" class="relative z-10">
               <svg class="" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path
                     d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z"
                     stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M22.5 22.5L20.5 20.5" stroke="#FE5000" stroke-width="1.5" stroke-linecap="round"
                       stroke-linejoin="round"/>
               </svg>
             </span>
              <span v-else class="relative z-10">
               <svg class="max-sm:stroke-white stroke-[#292D32]" width="25" height="25" viewBox="0 0 25 25" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                 <path
                     d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5Z"
                     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 <path d="M22.5 22.5L20.5 20.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
             </span>
            </button>
            <button v-else-if="searchShow && searchActive"
                    @click="searchActive = false; searchValue = ''; productsStore.searchedArray = []"
                    class="p-3 bg-white rounded-full transition-all duration-200"
                    :class="{'!bg-opacity-0 !bg-transparent max-sm:!bg-to transition-all duration-200' : searchShow}">
              <svg class="relative z-10 fill-[#141414] max-sm:fill-white" width="24" height="24" viewBox="0 0 24 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M5.27961 6.59539L18.4046 19.7204C18.5691 19.9013 18.7993 20 19.0625 20C19.5724 20 20 19.5724 20 19.0625C20 18.7993 19.9013 18.5691 19.7204 18.4046L6.59539 5.2796C6.43092 5.09868 6.20066 5 5.9375 5C5.42763 5 5 5.42763 5 5.9375C5 6.20066 5.09868 6.43092 5.27961 6.59539ZM18.4046 5.2796L5.27961 18.4046C5.09868 18.5691 5 18.7993 5 19.0625C5 19.5724 5.42763 20 5.9375 20C6.20066 20 6.43092 19.9013 6.59539 19.7204L19.7204 6.59539C19.9013 6.43092 20 6.20066 20 5.9375C20 5.42763 19.5724 5 19.0625 5C18.7993 5 18.5691 5.09868 18.4046 5.2796Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div @click="global.showMenu = !global.showMenu; searchActive = false; searchShow = false"
             class="px-[10px] py-[12px] shadow-blockShadow rounded-md">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="black" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    <div
        class="hidden max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:relative max-sm:px-2">
      <Transition name="fade" @focusout="handleFocusOut" tabindex="0">
        <input
            v-if="searchShow"
            @click="searchActive = true"
            v-model="searchValue"
            class="w-[253px] h-[48px] pl-4 pr-14 bg-white rounded-full border mx-auto justify-center flex mt-6 max-md:w-8/12 max-sm:w-full focus:outline-to focus:outline focus:border-none focus:outline-1 transition-transform focus:bg-white top-20 -left-[198px] duration-300"
            :class="{'translate-x-0': searchShow, '-translate-x-52': !searchShow, '!border-[#FE5000]' : searchShow && searchActive}"
            placeholder="Поиск"

        />
      </Transition>
      <Transition name="fade" >
        <div v-if="searchActive && productsStore.searchedArray"
             class="absolute z-10 top-16 rounded-2xl hidden -left-[198px] max-sm:left-0 max-sm:right-0 max-sm:flex max-sm:justify-center max-sm:mx-auto max-sm:w-11/12 max-sm:top-20 bottom-0 bg-white shadow-searchShadow border-none w-[253px] h-max" :class="{'h-[400px] overflow-auto' : productsStore.searchedArray.length > 0, 'h-full ' : productsStore.searchedArray.length === 0}">
          <div v-if="productsStore.searchedArray.length === 0 && searchValue.length > 0"
               class="p-4 text-center text-gray-500">
            {{ $t('Нет результатов') }}
          </div>
          <div v-else>
            <RouterLink :to="`/product/${result.id}`" @click="searchActive = false; searchShow = false"
                        v-for="result in productsStore.searchedArray" :key="result.id"
                        class="p-4 border-b items-center hover:bg-gray-200 hover:first:rounded-t-2xl hover:last:rounded-b-2xl text-start flex gap-x-4 ">
              <img :src="globalUrl + result.image_url" alt="" class="w-[75px] h-[62px]"/>
              <div class="w-6/12">
                <span class="text-[14px] font-omedium">{{ result.title }}</span>
              </div>
              <div class="flex flex-col gap-y-2 justify-between">
                <span class="font-obold text-to text-[15px]"
                      v-html="result.discount.discount_type === 'percent' ? formatNumber(result.price * (1 - result.discount.value / 100)) : formatNumber(result.price)"></span>
                <s class="text-[11px]" v-html="formatNumber(result.price)"></s>
              </div>
            </RouterLink>
          </div>
        </div>
      </Transition>
    </div>
    <div>
      <Transition name="fade">
        <div v-if="global.showMenu" @click="global.showMenu = false"
             :class="{'max-xl:fixed max-xl:w-screen max-xl:h-screen max-xl:bg-black max-xl:bg-opacity-45 right-0 top-0 left-0 z-30' : global.showMenu}"></div>
      </Transition>
      <div
          class="flex gap-x-4 items-center container mx-auto max-xl:fixed max-xl:bg-white max-xl:overflow-scroll max-xl:py-10 max-xl:z-30 max-xl:flex-col max-xl:top-0 max-xl:w-6/12 max-md:w-9/12 max-sm:w-full max-xl:h-screen transition-all duration-300 right-0"
          :class="{'!max-xl:-right-0 transition-all duration-300' : global.showMenu, 'max-xl:-right-[1200px] transition-all duration-300' : !global.showMenu}">
        <div class="flex max-sm:justify-between items-center max-sm:w-11/12">
          <RouterLink class="flex items-center gap-x-2 max-sm:w-7/12" to="/" @click="global.showMenu = false">
            <LogoIcon/>
            <LogoText class="fill-to x"/>
          </RouterLink>
          <div class="max-sm:block hidden p-[10px] shadow-blockShadow rounded-md" @click="global.showMenu = false">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 7L7 17M7 7L17 17" stroke="black" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <button
            class="hidden items-center gap-x-4 bg-[#F7F6F9]   rounded-lg max-sm:flex mt-[32px]  max-sm:w-11/12 max-sm:justify-center">
          <span class="relative z-20 flex items-center cursor-default w-full h-full">
             <span
                 class="absolute w-full h-full top-0 left-0 right-0 flex items-center justify-center text-2xl font-oregular">{{
                 $t('Скоро')
               }}</span>
              <span class="absolute bg-black w-full opacity-5 py-4 rounded-lg h-full -z-10 cursor-default"></span>
              <span class="flex items-center blur-sm  h-full mx-auto py-4">
                <Login class="cursor-default"/>
                <RouterLink class="!cursor-default text-center " :to="''">{{ $t('Персональный кабинет') }}</RouterLink>
              </span>
          </span>
        </button>
        <div
            class="flex w-full my-10 justify-center gap-x-10 max-2xl:gap-x-6 max-xl:flex max-xl:flex-col max-xl:items-center max-xl:gap-y-10"
            :class="{'!text-black' : global.showMenu && $route.path === '/career'}">
          <div v-for="navitem in navArray" :key="navitem?.id" class="">
            <RouterLink @click="global.showMenu = false; searchShow = false"
                        class="transition-all duration-200 hover:text-amber-500 max-sm:text-[20px] font-oregular"
                        :class="{'text-amber-500' : navitem.url === $route.path}"
                        :to="navitem.url">
              {{ navitem.name }}
            </RouterLink>
          </div>
        </div>
        <div class="flex items-center gap-x-7 max-lg:mt-[30px]">
          <div class="flex relative max-sm:hidden" >
            <Transition name="fade" @focusout="handleFocusOut" tabindex="0">
              <input
                  v-if="searchShow"
                  @click="searchActive = true"
                  v-model="searchValue"
                  class="w-[253px] h-[48px] pl-4 pr-14 bg-[#F2F2F2] rounded-full border absolute focus:outline-to focus:outline focus:border-none focus:outline-1 transition-transform focus:bg-white top-0 -left-[198px] duration-300"
                  :class="{'translate-x-0': searchShow, '-translate-x-52': !searchShow, '!border-[#FE5000]' : searchShow && searchActive}"
                  placeholder="Поиск"

              />
            </Transition>
            <div v-if="searchActive && productsStore.searchedArray"
                 class="absolute z-10 top-16 rounded-2xl -left-[198px] bottom-0 bg-white shadow-searchShadow border-none w-[253px]" :class="{'h-[400px] overflow-auto' : productsStore.searchedArray.length > 0, 'h-full ' : productsStore.searchedArray.length === 0}">
              <div v-if="productsStore.searchedArray.length === 0 && searchValue.length > 0"
                   class="p-4 text-center text-gray-500">
                {{ $t('Нет результатов') }}
              </div>
              <div v-else>
                <RouterLink :to="`/product/${result.id}`" @click.stop="searchActive = false; searchShow = false"
                            v-for="(result, index) in productsStore.searchedArray" :key="result.id"
                            :style="{ transitionDelay: `${index * 100}ms` }"
                            class="p-4 border-b items-center hover:bg-gray-200 hover:first:rounded-t-2xl hover:last:rounded-b-2xl text-start flex gap-x-4 ">
                  <img :src="globalUrl + result.image_url" alt="" class="w-[75px] h-[62px]"/>
                  <div class="w-6/12">
                    <span class="text-[14px] font-omedium">{{ result.title }}</span>
                  </div>
                  <div class="flex flex-col gap-y-2 justify-between">
                    <span class="font-obold text-to text-[15px]"
                          v-html="result.discount.discount_type === 'percent' ? formatNumber(result.price * (1 - result.discount.value / 100)) : formatNumber(result.price)"></span>
                    <s class="text-[11px]" v-html="formatNumber(result.price)"></s>
                  </div>
                </RouterLink>
              </div>
            </div>
            <div class="max-xl:hidden">
              <button v-if="!searchActive" @click="searchShow = !searchShow; searchValue = ''"
                      class="p-3 bg-white rounded-full transition-all duration-200"
                      :class="{'!bg-opacity-0 !bg-transparent transition-all duration-200' : searchShow}">
                <Search class="relative z-10"></Search>
              </button>
              <button v-else-if="searchShow && searchActive" @click.stop="clearSearch"
                      class="p-3 bg-white rounded-full transition-all duration-200"
                      :class="{'!bg-opacity-0 !bg-transparent transition-all duration-200' : searchShow}">
                <svg class="relative z-10" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M5.27961 6.59539L18.4046 19.7204C18.5691 19.9013 18.7993 20 19.0625 20C19.5724 20 20 19.5724 20 19.0625C20 18.7993 19.9013 18.5691 19.7204 18.4046L6.59539 5.2796C6.43092 5.09868 6.20066 5 5.9375 5C5.42763 5 5 5.42763 5 5.9375C5 6.20066 5.09868 6.43092 5.27961 6.59539ZM18.4046 5.2796L5.27961 18.4046C5.09868 18.5691 5 18.7993 5 19.0625C5 19.5724 5.42763 20 5.9375 20C6.20066 20 6.43092 19.9013 6.59539 19.7204L19.7204 6.59539C19.9013 6.43092 20 6.20066 20 5.9375C20 5.42763 19.5724 5 19.0625 5C18.7993 5 18.5691 5.09868 18.4046 5.2796Z"
                      fill="#141414"/>
                </svg>
              </button>
            </div>
          </div>
          <a href="tel:1247" class="flex flex-col items-center">
            <div class="flex items-center justify-center font-osemibold text-2xl gap-x-2">
              <Call/>
              <p>1247</p>
            </div>
            <div class="text-sm font-oregular text-[#AFAFAF]">
              <p>{{ $t('Колл-центр') }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>