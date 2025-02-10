<script setup lang="ts">
import {useDiscountsStore} from "../../store/products.ts";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {globalUrl} from "../../composables/hooks.ts";

const productStore = useDiscountsStore()


const route = useRoute()

onMounted(() => {
  productStore.loadProduct({id: route.params.id})
})
</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center gap-x-[32px] max-lg: max-md:flex-col max-md:px-4 max-md:gap-y-10">
      <div class="py-[69px] px-[161px] max-lg:py-[39px] max-lg:px-[39px] border-2 rounded-[12px] max-md:mx-auto max-md:w-full">
        <img class="w-max mx-auto" :src="globalUrl + productStore.product.image_url" alt="">
      </div>
      <div class="flex flex-col gap-y-[24px]">
        <h1 class="font-obold text-[32px]">{{productStore.product.title}}</h1>
        <p class="font-oregular text-base text-[#6E6E6E]">{{$t('Наличие') + ': '}}<span :class="{'text-[#09A552]' : productStore.product.is_available, 'text-red-500' : !productStore.product.is_available}">{{ productStore.product.is_available === true ? $t('Есть в наличии') : $t('Нет в наличии')}}</span></p>
        <p class="flex gap-x-4 items-center max-sm:flex-col"><s class="font-oregular text-[20px] text-[#6E6E6E]"> {{ productStore.product.price + ' ' + $t('сум')}}</s><span class="font-obold text-to text-[32px]">{{productStore.product.discount?.discount_type !== 'percent' ? productStore.product.price - productStore.product.discount?.value : Math.round(productStore.product.price * (1 - productStore.product.discount?.value / 100))
        + ' ' +$t('сум')}}</span></p>
        <p class="font-oregular">{{productStore.product.description}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>