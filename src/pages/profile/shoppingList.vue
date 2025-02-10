<script setup lang="ts">
import NavElements from "../../components/profile/navElements.vue";
import {ref} from "vue";
import BonusHistory from "../../components/profile/bonusHistory.vue";
import BuyHistory from "../../components/profile/buyHistory.vue";
import {useGlobalStore} from "../../store/global.ts";
import TheTitle from "../../components/UI/TheTitle.vue";

const global = useGlobalStore()
const array = ref([
  {
    id: 0,
    text: 'История покупок',
    flag: 'buyHistory'
  },
  {
    id: 1,
    text: 'Бонусные баллы',
    flag: 'bonusHistory'
  },

])
</script>

<template>
  <div class="container mx-auto h-fit">
    <TheTitle class="mt-10">
      {{$t('Мои покупки')}}
    </TheTitle>
    <nav-elements class="!mt-10" :nav-array="array"/>
    <Transition name="fade" mode="out-in">
      <BuyHistory v-if="global.currentComponent == 'buyHistory'"/>
      <BonusHistory v-else-if="global.currentComponent == 'bonusHistory'"/>
    </Transition>
  </div>
</template>

<style scoped>

</style>