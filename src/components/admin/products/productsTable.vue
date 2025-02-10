<script setup lang="ts">
</script>

<template>
  <div class="bg-white w-full h-full mt-[24px] rounded-[12px]">
    <div class="px-4 h-[70px] border-b rounded-b-none rounded-xl flex justify-between items-center font-omedium text-[18px]">
        <p class="border-r  flex items-center pr-4">№</p>
        <p class=" border-r">{{ $t('Название товара') }}</p>
        <p class="border-r">{{ $t('Категория') }}</p>
        <p class="">{{ $t('Действие') }}</p>
        <select class="w-[290px] bg-gray-400">
          <option value="" disabled selected>
            {{ $t('Выбор категории товара') }}
          </option>
        </select>
    </div>
  </div>
</template>

<style scoped>

</style>