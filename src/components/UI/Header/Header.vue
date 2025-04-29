<script setup lang="ts">
// import SubHeader from "./Elements/SubHeader.vue";
import HeaderNav from "./Elements/HeaderNav.vue";
import {useGlobalStore} from "../../../store/global.ts";

const global = useGlobalStore()
</script>

<template>
  <div class="bg-[#F7F6F9]" :class="{'bg-white' : $route.path === '/career'}">
    <div class="container mx-auto" :class="{'max-xl:blur-sm': global.showMenu}">
<!--      <SubHeader/>-->
    </div>
    <div class=" pb-[28px] mb-[32px]" :class="{'bg-white' : $route.path === '/career'}">
      <HeaderNav/>
    </div>
  </div>
</template>

<style scoped>

</style>