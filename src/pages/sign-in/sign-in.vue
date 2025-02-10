<script setup lang="ts">
import Left from "../../components/sign-in/left.vue";
import ImgSignIn from '/img/elements/sign-in/sign-in.png?url'
import ImgSingUp from '/img/elements/sign-in/sign-up.png?url'
import ImgDate from '/img/elements/sign-in/date.png?url'
import {useRoute} from "vue-router";
import TheBreadcrumbs from "../../components/UI/TheBreadcrumbs.vue";
import {computed, ref, watch} from "vue";

const route = useRoute()

const links = ref([
  {
    id: 0,
    text: 'Главная',
    url: '/'
  },
  {
    id: 1,
    text: 'Авторизация',
    url: '/sign-in'
  },
  {
    id: 2,
    text: 'Регистрация',
    url: '/sign-up',
  },
  {
    id: 3,
    text: 'Ввод данных',
    url: '/sign-up/sign-upData'
  }
])

const currentPath = ref(window.location.pathname)

const filteredLinks = computed(()=> {
  if(currentPath.value === '/sign-in'){
    return links.value.filter(link => ['/', '/sign-in'].includes(link.url))
  } else if (currentPath.value === '/sign-up'){
    return links.value.filter(link => ['/', '/sign-in', '/sign-up'].includes(link.url));
  } else if (currentPath.value === '/sign-up/sign-upData'){
    return links.value.filter(link => ['/', '/sign-in', '/sign-up', '/sign-up/sign-upData'].includes(link.url));
  }
  return []
})

watch(
    () => route.path,
    (newPath) => {
      currentPath.value = newPath
    }
);


</script>

<template>
  <div class="flex justify-between relative max-[886px]:flex-col ">
    <Left :img-left="route.path === '/sign-in' ? ImgSignIn : route.path === '/sign-up' ? ImgSingUp : ImgDate"
          :left-text="route.path === '/sign-in' ? $t('Добро пожаловать в личный кабинет участника программы лояльности! Для дальнейшей работы войдите на сайт.') : route.path === '/sign-up' ? $t('Регистрация в личном кабинете') : $t('Регистрация в личном кабинете') "
          :left-step-block="route.path !== '/sign-in'"
          :left-step-block-string="route.path === '/sign-up' ? $t('Шаг №1 - Регистрация') : $t('Шаг №2 - Ввод данных')"
    />
    <div class="w-6/12 max-[886px]:w-full">
      <TheBreadcrumbs :links-array="links" :filtered-links="filteredLinks" />
      <RouterView>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>

</style>