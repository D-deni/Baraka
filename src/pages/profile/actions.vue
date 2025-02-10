<script setup lang="ts">

import TheTitle from "../../components/UI/TheTitle.vue";
</script>

<template>
  <div class="container mx-auto p-10 my-10">
    <TheTitle>{{$t('Описание программы')}}</TheTitle>
    <p class="my-6">{{$t('Правила программы лояльности')}}</p>
    <div class="flex flex-col gap-y-4">
    </div>
  </div>
</template>

<style scoped>

</style>