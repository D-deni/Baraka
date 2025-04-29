<script setup lang="ts">

import TheTitle from "../components/UI/TheTitle.vue";
import ImgRental from '/public/img/elements/rental/rental.webp?url'
</script>

<template>
  <div class="container mx-auto px-6">
    <TheTitle>
      {{$t('Арендодателям')}}
    </TheTitle>
    <img :src="ImgRental" class="my-[5px] w-full" alt="rental"/>
    <div class="flex gap-y-10 flex-col">
      <p>{{$t('Сеть магазинов «Baraka Market» рассмотрит аренду помещений, зданий, для размещения торговых объектов в формате магазин у дома на территории РУз.')}}</p>
      <p>{{$t('Под продовольственный магазин формата у дома рассматриваются помещения площадью от 200 кв.м. до 400 кв.м')}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>