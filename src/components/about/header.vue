<script setup lang="ts">
import TheTitle from "../UI/TheTitle.vue";
import ImgOne from '/img/elements/about/one.webp?url'
import ImgTwo from "/img/elements/about/two.webp?url";
import ImgThree from '/img/elements/about/three.webp?url'
import VectorLogo from '/public/img/logo/logoVector.svg?skipsvgo'
</script>

<template>
  <div class="max-sm:px-4">
    <TheTitle>{{ $t('О нас') }}</TheTitle>
    <div class="max-md:px-6 mt-8 ">
      <p class="mb-4 text-xl">{{$t('«Baraka Market» - сеть розничных магазинов товаров народного потребления.')}}</p>
      <div class="flex gap-x-6 w-[700px] h-[400px] max-2xl:h-max max-2xl:flex-wrap max-lg:w-full justify-center mx-auto gap-y-10 items-center">
        <img class="rounded-xl max-lg:w-max h-full" :src="ImgOne" alt="">
        <img class="rounded-xl max-lg:w-max h-full" :src="ImgTwo" alt="">
        <img class="rounded-xl max-lg:w-max h-full !order-2"  :src="ImgThree" alt="">
      </div>
    </div>
    <div class="relative my-20 max-md:px-6 max-2xl:overflow-hidden">
      <VectorLogo class="absolute -right-0 max-lg:right-0 max-md:left-0 max-md:-top-20"/>
      <div class="bg-bgGray p-[42px] w-7/12 max-lg:w-9/12 max-md:w-full mx-auto z-10 relative rounded-xl">
        <div class="flex flex-col gap-y-6">
          <h3 class="text-[22px] font-omedium">{{$t('Так в чем же особенности магазинов Baraka market?')}}</h3>
          <div class="text-[17px] font-oregular">
            <p>{{$t('- Ассортимент в любое время. Посещая магазин, потребители могут быть уверены, первое, что необходимые товары всегда в наличии и, второе, их качество и свежесть гарантированы проверенными поставщиками, с которыми сотрудничает компания.')}}</p>
            <p>{{$t('- Это честные цены. В торговых точках специалисты отдела оперативной аналитики ведут постоянный и серьезный контроль за ценообразованием.')}}</p>
          </div>
          <p class="text-[17px] font-oregular">{{$t('- Внимательный и заботливый персонал, который точно станет для Вас новым другом, а также атмосферный интерьер. Всё для того, чтобы каждый посетитель чувствовал себя комфортно. К слову, цвета для магазина были выбраны из тёплой палитры – оранжевый и жёлтый, так как в концепцию бренда было заложено доброе и яркое солнце Узбекистана. А это символ, дарящий изобилие и благополучие. Отсюда и зародилось название «Барака» и идея создания гостеприимного и солнечного магазина, который всегда рядом.')}}</p>
        </div>
        <div class="flex flex-col gap-y-6 mt-10">
          <h3 class="text-[22px] font-omedium">{{$t('А теперь главный вопрос кто же стоит за созданием Baraka market?')}}</h3>
          <p class="text-[17px] font-oregular">{{$t('Реализацией столь масштабного проекта занимается уникальная команда ТОП-менеджеров экспатов с международным опытом, к слову, у каждого из которых более 10 лет работы в сфере розничной торговли. Вся работа специалистов нацелена на реализацию миссии компании - улучшать качество жизни покупателей и экономить их время, обеспечивая оптимальный ассортимент необходимых продуктов с уверенностью в их качестве, в одном магазине, по честным ценам и с хорошим сервисом.')}}</p>
        </div>
      </div>
      <VectorLogo class=" -left-20 bottom-0 max-md:-bottom-20"/>
    </div>
  </div>
</template>

<style scoped>

</style>