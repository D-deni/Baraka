<script setup lang="ts">
import {ref} from "vue";

const navArray = ref([
  {
    id: 0,
    name: 'О компании',
    url: '/about'
  },
  {
    id: 1,
    name: 'Наш подход / наши ценности',
    url: '/about'
  },
  {
    id: 2,
    name: 'Новости и акции',
    url: '/news'
  },
  {
    id: 3,
    name: 'Карьера',
    url: '/career'
  },
  {
    id: 4,
    name: 'Поставщикам',
    url: '/providers'
  },
  {
    id: 5,
    name: 'Программа лояльности',
    url: '/loyalty'
  },
  {
    id: 6,
    name: 'Арендодателям и собственникам',
    url: '/rental'
  },
  {
    id: 7,
    name: 'Рекламодателям',
    url: '/advertisers'
  },
  {
    id: 8,
    name: 'Наши контакты',
    url: '/contacts'
  },
])

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'})
}
</script>

<template>
  <div class="font-oregular" v-for="navItem in navArray" :key="navItem.id">
    <RouterLink :to="navItem.url" @click="scrollToTop">
      <p>{{navItem.name}}</p>
    </RouterLink>
  </div>
</template>

<style scoped>

</style>