<script setup lang="ts">
import Login from '/public/img/icons/others/login.svg?skipsvgo'

</script>

<template>
  <div class="pt-3 flex  items-center justify-end max-sm:flex-col max-lg:px-3 max-sm:gap-y-6 " >
    <button class="flex items-center gap-x-4 bg-white cursor-default rounded-lg max-sm:hidden">
      <span class="relative z-20 flex items-center cursor-default">
      <span class=" absolute w-full h-full top-0 left-0 right-0  font-oregular">{{$t('Скоро')}}</span>
        <span class="absolute bg-black w-full opacity-5  rounded-lg h-full -z-10 cursor-default"></span>
        <span class="flex items-center blur-sm ">
          <Login class="cursor-default"/>
          <RouterLink class="!cursor-default" :to="''">{{$t('Персональный кабинет')}}</RouterLink>
        </span>
      </span>
    </button>
  </div>
</template>

<style scoped>

</style>