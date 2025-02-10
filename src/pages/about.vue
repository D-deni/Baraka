<script setup lang="ts">

import Header from "../components/about/header.vue";
import Mission from "../components/about/mission.vue";
import Position from "../components/about/position.vue";
import Values from "../components/about/values.vue";
import Contacts from "../components/reused/contacts.vue";
</script>

<template>
  <div>
    <div class="container mx-auto">
      <div class="my-20">
        <Header/>
      </div>
    </div>
    <div class=" bg-[#F7F6F9] max-xl:h-max relative">
      <div class="relative overflow-hidden">
        <div class="absolute bottom-0 left-0 ">
          <svg width="485" height="650" viewBox="0 0 485 650" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="-152.384" cy="856.418" r="449.891" transform="rotate(-30 -152.384 856.418)" stroke="#EFEEF1" stroke-opacity="0.933333" stroke-width="32"/>
            <circle cx="-320.582" cy="613.528" r="449.891" transform="rotate(-30 -320.582 613.528)" stroke="#EFEEF1" stroke-opacity="0.933333" stroke-width="32"/>
          </svg>
        </div>
        <Mission/>
        <div class="absolute top-0 right-0">
          <svg width="722" height="650" viewBox="0 0 722 650" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="718.625" cy="86.1489" r="401.81" transform="rotate(-30 718.625 86.1489)" stroke="#EFEEF1" stroke-opacity="0.933333" stroke-width="28.5801"/>
            <circle cx="568.403" cy="-130.783" r="401.81" transform="rotate(-30 568.403 -130.783)" stroke="#EFEEF1" stroke-opacity="0.933333" stroke-width="28.5801"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="container mx-auto ">
      <Position/>
    </div>
    <div class="container mx-auto ">
      <Values/>
    </div>
    <div class="container mx-auto ">
      <Contacts :title-flag="true" :about-block-flag="true"/>
    </div>
  </div>
</template>

<style scoped>

</style>