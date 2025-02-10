<script setup lang="ts">
import ImgLeft from '/img/elements/feedback/left.webp?url'
import ImgRight from '/img/elements/feedback/right.webp?url'
import IconPensive from '/img/elements/feedback/pensive.webp?url'
import IconRolling from '/img/elements/feedback/rolling.webp?url'
import IconKiss from '/img/elements/feedback/kiss.webp?url'
import IconHeart from '/img/elements/feedback/heart-eyes.webp?url'
import ImgStick from '/img/elements/feedback/thanks/stick.webp?url'
import ImgStar from '/img/elements/feedback/thanks/star.webp?url'
import {ref} from "vue";
import {useGlobalStore} from "../../store/global.ts";
import TheModal from "../UI/TheModal.vue";
import TheButton from "../UI/TheButton.vue";


const global = useGlobalStore();
const ratingFlag = ref<number | null>(null)
const arrowActive = ref(false)
const feedBackArray = ref([
  {
    id: 0,
    rating: 1,
    title: 'Плохо',
    icon: IconPensive,
  },
  {
    id: 1,
    rating: 2,
    title: 'Сойдет',
    icon: IconRolling,
  },
  {
    id: 2,
    rating: 3,
    title: 'Хорошо',
    icon: IconKiss,
  },
  {
    id: 3,
    rating: 4,
    title: 'Отлично',
    icon: IconHeart,
  },

])
defineProps({
  arrowActive: {
    type: Boolean,
    default: true
  },
})
</script>

<template>
  <div>
    <div @click="global.modalFeedback = true" @mouseenter="arrowActive = true" @mouseleave="arrowActive = false"
         class=" max-md:my-[64px] w-full relative rounded-xl cursor-pointer max-sm:text-center ">
      <div class="bg-feedbackGradient absolute h-full w-9/12 max-sm:w-full opacity-70 max-sm:opacity-90 rounded-l-[30px] rounded-r-[30px]"></div>
      <div class="flex items-center w-full h-[300px] rounded-[30px] relative max-sm:overflow-visible overflow-hidden">
        <img class="h-full w-[70%] max-sm:w-full scale-150 absolute left-0 opacity-5  max-sm:hidden rounded-[30px]" :src="ImgLeft" alt="">
        <img class="h-full absolute right-0 rounded-[30px] max-sm:hidden " :src="ImgRight" alt="">
        <div class="flex max-sm:flex-wrap max-sm:justify-center items-center w-full relative gap-x-20">
          <div class="text-white w-3/12 max-sm:w-full ml-10 flex justify-center flex-col ">
            <p class="text-3xl w-11/12 font-obold max-sm:text-[24px]">{{ $t('Оцените качество наших магазинов') }}</p>
            <p class="text-lg font-oregular mt-6 w-11/12 max-sm:text-[17px]">{{ $t('Нам важно мнение каждого') }}</p>
          </div>
          <div class="p-3 w-max bg-white h-max rounded-full max-sm:absolute max-sm:-bottom-20 max-sm:right-6 max-[366px]:-bottom-16 max-[366px]:right-4 ">
            <div class="rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer"
                 :class="{'-rotate-[25deg]' : arrowActive}">
              <svg class="rotate-180 fill-[#FE5000] max-sm:rotate-[160deg]" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.68473 7.33186C8.07526 6.94134 8.07526 6.30817 7.68473 5.91765C7.29421 5.52712 6.66105 5.52712 6.27052 5.91765L1.60492 10.5832C0.823873 11.3643 0.823872 12.6306 1.60492 13.4117L6.27336 18.0801C6.66388 18.4706 7.29705 18.4706 7.68757 18.0801C8.0781 17.6896 8.0781 17.0564 7.68757 16.6659L4.02154 12.9998L22 12.9998C22.5523 12.9998 23 12.5521 23 11.9998C23 11.4476 22.5523 10.9998 22 10.9998L4.01675 10.9998L7.68473 7.33186Z"/>
              </svg>
            </div>
          </div>
          <div class="flex flex-col h-full items-center w-2/12 gap-y-10 relative max-sm:static">
            <div class="absolute -rotate-[19deg] -top-32 right-10 max-sm:z-10 max-sm:-top-[110px] max-sm:-right-6">
              <img class="w-[100px] max-sm:[102px]" :src="IconHeart" alt="">
            </div>
            <div class="absolute rotate-[15deg] left-10 max-sm:-left-8 max-sm:-bottom-20">
              <img class="w-max max-sm:w-[83px]" :src="IconKiss" alt="">
            </div>
            <div class="absolute  max-sm:hidden -rotate-[13deg] top-[6rem] right-0">
              <img class="w-10/12 " :src="IconRolling" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <Transition>
      <TheModal :modal-class="`w-full`" v-if="global.modalFeedback"
                @showModal="global.modalFeedback = false; ratingFlag = null">
        <div class="flex justify-center w-full">
          <div @click="global.modalFeedback = false; ratingFlag = null"
               class="cursor-pointer p-2 h-max w-max flex justify-end ml-auto bg-[#F2F2F2] rounded-xl">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.279605 1.59539L13.4046 14.7204C13.5691 14.9013 13.7993 15 14.0625 15C14.5724 15 15 14.5724 15 14.0625C15 13.7993 14.9013 13.5691 14.7204 13.4046L1.59539 0.279604C1.43092 0.0986838 1.20066 0 0.9375 0C0.427632 0 0 0.427631 0 0.937499C0 1.20066 0.0986841 1.43092 0.279605 1.59539ZM13.4046 0.279604L0.279605 13.4046C0.0986841 13.5691 0 13.7993 0 14.0625C0 14.5724 0.427632 15 0.9375 15C1.20066 15 1.43092 14.9013 1.59539 14.7204L14.7204 1.59539C14.9013 1.43092 15 1.20066 15 0.937499C15 0.427631 14.5724 0 14.0625 0C13.7993 0 13.5691 0.0986838 13.4046 0.279604Z"
                fill="#FE5000"/>
              Z
            </svg>
          </div>
        </div>
        <div class="text-to font-obold text-3xl text-center">
          <h3>{{ $t('Оценка качества Baraka Market') }}</h3>
        </div>
        <div class="flex justify-center items-center gap-x-6 my-10 flex-wrap gap-y-4 max-sm:overflow-scroll h-[500px]">
          <div @click="ratingFlag = rating.id"
               :class="{'bg-orange-200 transition-all duration-200' : ratingFlag === rating.id, 'hover:bg-orange-200' : ratingFlag === rating.id}"
               class="py-6 bg-bgGray w-[191px] hover:bg-gray-200 transition-all cursor-pointer durtaion-200 mx-auto flex rounded-3xl flex-col items-center"
               v-for="rating in feedBackArray" :key="rating.id">
            <img class="w-[83px] h-[83px]" :src="rating.icon" alt="">
            <p class="mt-6 font-omedium text-xl">{{ $t(rating.title) }}</p>
          </div>
        </div>
        <TheButton @click="global.modalFeedback = false; global.modalFeedbackThanks = true" type="btnOrange"
                   class="mx-auto w-4/12 mb-10 max-sm:w-6/12 flex justify-center py-3">
          {{ $t('Голосовать') }}
        </TheButton>
      </TheModal>
      <TheModal v-else-if="global.modalFeedbackThanks" :modal-class="`w-[50%] max-lg:!w-full`"
                @showModal="global.modalFeedbackThanks = false;">
        <div class="flex justify-center">
          <div @click="global.modalFeedbackThanks = false"
               class="cursor-pointer p-3 h-max flex justify-end ml-auto bg-[#F2F2F2] rounded-xl">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.279605 1.59539L13.4046 14.7204C13.5691 14.9013 13.7993 15 14.0625 15C14.5724 15 15 14.5724 15 14.0625C15 13.7993 14.9013 13.5691 14.7204 13.4046L1.59539 0.279604C1.43092 0.0986838 1.20066 0 0.9375 0C0.427632 0 0 0.427631 0 0.937499C0 1.20066 0.0986841 1.43092 0.279605 1.59539ZM13.4046 0.279604L0.279605 13.4046C0.0986841 13.5691 0 13.7993 0 14.0625C0 14.5724 0.427632 15 0.9375 15C1.20066 15 1.43092 14.9013 1.59539 14.7204L14.7204 1.59539C14.9013 1.43092 15 1.20066 15 0.937499C15 0.427631 14.5724 0 14.0625 0C13.7993 0 13.5691 0.0986838 13.4046 0.279604Z"
                fill="#FE5000"/>
            </svg>
          </div>
        </div>
        <div>
          <div class="flex justify-center gap-x-5">
            <div class="w-max flex flex-col gap-y-28 top-0 -rotate-12">
              <img class="w-[30px] h-[42px]" :src="ImgStar" alt="">
              <img class="w-[30px] h-[42px]" :src="ImgStar" alt="">
            </div>
            <div class="">
              <img class="w-max" :src="ImgStick" alt="">
            </div>
            <div class="w-max flex flex-col gap-y-[5rem] top-0 rotate-6">
              <img class="w-[30px] h-[42px]" :src="ImgStar" alt="">
              <img class="w-[30px] h-[42px]" :src="ImgStar" alt="">
            </div>
          </div>
          <div class="flex flex-col gap-y-10 items-center text-center mt-6">
            <p class="text-to text-3xl font-obold">{{ $t('Спасибо!') }}</p>
            <p class="text-lg font-oregular w-8/12">{{ $t('Мы ценим мнение каждого нашего покупателя') }}</p>
          </div>
          <TheButton @click="global.modalFeedbackThanks = false" type="btnOrange"
                     class="w-6/12 py-2 mx-auto justify-center flex my-10">
            {{ $t('Закрыть') }}
          </TheButton>
        </div>
      </TheModal>
    </Transition>

  </div>
</template>

<style scoped>

</style>