<script setup lang="ts">

import Header from "../components/providers/header.vue";
import Attribute from "../components/providers/attribute.vue";
import ForProvider from "../components/providers/forProvider.vue";
import Contacts from "../components/reused/contacts.vue";
</script>

<template>
  <div>
    <div class="container mx-auto">
      <Header/>
    </div>
    <div class="bg-[#F7F6F9] my-[112px]">
      <div class="container mx-auto">
        <Attribute/>
      </div>
    </div>
    <div class="container mx-auto ">
      <ForProvider/>
    </div>
    <div class="container mx-auto my-[112px]">
      <Contacts :title-style="`!w-6/12`" is-email="supplier@barakamarket.uz" :vacancies-block-flag="true" :block-style="`overflow-hidden`">
        <template #title>
          {{$t('Просим вас направить заявку и презентацию (фотографии и описание) вашей компании, а также интересующие вопросы по адресу:')}}
        </template>
      </Contacts>
    </div>
  </div>
</template>

<style scoped>

</style>