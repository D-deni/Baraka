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

const discountStore = useDiscountsStore();

const el = useTemplateRef<HTMLElement>('el')

const itemsPerPage = ref(1);
const currentPage = ref(1);
const isLoading = ref(false);
const observerTarget = ref<HTMLElement | null>(null);

const formatNumber = (number: any) => {
  if (!number) return '';
  let numberStr = number.toLocaleString();
  const integerWithoutZeros = numberStr.replace(/0+$/, '');
  let formattedInteger = integerWithoutZeros;
  if (integerWithoutZeros.length < numberStr.length) {
    const zerosToSup = numberStr.slice(integerWithoutZeros.length);
    if (zerosToSup.length === 3) {
      formattedInteger += zerosToSup.replace(/0/g, (match: any) => `<sup>${match}</sup>`);
    } else {
      formattedInteger += zerosToSup;
    }
  }
  return formattedInteger;
};

const loadMore = async (initialLoad = false) => {

  isLoading.value = true;
  // console.log(`Загрузка страницы: ${currentPage.value + 1}`);
  let nextPage = initialLoad ? 1 : currentPage.value + 1;

  try {
    while (true) {
      await discountStore.loadDiscounts({ page: nextPage, limit: itemsPerPage.value });

      if (discountStore.discounts.length === 0) {
        // console.log(`Страница ${nextPage} пуста. Остановка загрузки.`);
        discountStore.hasMoreData = false;
        break;
      }
      const newItems = discountStore.discounts.flatMap(discount =>
        (discount.products || []).map(product => {
          if (!product) return null;

          let originalPrice = discount.value !== 100
            ? Math.round((product.price * 100) / (100 - discount.value))
            : product.price;

          return {
            ...product,
            discount_type: discount.discount_type,
            originalPrice,
            discount: discount.value
          };
        })
      ).filter(Boolean);
      const uniqueItems = newItems.filter((item: any) =>
        !discountStore.newData.some((existingItem : any) => existingItem.id === item.id)
      );
      if (uniqueItems.length) {
        discountStore.newData.push(...uniqueItems);
        currentPage.value = nextPage;
      }
      // console.log(`Загружена страница ${nextPage}, товаров: ${uniqueItems.length}`);
      if (uniqueItems.length >= 3) break;
      nextPage++;
    }

  } catch (error) {
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
      if (entries[0].isIntersecting && discountStore.hasMoreData) {
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
      <TheTitle>{{ $t('Каталог скидок') }}</TheTitle>
    </div>
      <div ref="el">
        <TransitionGroup name="fade" tag="div" class="grid grid-cols-4 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 max-xl:mx-auto justify-center items-center gap-x-10 break-all" >
          <Card v-for="(item, index) in discountStore.newData" :key="item.id" :style="{ transitionDelay: index * 0.07 + 's' }"
                :card-image-flag="true"
                :card-percent-flag="true"
                :price-container-flag="true"
                :card-description-flag="true"
                :card-title-flag="true"
                :card-discount-flag="true"
                :card-price-flag="true"
                :card-block-style="`w-[358px] overflow-hidden h-[400px] max-xl:w-full max-md:w-11/12 max-md:mx-4 flex flex-col justify-center items-center mx-2 bg-white shadow-blockShadow p-7 mb-10 mt-10 rounded-xl`"
                :card-link-text="`product`"
                :card-price-design-container="item.discount !== null ? `absolute top-40 -right-10 text-white` : `absolute text-white bottom-0 right-0`"
                :card-price-design="item.discount !== null ? `relative text-center bg-[#FE5000] h-[90px] rounded-tl-[40%] rounded-tr-xl rounded-br-full !rounded-b-2xl pl-4 [clip-path:polygon(25%_0%,100%_0,100%_70%,60%_100%,0_100%,0_40%)]` : `relative text-center bg-[#FE5000] h-[35px] w-[150px]`"
                :card-discount-style="`text-[28px] pt-[24px] font-obold pr-[10px]`"
                :card-price-style="item.discount !== null ? `text-[15px] font-oregular flex` : `text-[21px] font-oregular flex mx-auto`"
                :card-price-and-percent="item.discount !== null ? `flex gap-x-2 items-center pl-4 absolute bottom-0 right-0 w-full` : `absolute flex gap-x-2 items-center bottom-0 right-0 w-full`"
                :card-percent-style="`text-[14px] font-obold text-black bg-[#FFC600] py-3 px-1 rounded-tl-xl rounded-br-[20px] rounded-bl-md rounded-tr-md -right-1 absolute [clip-path:polygon(33%_0,100%_0,100%_70%,68%_100%,0_100%,0%_39%)]`"
                :card-title-style="`text-[22px] mt-10 !font-omedium`"
                :card-image-style="`mx-auto relative w-[224px] h-[224px] rounded-full`"
                :card-link="item?.id"
          >
            <template v-slot:cardImage>
              <img class="rounded-lg w-full" :src="globalUrl + item?.image_url" alt="">
            </template>
            <template v-slot:cardTitle>{{ item?.title?.length > 40 ? item?.title?.slice(0,40) + '...' : item?.title }}</template>
            <template v-slot:cardDescription>{{ item?.description?.length > 40 ? item?.description?.slice(0,40) + '...' : item?.description }}</template>
            <template v-slot:cardDiscount>
              <span v-html="formatNumber(item?.price)"></span>
            </template>
            <template v-slot:cardPrice>
              <div class="price-container relative">
          <span class="price-text"
                v-html="item.discount_type !== 'percent' ? formatNumber(item?.price + item.discount) : formatNumber(item?.originalPrice )"></span>
                <svg v-if="item.discount !== null" class="price-strike absolute -bottom-1.5 -left-1"
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