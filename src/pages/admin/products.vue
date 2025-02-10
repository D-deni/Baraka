<script setup lang="ts">

import TheBlock from "../../components/admin/UI/TheBlock.vue";
import ProductsTable from "../../components/admin/products/productsTable.vue";
</script>

<template>
  <div class="w-full p-[32px]">
    <TheBlock  admin-url="products" admin-sub="add-product">
      <template #adminTitle>
        {{$t('Продукты')}}
      </template>
      <template #adminBtnDesc>
        {{$t('Добавить товар')}}
      </template>
      <template #adminContent>
        <products-table/>
      </template>
    </TheBlock>
  </div>
</template>

<style scoped>

</style>