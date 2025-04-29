<script setup lang="ts">
import SwiperMain from "../components/main/swiperMain.vue";
import SwiperDiscount from "../components/main/swiperDiscount.vue";
import SwiperShares from "../components/main/swiperShares.vue";
import Feedback from "../components/main/feedback.vue";
import AppComponent from "../components/main/appComponent.vue";
import ImgVector from '/img/elements/mobile/elem.png?url'
import Map from "../components/reused/map.vue";
import FadeIn from "../components/UI/FadeIn.vue";


</script>

<template>
  <div class="overflow-hidden">
    <FadeIn class="max-sm:container mx-auto">
      <SwiperMain/>
    </FadeIn>
    <FadeIn class="">
      <div class=" my-[112px] max-sm:my-[64px] mx-auto max-w-[1800px] max-sm:container max-2xl:px-4 max-sm:px-0">
        <SwiperDiscount/>
      </div>
    </FadeIn>
    <div class="container mx-auto">
      <div class="my-20">
        <SwiperShares/>
      </div>
      <div class="my-20 max-sm:mx-4 min-h-[100%] ">
        <Feedback/>
      </div>
    </div>
    <div class="my-20 bg-[#F7F6F9] h-[605px] relative max-sm:my-[164px]">
      <div class="container mx-auto ">
        <AppComponent/>
      </div>
      <img class="absolute top-0 bottom-0 left-0 max-sm:bg-cover h-full" :src="ImgVector" alt="">
    </div>
    <div>
      <Map/>
    </div>
  </div>
</template>

<style scoped>

</style>