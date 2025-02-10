<script setup lang="ts">
import TheButton from "../../TheButton.vue";
import {ref} from "vue";
import {toast} from "vue3-toastify";
import {useGlobalStore} from "../../../../store/global.ts";
const email = ref('')

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const globalStore = useGlobalStore()

const handleSubmit = () => {
  if (!emailPattern.test(email.value)) {
    toast.error('Введите правильный email', { autoClose: 1500, theme: "auto" });
  } else {
    toast.success('Вы успешно подписались!', { autoClose: 1500, theme: "auto" });
    globalStore.createNewsLetter({email: email.value})
    email.value = '';
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-y-3">
    <div>
      <h3 class="text-xl font-osemibold">{{$t('Подпишитесь на рассылку')}}</h3>
      <p class="font-oregular text-[#AFAFAF]">{{$t('Новинки, акции, спецпредложения')}}</p>
    </div>
    <input class="pl-4 py-3 bg-[#F2F2F2] outline-none rounded-lg" type="text" placeholder="Введите ваш email" v-model="email">
    <TheButton class="py-3.5 w-full" type="btnYellow">{{ $t('Подписаться') }}</TheButton>
  </form>
</template>

<style scoped>

</style>