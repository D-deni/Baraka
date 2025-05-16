<script setup lang="ts">
import {ref} from "vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n()
const navArray = ref([
  {
    id: 0,
    name: t('О компании'),
    url: '/about'
  },
  {
    id: 1,
    name: t('Наш подход / наши ценности'),
    url: '/about'
  },
  {
    id: 2,
    name: t('Новости и акции'),
    url: '/news'
  },
  {
    id: 3,
    name: t('Карьера'),
    url: '/career'
  },
  {
    id: 4,
    name: t('Поставщикам'),
    url: '/providers'
  },
  {
    id: 5,
    name: t('Программа лояльности'),
    url: '/loyalty'
  },
  {
    id: 6,
    name: t('Арендодателям и собственникам'),
    url: '/rental'
  },
  {
    id: 7,
    name: t('Рекламодателям'),
    url: '/advertisers'
  },
  {
    id: 8,
    name: t('Наши контакты'),
    url: '/contacts'
  },
  {
    id: 8,
    name: t('Политика'),
    url: '/policy'
  },
])

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
}
</script>

<template>
  <div class="font-oregular max-sm:text-[14px]" v-for="navItem in navArray" :key="navItem.id">
    <RouterLink :to="navItem.url" @click="scrollToTop">
      <p>{{t(navItem.name)}}</p>
    </RouterLink>
  </div>
</template>

<style scoped>

</style>