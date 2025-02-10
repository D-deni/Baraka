<script setup lang="ts">
import ImgLogo from '/public/img/logo/logo.svg?skipsvgo'
import ImgLogoText from '/public/img/logo/logo-text.svg?skipsvgo'
defineProps({
  imgLeft: {
    type: String,
    default: '',
  },
  leftText: {
    type: String,
    default: ''
  },
  leftStepBlock: {
    type: Boolean,
  },
  leftStepBlockString: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="bg-bgGray max-lg:max-h-full mx-10 max-lg:mx-0 max-lg:ml-2 my-4 pt-10 px-10 pb-4 max-sm:p-6 h-screen max-md:h-full w-6/12 max-lg:w-8/12 max-[886px]:w-full max-[886px]:container max-[886px]:mx-auto max-md:my-0 max-sm:rounded-none rounded-3xl flex flex-col justify-between  max-[886px]:gap-y-4">
    <div class="flex gap-y-10 flex-col w-full">
      <RouterLink to="/" class="flex gap-x-4  items-center">
        <ImgLogo/>
        <ImgLogoText class="fill-to"/>
      </RouterLink>
      <div class="flex flex-col gap-y-6">
        <p class="w-6/12 max-xl:w-8/12 max-lg:w-full max-sm:text-xl text-[22px]">
          {{leftText}}
        </p>
        <div v-if="leftStepBlock" class="bg-white px-4 py-2 w-max rounded-lg text-to font-osemibold tracking-wide">
          <p>{{leftStepBlockString}}</p>
        </div>
      </div>
    </div>
    <div class="mx-auto">
      <img class="w-full" :src="imgLeft" alt="">
    </div>
    <div class="flex justify-center gap-x-6 max-lg:flex-col max-lg:items-center max-lg:gap-y-10 max-sm:text-center items-end mt-10">
      <RouterLink to="">{{ $t('Подробнее о программе лояльности') }}</RouterLink>
      <RouterLink to="">{{ $t('Политика конфиденциальности') }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>

</style>