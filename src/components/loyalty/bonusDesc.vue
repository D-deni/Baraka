<script setup lang="ts">
import LogoOrange from '/public/img/logo/logoOrange.svg?skipsvgo'
import LogoVector from '/public/img/logo/logoVector.svg?skipsvgo'
import ImgSeven from "/img/elements/loyalty/seven.png?url";
import TheTitle from "../UI/TheTitle.vue";
</script>

<template>
  <div>
    <div class="my-32 max-md:m-0 max-md:py-32 max-md:px-6 relative max-md:overflow-hidden">
      <div class="">
        <LogoOrange class="w-[146px] h-[146px] max-md:w-[95px] max-md:h-[95px] absolute -top-20 left-20 max-sm:left-0 max-sm:top-0 animate-spinLeftTop"/>
        <LogoVector class="w-[272px] h-[272px] max-md:w-[90px] max-md:h-[90px] absolute -bottom-14 left-0 max-sm:left-0 max-sm:bottom-20 animate-spinLeftBottom"/>
      </div>
      <div class="!w-[652px] max-md:!w-full mx-auto flex flex-col gap-y-10 relative z-10">
        <p class="text-center text-[32px] text-to font-obold max-md:text-2xl">{{ $t('Все просто: 1 бонусный балл = 1 сум') }}</p>
        <div class="bg-bgGray p-10 rounded-3xl  max-md:w-11/12 max-md:items-center mx-auto flex flex-col gap-y-10 font-oregular text-xl max-md:text-lg">
          <p>
            {{ $t('Бонусные баллы можно использовать для оплаты покупок в магазинах Baraka Market. Один бонусный балл равен одному суму. Вы можете потратить бонусные баллы на любую покупку, оплатив ими до 100 % от их стоимости') }}</p>
          <p>
            {{ $t('Чтобы узнать количество накопленных бонусных баллов, вы можете воспользоваться личным кабинетом, мобильным приложением или проверить чек') }}</p>
          <p>{{ $t(`Подробнее правила участия в программе лояльности можно посмотреть`) + ' ' }}
            <RouterLink class="text-to" to="">{{ $t('здесь,') + ' ' }}</RouterLink>
            {{ $t('а политику конфиденциальности') + ' ' }}
            <RouterLink class="text-to" to="">{{ $t('здесь') }}</RouterLink>
          </p>
        </div>
      </div>
      <div class="">
        <LogoVector class="w-[272px] h-[272px] max-md:w-[150px] max-md:h-[150px] absolute -top-20 right-0 max-sm:right-0 animate-spinRightTop"/>
        <LogoOrange class="w-[146px] h-[146px] absolute -bottom-14 right-32 max-sm:right-0 animate-spinRightBottom"/>
      </div>
    </div>
    <div class="container mx-auto px-6">
      <div class="flex relative z-20 py-20 max-lg:flex-col max-lg:gap-y-10">
        <div class="w-6/12 max-lg:w-full max-lg:text-center max-lg:mx-auto max-lg:items-center flex flex-col gap-y-10">
          <TheTitle class="">{{$t('Приветственные бонусы')}}</TheTitle>
          <div class="flex flex-col gap-y-6 text-[22px] w-8/12 max-lg:w-full">
            <p class="font-oregular">{{ $t('Когда вы получите и зарегистрируете карту через оператора, телеграмма, бота или сайт, вам сразу начислят 5 000 приветственных бонусных баллов, и вы сможете ими воспользоваться')}}</p>
            <p class="text-to font-omedium leading-[135%]">{{$t('За регистрацию карты через приложение “Baraka Club” Вы получаете 10 000 приветственных бонусных баллов!')}}</p>
          </div>
        </div>
        <div class="w-6/12 max-lg:w-full relative">
          <LogoVector class="absolute w-[146px] h-[146px] -top-14 left-6 flex justify-center mx-auto max-lg:hidden"></LogoVector>
          <img class="relative z-20 w-max mx-auto" :src="ImgSeven" alt="">
          <LogoVector class="absolute w-[146px] h-[146px] -bottom-12 right-6 flex justify-center mx-auto max-lg:hidden"></LogoVector>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

@keyframes spinOrange {
  0% {
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(180deg);
  }
}
</style>