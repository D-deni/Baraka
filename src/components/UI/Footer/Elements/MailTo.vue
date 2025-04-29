<script setup lang="ts">
import TheButton from "../../TheButton.vue";
import { ref } from "vue";
import { toast } from "vue3-toastify";
import { useGlobalStore } from "../../../../store/global.ts";
import TheModal from "../../TheModal.vue";
import {useI18n} from "vue-i18n";
const email = ref('');
const {t} = useI18n()
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const globalStore = useGlobalStore();

const showModal = ref(false);

const handleSubmit = () => {
  if (!emailPattern.test(email.value)) {
    toast.error(t('Введите правильный email'), { autoClose: 2500, theme: "auto" });
  } else {
    showModal.value = true;
  }
};

const handleConfirmSubscription = () => {
  globalStore.createNewsLetter({ email: email.value });
  toast.success(t('Вы успешно подписались!'), { autoClose: 2500, theme: "auto" });
  email.value = '';
  showModal.value = false;
};
</script>

<template>
  <form @submit.prevent class="flex flex-col gap-y-3">
    <div>
      <h3 class="text-xl font-osemibold">{{$t('Подпишитесь на рассылку')}}</h3>
      <p class="font-oregular text-[#707070]">{{$t('Новинки, акции, спецпредложения')}}</p>
    </div>
    <input
        class="pl-4 py-3 bg-[#F2F2F2] outline-none rounded-lg"
        type="text"
        :placeholder="$t('Введите ваш email')"
        v-model="email"
    />
    <TheButton
        class="py-3.5 w-full"
        type="btnYellow"
        @click="handleSubmit"
    >
      {{ $t('Подписаться') }}
    </TheButton>
    <TheModal v-if="showModal" @showModal="showModal = false">
      <p class="text-center font-omedium text-xl">{{$t('Согласны ли вы подписаться на рассылку наших новинок, акций и спецпредложений')}}</p>
      <div class="flex items-center justify-center max-[400px]:flex-col max-[400px]:gap-y-4 gap-x-10 mt-10">
        <TheButton
            type="btnYellow"
            class="py-2 px-4"
            @click="handleConfirmSubscription"
        >
          {{$t('Да согласен')}}
        </TheButton>
        <TheButton
            type="btnYellow"
            class="py-2 px-4"
            @click="showModal = false; email = ''"
        >
          {{$t('Не согласен')}}
        </TheButton>
      </div>
    </TheModal>
  </form>
</template>

<style scoped>

</style>