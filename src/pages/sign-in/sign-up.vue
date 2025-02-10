<script setup lang="ts">

import TheInput from "../../components/UI/TheInput.vue";
import TheButton from "../../components/UI/TheButton.vue";
import TheTitle from "../../components/UI/TheTitle.vue";
import TheModal from "../../components/UI/TheModal.vue";

import {toast} from "vue3-toastify";
import {onBeforeMount, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
const numberValue = ref<string>('')
const showModalCode = ref(false)
const inputs = ref<string[]>(['', '', '', '', ''])
const timerText = ref('')
const showResendButton = ref(false)
let countdownTimer: number | null = null

const startTimer = () => {
  let timeLeft = 5;
  showResendButton.value = false;
  countdownTimer = window.setInterval(() => {
    if(timeLeft > 0) {
      timerText.value = `Можно получить новый через ${timeLeft} сек`;
      timeLeft--
    } else {
      clearInterval(countdownTimer as number)
      timerText.value = '';
      showResendButton.value = true
    }
  }, 1000)
}

const restartTimer = () => {
  if(countdownTimer) {
    clearInterval(countdownTimer)
  }
  startTimer()
}


const onInput = (event: Event, index: number) => {
  const target = event.target as HTMLInputElement;
  if(/^\d$/.test(target.value)) {
    inputs.value[index] = target.value;
    if(index < inputs.value.length - 1) {
      const stepInput = (event.target as HTMLInputElement).nextElementSibling as HTMLInputElement
      stepInput?.focus()
    }
  } else {
    target.value = ''
  }
}

const onBackspace = (event: KeyboardEvent, index: number) => {
  if(event.key === 'Backspace' && !inputs.value[index] && index > 0) {
    const previousInput = (event.target as HTMLInputElement).previousElementSibling as HTMLInputElement
    previousInput?.focus()
  }
}

const onRight = (event: KeyboardEvent, _index: number) => {
  if(event.key === 'ArrowRight') {
    const nextInput = (event.target as HTMLInputElement).nextElementSibling as HTMLInputElement
    nextInput?.focus()
  }
}
const onLeft = (event: KeyboardEvent, _index: number) => {
  if(event.key === 'ArrowLeft') {
    const backInput = (event.target as HTMLInputElement).previousElementSibling as HTMLInputElement
    backInput?.focus()
  }
}

  const notify = () => {
  if(numberValue.value.length < 9) {
    toast('Введите номер телефона', {
      autoClose: 2000,
      type: 'error',
      theme: 'dark'
    })
  }
  if(numberValue.value.length === 9) {
    showModalCode.value = true;
    startTimer()
  }
}

const handleConfirm = () => {
  showModalCode.value = false;
  numberValue.value = ''
  inputs.value = ['', '', '', '', ''];
  if (countdownTimer) {
    clearInterval(countdownTimer)
  }
  router.push('/sign-up/sign-upData')
}


watch(numberValue, (newValue) => {
  numberValue.value = newValue.replace(/[^0-9]/g, "");
});


onBeforeMount(() => {
  if(countdownTimer) {
    clearInterval(countdownTimer)
  }
  numberValue.value = ''
  inputs.value = ['', '', '', '', '', '']
})

</script>

<template>
  <div class="flex mt-40 max-[886px]:my-20 max-md:px-10 flex-col mx-auto max-md:w-full justify-center">
    <div v-if="route.path !== '/sign-up/sign-upData'">
      <div class="text-start w-4/12 max-md:w-full mx-auto">
        <TheTitle>{{ $t('Регистрация') }}</TheTitle>
      </div>
      <div class="w-4/12 max-md:w-full mx-auto">
        <TheInput :input-t="'number'" type="number" v-model="numberValue"></TheInput>
      </div>
      <div class="mt-7 flex flex-col gap-y-6 mx-auto w-4/12 max-md:w-full">
        <TheButton class="py-2.5" :type="'btnOrange'" @click="notify">{{ $t('Подтвердить') }}</TheButton>
      </div>
      <Transition name="fade">
        <TheModal :modal-class="`w-6/12 max-xl:w-8/12 max-[886px]:w-full`" v-if="showModalCode && numberValue.length === 9" @showModal="showModalCode = false">
          <div class="flex justify-between">
            <div @click="showModalCode = false" class="p-4 cursor-pointer rounded-lg bg-bgGray">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.37305 8.75203L8.5423 13.9213C8.69102 14.07 8.76441 14.244 8.76248 14.4434C8.76056 14.6428 8.68204 14.82 8.5269 14.9751C8.37179 15.12 8.19615 15.195 8 15.2001C7.80385 15.2052 7.62822 15.1302 7.4731 14.9751L1.13273 8.63473C1.03914 8.54115 0.97312 8.44243 0.934653 8.33858C0.896186 8.23475 0.876953 8.12258 0.876953 8.00206C0.876953 7.88154 0.896186 7.76937 0.934653 7.66553C0.97312 7.56168 1.03914 7.46297 1.13273 7.36938L7.4731 1.02901C7.61155 0.890543 7.78302 0.81971 7.9875 0.81651C8.19199 0.81331 8.37179 0.884143 8.5269 1.02901C8.68204 1.18413 8.7596 1.36233 8.7596 1.56361C8.7596 1.76489 8.68204 1.94309 8.5269 2.09821L3.37305 7.25208L14.75 7.25208C14.9628 7.25208 15.141 7.32388 15.2846 7.46746C15.4282 7.61104 15.5 7.78924 15.5 8.00206C15.5 8.21488 15.4282 8.39308 15.2846 8.53666C15.141 8.68024 14.9628 8.75203 14.75 8.75203L3.37305 8.75203Z" fill="#FE5000"/>
              </svg>
            </div>
            <div @click="showModalCode = false" class="p-4 cursor-pointer rounded-lg bg-bgGray">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.279605 1.59539L13.4046 14.7204C13.5691 14.9013 13.7993 15 14.0625 15C14.5724 15 15 14.5724 15 14.0625C15 13.7993 14.9013 13.5691 14.7204 13.4046L1.59539 0.279604C1.43092 0.0986838 1.20066 0 0.9375 0C0.427632 0 0 0.427631 0 0.937499C0 1.20066 0.0986841 1.43092 0.279605 1.59539ZM13.4046 0.279604L0.279605 13.4046C0.0986841 13.5691 0 13.7993 0 14.0625C0 14.5724 0.427632 15 0.9375 15C1.20066 15 1.43092 14.9013 1.59539 14.7204L14.7204 1.59539C14.9013 1.43092 15 1.20066 15 0.937499C15 0.427631 14.5724 0 14.0625 0C13.7993 0 13.5691 0.0986838 13.4046 0.279604Z" fill="#FE5000"/>
              </svg>
            </div>
          </div>
          <div class="flex gap-y-6 flex-col px-14 py-10 max-sm:px-4">
            <TheTitle>{{$t('Введите код')}}</TheTitle>
            <div><p>{{$t('На указанный Вами номер телефона выслано SMS с проверочным кодом. Пожалуйста введите его ниже.')}}</p></div>
            <div class="w-full flex justify-center gap-x-4 max-sm:gap-x-2">
              <input v-for="index in 5" :key="index" v-model="inputs[index]" @input="onInput($event, index)" @keydown.right="onRight($event, index)" @keydown.left="onLeft($event, index)" @keydown.backspace="onBackspace($event, index)" maxlength="1" class="w-[50px] h-[50px] rounded-lg text-center bg-bgGray outline-none text-2xl font-obold" type="text">
            </div>
            <TheButton class="py-3" type="btnOrange" @click="handleConfirm">{{$t("Подтвердить")}}</TheButton>
          </div>
          <div class="text-center w-6/12 mx-auto">
            <p>{{timerText}}</p>
            <button class="cursor-pointer text-to hover:underline" @click="restartTimer" v-if="showResendButton">{{$t('Отправить еще раз')}}</button>
          </div>
        </TheModal>
      </Transition>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>
