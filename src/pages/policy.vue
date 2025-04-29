<script setup lang="ts">
import Policy from "../components/offer/policy.vue";
import {computed} from "vue";
import {useI18n} from "vue-i18n";
import OfferFile from '../../public/files/Offer.pdf'
import OfferFileUzb from '../../public/files/Taklif.pdf'

const {locale, t} = useI18n();

const urlArray = computed(() => {
  const isRu = locale.value === 'ru';
  return [
    {
      id: 1,
      name: t("Оферта"),
      file: isRu ? OfferFile : OfferFileUzb,
      downloadName: isRu ? 'Оферта.pdf' : 'Taklif.pdf',
    }
  ];
});
</script>

<template>
<div class="container mx-auto">
  <Policy/>
  <div class="flex justify-center gap-x-10">
    <ul class="flex mb-10 justify-center gap-x-10 font-obold text-xl">
      <li v-for="item in urlArray">
        <a :href="item.file" class="text-to hover:text-orange-400 transition-all duration-200 hover:underline" to="" :download="item.downloadName">
          {{t(item.name)}}
        </a>
      </li>
    </ul>
  </div>
</div>
</template>

<style scoped>

</style>