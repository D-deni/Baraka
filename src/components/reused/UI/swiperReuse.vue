<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from "./card.vue";
interface CardItem {
  id: number;
  img: string;
  title?: string;
  url?: string;
  desc?: string;
  discount?: number;
  price?: number;
}

defineProps<{
  gridRow?: number,
  spaceBetween?: number,
  slidesPerViewNumber: number,
  swiperModules: any[],
  cardArray: CardItem[],
  titleReuseFlag: boolean,
  descriptionReuseFlag: boolean,
  discountReuseFlag: boolean,
  priceReuseFlag: boolean,
  pricePercentFlag: boolean,
  priceContainerFlagReuse: boolean,
  cardBlockStyleReuse: string,
  cardLinkTextReuse: string,
  imgStyleReuse: string,
  slidesStyle?: string
}>()


</script>

<template>
  <Swiper class=""
          :slidesPerView="slidesPerViewNumber"
          :navigation="true"
          :grid="{
            rows: gridRow
          }"
          :space-between="spaceBetween"
          :pagination="{
            clickable: true
          }"
          :modules="swiperModules"
  >
    <SwiperSlide v-for="item in cardArray" :key="item.id" :class="slidesStyle" class="cursor-pointer">
      <Card :card-image-flag="true"
            :card-percent-flag="true"
            :price-container-flag="priceContainerFlagReuse"
            :card-description-flag="descriptionReuseFlag"
            :card-title-flag="titleReuseFlag"
            :card-discount-flag="discountReuseFlag"
            :card-price-flag="priceReuseFlag"
            :card-block-style="cardBlockStyleReuse"
            :card-link-text="cardLinkTextReuse"
            :card-price-design-container="`absolute top-40 -right-10 text-white`"
            :card-price-design="`relative text-center bg-[#FE5000] h-[90px] w-[100%] rounded-tl-[40%] rounded-tr-xl rounded-br-full !rounded-b-2xl pl-4
    [clip-path:polygon(25%_0%,100%_0,100%_65%,70%_100%,0_100%,0_40%)]` "
            :card-discount-style="`text-[28px] font-obold pt-2`"
            :card-price-style="`text-[15px] font-oregular flex`"
            :card-price-and-percent="`flex gap-x-2 items-center pl-2 pb-2 absolute bottom-0 right-0 w-full`"
            :card-percent-style="`text-[14px] font-obold text-black bg-[#FFC600] py-3 px-1 rounded-tl-xl rounded-br-[20px] rounded-bl-md rounded-tr-md -right-1 absolute [clip-path:polygon(33%_0,100%_0,100%_70%,68%_100%,0_100%,0%_39%)]`"
            :card-title-style="`text-[22px] mt-10 !font-omedium`"
            :card-image-style="`mx-auto w-max relative rounded-full`"
            :card-link="item?.id"
      >
        <template v-slot:cardImage >
          <img class="rounded-lg" :class="imgStyleReuse" :src="item?.img" alt="">
        </template>
        <template v-slot:cardTitle>
          {{ item?.title }}
        </template>
        <template v-slot:cardDescription>
          {{ item?.desc }}
        </template>
        <template v-slot:cardDiscount>
          {{ item?.discount }}
        </template>
        <template v-slot:cardPrice>
          {{ item?.price }}
        </template>
        <template v-slot:cardPercent>
          {{ '-' + (item?.discount && item?.price ? (100 / item.price) * item.discount : 0) + '%' }}
        </template>
      </Card>
    </SwiperSlide>
  </Swiper>

</template>

<style>

button {
  cursor: pointer;
  font-size: 20px; /* Размер шрифта для стрелок */
  transition: background-color 0.3s;
}

button:hover {
  background-color: #e0e0e0; /* Цвет фона при наведении */
}
.swiper-wrapper {
  flex-direction: row !important;
}
</style>
