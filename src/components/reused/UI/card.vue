<script setup lang="ts">
import {computed, ref, useSlots} from "vue";

type ICardStyles = { [key: string]: string } | string

const slots = useSlots()
defineProps<{
  cardImageStyle?: ICardStyles,
  cardTitleStyle?: ICardStyles,
  cardDescriptionStyle?: ICardStyles,
  cardPriceStyle?: ICardStyles,
  cardDiscountStyle?: ICardStyles,
  cardBlockStyle?: ICardStyles,
  cardLink?: ICardStyles | number,
  cardLinkText?: ICardStyles,
  cardPercentStyle?: ICardStyles,
  cardPriceDesign?: ICardStyles,
  cardPriceAndPercent?: ICardStyles,
  cardPriceDesignContainer?: ICardStyles,
  cardDateStyle?: ICardStyles,
  cardPercentFlag?: boolean
  cardImageFlag?: boolean,
  cardTitleFlag?: boolean,
  cardDateFlag?: boolean
  cardBtnFlag?: boolean,
  cardDescriptionFlag?: boolean,
  cardPriceFlag?: boolean,
  cardDiscountFlag?: boolean,
  priceContainerFlag?: boolean,
}>()


const svgStyles = computed(() => {
  if (!slots.cardDiscount) return { width: '90px', height: '90px' };

  const discountText = slots.cardDiscount()?.[0]?.children?.toString() || '';
  const fontSize = discountText.length <= 5 ? '90px' : '150px';
  const height = '90px';
  return {
    width: fontSize,
    height: height,
  };
})

const cardHover = ref(false)

</script>

<template>
  <div :class="cardBlockStyle" @mouseenter="cardHover = true" @mouseleave="cardHover = false">
    <RouterLink
        :to="`/${cardLinkText}/${cardLink}`"
        class="block w-full"
        aria-label="Подробнее"
    >
      <div v-if="cardImageFlag" :class="cardImageStyle">
        <div class="w-full"
             :class="{'!scale-120 transition-all duration-200' : cardHover, '!scale-95 transition-all duration-200': !cardHover}">
          <slot class="" name="cardImage"/>
        </div>
        <div :class="cardPriceDesignContainer" v-if="priceContainerFlag">
          <div :class="cardPriceDesign">
            <div class="">
              <svg class="fill-to relative" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1"
                   :style="svgStyles"
                   viewBox="0 0 955.28 955.24"
              >
                <defs class="fill-to"></defs>
                        <g id="Слой_x0020_1">
                  <metadata id="CorelCorpID_0Corel-Layer"/>
                          <path class="fil0"
                                d="M890.79 0l-486.46 0c-34.2,0 -67.01,13.59 -91.19,37.77l-275.35 275.38c-24.18,24.16 -37.79,56.97 -37.79,91.17l0 486.43c0,35.63 28.87,64.48 64.48,64.48l486.46 0c34.2,0 67.01,-13.59 91.19,-37.77l275.36 -275.36c24.19,-24.18 37.78,-56.97 37.78,-91.19l0 -486.44c0,-35.61 -28.88,-64.48 -64.49,-64.48z"/>
                </g>
              </svg>
              <p class="absolute z-10" v-if="cardDiscountFlag" :class="cardDiscountStyle">
                <slot name="cardDiscount"/>
              </p>
            </div>

          </div>
          <div :class="cardPriceAndPercent">
            <p v-if="cardPriceFlag" :class="cardPriceStyle">
              <slot name="cardPrice"/>
            </p>
          </div>
        </div>
      </div>
      <div class="">
        <div :class="{'text-to transition-all duration-200' : cardHover}">
          <h3 v-if="cardTitleFlag" :class="cardTitleStyle">
            <slot name="cardTitle"/>
          </h3>
        </div>
        <p v-if="cardDescriptionFlag" :class="cardDescriptionStyle">
          <slot name="cardDescription"/>
        </p>
        <button class="font-osemibold py-[14px] px-[30px] !rounded-[10px] mt-[16px]" v-if="cardBtnFlag"
                :class="{'bg-to transition-all duration-200 text-white' : cardHover === true, '!bg-[#F2F2F2] transition-all duration-200' : cardHover === false}">
          <slot name="cardBtn"></slot>
        </button>
        <div v-if="cardDateFlag" :class="cardDateStyle">
          <slot name="cardDate"></slot>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>

</style>