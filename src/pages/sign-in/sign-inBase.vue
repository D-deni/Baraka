<script setup lang="ts">
import TheTitle from "../../components/UI/TheTitle.vue";
import TheInput from "../../components/UI/TheInput.vue";
import {RecaptchaV2, useRecaptcha} from "vue3-recaptcha-v2";
import {ref} from "vue";
import TheButton from "../../components/UI/TheButton.vue";
import {useGlobalStore} from "../../store/global.ts";
import {useAuthStore} from "../../store/auth.ts";

const authStore = useAuthStore()

const password = ref()
const email = ref()
const inputTypeFlag = ref(false);
const {handleGetResponse} = useRecaptcha();
const global = useGlobalStore()
const handleWidgetId = (widgetId: number) => {
  console.log("Widget ID: ", widgetId);
  handleGetResponse(widgetId);
};

const handleLogin = () => {
  authStore.authorize({email: email.value, password: password.value})
  global.isAuth = true
  localStorage.setItem('isAuth', 'true')
}
</script>

<template>
  <div
    class="h-screen flex flex-col justify-center max-[886px]:justify-normal max-[886px]:my-20 max-md:h-max w-6/12 max-lg:w-8/12 max-md:w-full mx-auto">
    <TheTitle class="w-max mx-auto">{{ $t('Авторизация') }}</TheTitle>
    <div class="w-max mx-auto">
      <TheInput :input-t="'email'" :type="'text'" v-model="email"></TheInput>
      <!--      <TheInput :input-t="'number'" :type="'number'"></TheInput>-->
      <TheInput :input-t="'password'" :input-type="inputTypeFlag === false ? 'password' : 'text'" v-model="password"
                @passwordShow="inputTypeFlag = !inputTypeFlag"></TheInput>
    </div>
    <div
      class="mt-7 flex flex-col gap-y-6 w-8/12 max-xl:w-full max-lg:w-full max-[886px]:w-6/12 max-md:w-9/12 justify-center mx-auto">
      <TheButton class=" py-2.5 w-full" :type="'btnOrange'" @click="handleLogin">{{ $t('Войти') }}</TheButton>
      <RouterLink to="/sign-up" class=" w-full py-2.5 !bg-bgGray !text-to !rounded-lg text-center">{{
          $t('Регистрация')
        }}
      </RouterLink>
    </div>
    <div class="flex gap-x-3 mt-4 w-max justify-center mx-auto">
      <label for="check" class="flex gap-x-2 cursor-pointer">
        <input id="check" type="checkbox">
        <span>{{ $t('Запомнить меня') }}</span>
      </label>
      <button type="button" class="text-to hover:underline">{{ $t('Забыли пароль?') }}</button>
    </div>
    <div class="mt-6 w-max mx-auto ">
      <RecaptchaV2 @widget-id="handleWidgetId"/>
    </div>
  </div>
</template>

<style scoped>

</style>