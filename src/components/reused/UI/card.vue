 <script setup lang="ts">
  import {ref} from "vue";

type ICardStyles = {[key: string]: string} | string
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

const cardHover = ref(false)

</script>

<template>
  <div :class="cardBlockStyle" @mouseenter="cardHover = true" @mouseleave="cardHover = false">
    <RouterLink :to="`/${cardLinkText}/${cardLink}`">
      <div v-if="cardImageFlag" :class="cardImageStyle">
        <div :class="{'!scale-120 transition-all duration-200' : cardHover === true, '!scale-95 transition-all duration-200': cardHover === false}">
          <slot class="" name="cardImage"/>
        </div>
        <div :class="cardPriceDesignContainer" v-if="priceContainerFlag">
          <div :class="cardPriceDesign">
            <p v-if="cardDiscountFlag" :class="cardDiscountStyle">
              <slot name="cardDiscount"/>
            </p>
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
          <h3 v-if="cardTitleFlag" :class="cardTitleStyle" >
            <slot name="cardTitle" />
          </h3>
        </div>
        <p v-if="cardDescriptionFlag" :class="cardDescriptionStyle">
          <slot name="cardDescription"/>
        </p>
        <button class="font-osemibold py-[14px] px-[30px] !rounded-[10px] mt-[16px]" v-if="cardBtnFlag" :class="{'bg-to transition-all duration-200 text-white' : cardHover === true, '!bg-[#F2F2F2] transition-all duration-200' : cardHover === false}">
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