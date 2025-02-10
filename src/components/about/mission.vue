<script setup lang="ts">
import ImgOne from '/public/img/elements/about/oneVector.png?url'
import TheTitle from "../UI/TheTitle.vue";
</script>

<template>
  <div class="container mx-auto px-6 py-[112px]">
    <div class="flex items-center relative z-20  max-lg:flex-col max-lg:gap-y-10">
      <div class="w-7/12 max-lg:w-full max-lg:text-center max-lg:mx-auto max-lg:items-center flex flex-col gap-y-10">
        <TheTitle class="">{{$t('Наша миссия')}}</TheTitle>
        <div class="flex flex-col gap-y-4 text-[22px] w-8/12 max-lg:w-full">
          <p class="font-oregular">{{ $t('Улучшать качество жизни покупателей и экономить их время, обеспечивая оптимальный ассортимент необходимых продуктов с уверенностью в их качестве, в одном магазине, по честным ценам и с хорошим сервисом.')}}</p>
        </div>
      </div>
      <div class="w-max max-lg:w-full bg-white py-[55px] px-[65px] max-sm:py-[20px] max-sm:px-[20px]">
        <img :src="ImgOne" alt="" class="w-[538px] h-[426px] max-md:w-full max-md:h-full max-lg:mx-auto"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>