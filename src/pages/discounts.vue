<script setup lang="ts">
import {onMounted, ref, nextTick, useTemplateRef} from 'vue';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TheTitle from "../components/UI/TheTitle.vue";
import Card from "../components/reused/UI/card.vue";
import {useDiscountsStore} from "../store/products.ts";
import {globalUrl} from "../composables/hooks.ts";
import {useGlobalStore} from "../store/global.ts";

const discountStore = useDiscountsStore();

const el = useTemplateRef<HTMLElement>('el')

const itemsPerPage = ref(4);
const currentPage = ref(1);
const isLoading = ref(false);
const observerTarget = ref<HTMLElement | null>(null);

const globalStore = useGlobalStore()

const formatNumber = (number: any) => {
  if (!number) return '';
  let numberStr = number.toLocaleString();
  const [integerPart, decimalPart] = numberStr.split('.');

  if (integerPart.length <= 3) return numberStr;

  const integerWithoutLastDigits = integerPart.slice(0, -3);
  const lastDigits = integerPart.slice(-3);
  let formattedInteger = `${integerWithoutLastDigits}<sup>${lastDigits}</sup>`;

  if (decimalPart) {
    formattedInteger += `.${decimalPart}`;
  }

  return formattedInteger;
};

const loadMore = async (initialLoad = false) => {
  if (isLoading.value || !discountStore.hasMoreData) return;
  isLoading.value = true;
  let nextPage = initialLoad ? 1 : currentPage.value + 1;

  try {
    while (true) {
      await discountStore.loadProducts({ page: nextPage, limit: itemsPerPage.value});

      if (discountStore.products.length === 0) {
        discountStore.hasMoreData = false;
        break;
      }

      // Получаем уникальные товары
      const newItems = discountStore.products.flatMap(() =>
          discountStore.products.map(product => {
            if (!product) return null;
            return { ...product };
          })
      ).filter(Boolean);

      const existingProductIds = new Set(discountStore.newData.map( (item : any) => item.id))

      // Фильтруем товары, чтобы они не повторялись по id
      const uniqueItems = newItems.filter((item: any) => {
        if (!existingProductIds.has(item.id)) {
          existingProductIds.add(item.id);
          return true;
        }
        return false;
      }
    );

      // Если есть уникальные товары, добавляем их
      if (uniqueItems.length) {
        discountStore.newData.push(...uniqueItems);
        currentPage.value = nextPage;
      }

      if (uniqueItems.length < itemsPerPage.value) break;
      nextPage++;
    }
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }

};

let observer: IntersectionObserver | null = null;

const setupObserver = () => {
  if (observer) {
    observer.disconnect();
  }

  if (!observerTarget.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && discountStore.hasMoreData && !isLoading.value) {
        loadMore();
      }
    },
    {rootMargin: '100px', threshold: 0.1}
  );

  observer.observe(observerTarget.value);
};

onMounted(async () => {
  await loadMore(true);
  nextTick(() => setupObserver());
});


</script>

<template>
  <div class="container mx-auto">
    <div class="max-md:mx-4">
      <TheTitle>{{ $t('Каталог скидок')}}</TheTitle>
      <p>{{$t('Ищите ценники с желтым цветом!')}}</p>
    </div>
      <div ref="el">
        <TransitionGroup name="fade" tag="div" class="grid grid-cols-4 gap-y-4 max-md:flex max-md:flex-col max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 max-xl:mx-auto justify-center items-center gap-x-10 break-all" >
          <Card v-for="(item, index) in discountStore.newData" :key="item.id" :style="{ transitionDelay: index * 0.07 + 's' }"
                :card-image-flag="true"
                :card-percent-flag="true"
                :price-container-flag="true"
                :card-description-flag="true"
                :card-title-flag="true"
                :card-discount-flag="true"
                :card-price-flag="true"
                :card-block-style="`w-[326px] h-[440px] flex flex-col justify-center items-center mx-2 bg-white shadow-blockShadow p-7 mb-10 mt-10 rounded-xl`"
                :card-link-text="`product`"
                :card-price-design-container="`absolute top-40 -right-10 text-white`"
                :card-discount-style="`text-2xl w-full z-20 font-obold flex justify-center top-6 left-1`"
                :card-price-style="`text-[16px] font-oregular flex`"
                :card-price-and-percent="`flex gap-x-2 items-center pl-4 absolute bottom-0 right-0 w-full`"
                :card-percent-style="`text-[14px] font-obold text-black bg-[#FFC600] py-3 px-1 rounded-tl-xl rounded-br-[20px] rounded-bl-md rounded-tr-md -right-1 absolute [clip-path:polygon(33%_0,100%_0,100%_70%,68%_100%,0_100%,0%_39%)]`"
                :card-title-style="`text-[22px] !break-normal mt-10 !font-omedium`"
                :card-image-style="`mx-auto h-[250px] flex items-center w-max relative rounded-full`"
                :card-link="item?.id"
          >
            <template v-slot:cardImage>
              <img class="rounded-lg w-[200px] mx-auto" :src="globalUrl + item?.image_url" alt="">
            </template>
            <template v-slot:cardTitle>{{ globalStore.language !== 'ru' ? item?.title_uz?.slice(0,30) + '...' : item?.title?.slice(0,30) }}</template>
            <template v-slot:cardDescription>{{ globalStore.language !== 'ru' ? item?.description_uz?.slice(0,30) + '...' : item?.description?.slice(0,30) }}</template>
            <template v-slot:cardDiscount>
              <span v-html="formatNumber(item?.new_price)"></span>
            </template>
            <template v-slot:cardPrice>
              <div class="price-container relative ">
          <span class="price-text"
                v-html="formatNumber(item.price)"></span>
                <svg class="price-strike absolute -bottom-1.5 -left-1"
                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 20" width="110%" height="40">
                  <line x1="100" y1="0" x2="0" y2="25" stroke="white" stroke-width="2"/>
                </svg>
              </div>
            </template>
          </Card>
        </TransitionGroup>
      </div>

    <div ref="observerTarget" class="h-10"></div>

    <div v-if="isLoading" class="text-center mt-4">
      <p>Загрузка...</p>
    </div>
  </div>
</template>