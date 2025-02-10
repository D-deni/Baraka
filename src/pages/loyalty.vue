<script setup lang="ts">

import Header from "../components/loyalty/header.vue";
import Quality from "../components/loyalty/quality.vue";
import Status from "../components/loyalty/status.vue";
import Tarrifs from "../components/loyalty/tarrifs.vue";
import Bonus from "../components/loyalty/bonus.vue";
import BonusDesc from "../components/loyalty/bonusDesc.vue";
import Birthday from "../components/loyalty/birthday.vue";
import Info from "../components/loyalty/info.vue";
import Feedback from "../components/loyalty/feedback.vue";

</script>

<template>
  <div class="overflow-hidden">
    <div class="container mx-auto">
      <div class=" mt-16">
        <Header/>
      </div>
      <div class="my-[112px]">
        <Quality/>
      </div>
    </div>
    <div class="bg-[#F7F6F9] max-xl:h-max relative">
     <div class="bg-[url('/img/elements/vectors/ellipses.png')] bg-no-repeat bg-right-top bg-contain max-lg:bg-cover">
       <Status/>
     </div>
    </div>
    <div class="container mx-auto my-[112px]">
      <Tarrifs/>
    </div>
    <div class=" bg-[#F7F6F9] max-xl:h-max relative">
      <div class="bg-[url('/img/elements/vectors/ellipses.png')] bg-no-repeat bg-right-top bg-contain max-lg:bg-cover">
        <Bonus/>
      </div>
    </div>
    <div class="container mx-auto relative">
      <BonusDesc/>
    </div>
    <div class="my-[112px] bg-[#F7F6F9] max-xl:h-max relative ">
      <div class="bg-[url('/img/elements/vectors/ellipsesTwo.png')] bg-no-repeat bg-right-top bg-[length:1300px_1000px] max-lg:bg-cover">
        <Birthday/>
      </div>
    </div>
    <div class="container mx-auto my-20">
      <Info/>
    </div>
    <div class="container mx-auto my-20">
      <Feedback/>
    </div>
  </div>
</template>

<style scoped>

</style>