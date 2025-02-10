<script setup lang="ts">
import TheInput from "../../components/UI/TheInput.vue";
import TheButton from "../../components/UI/TheButton.vue";
import TheTitle from "../../components/UI/TheTitle.vue";
import {DatePicker } from 'v-calendar';
import {ref} from "vue";
import 'v-calendar/style.css';

const gender = ref('')
const date = ref(new Date())
const today = ref(new Date())
</script>

<template>
  <form @submit.prevent class="w-8/12 max-xl:w-11/12 mx-auto">
    <TheTitle>{{ $t('Ввод данных') }}</TheTitle>
    <div class="flex max-lg:flex-col gap-x-10 gap-y-7 pb-10 border-b-2">
      <div class="flex flex-col gap-x-10 max-xl:flex-col max-xl:gap-y-6">
        <div>
          <p>{{ $t('Фамилия') }}</p>
          <TheInput class="mt-2 py-2 rounded-lg bg-bgGray" input-t="text" input-type="text"></TheInput>
        </div>
        <div>
          <p>{{ $t('Имя') }}</p>
          <TheInput class="mt-2 py-2 rounded-lg bg-bgGray" input-t="text" input-type="text"></TheInput>
        </div>
        <div class="">
          <p>{{ $t('Отчество') }}</p>
          <TheInput class="mt-2 py-2 rounded-lg bg-bgGray" input-t="text" input-type="text"></TheInput>
        </div>
      </div>
      <div class="flex flex-col gap-y-10">
        <div>
          <p>{{ $t('Дата рождения') }}</p>
          <DatePicker v-model="date" :max-date="today" min-date="01.01.1900">
            <template #default="{ inputValue, inputEvents }">
              <input class="mt-2 px-4 py-2 rounded-lg bg-bgGray" :value="inputValue" v-on="inputEvents" disabled/>
            </template>
          </DatePicker>
        </div>
        <div class="text-center">
          <p>{{ $t('Пол') }}</p>
          <div class="gap-x-4 flex max-xl:justify-center">
            <label class="flex gap-x-2" for="male"><input id="male" type="radio" v-model="gender" value="male">{{ $t('Мужской') }}</label>
            <label class="flex gap-x-2" for="female"><input id="female" type="radio" v-model="gender" value="female">{{ $t('Женский') }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 flex max-xl:flex-col gap-x-10">
      <div class="flex flex-col gap-y-6">
        <div>
          <p>{{ $t('Пароль') }}</p>
          <TheInput class="!mt-0" input-t="password" input-placeholder="" :password-style="`!mt-2`"
                    input-type="password"></TheInput>
        </div>
        <div>
          <p>{{ $t('Повторный пароль') }}</p>
          <TheInput class="!mt-0" input-t="password" input-placeholder="" :password-style="`!mt-2`"
                    input-type="password"></TheInput>
        </div>
      </div>
      <div>
        <p>
          <span class="text-red-500">*</span>{{ $t(' Пожалуйста, введите пароль, состоящий из 8 символов, без пробелов и специальных символов.')}}
        </p>
      </div>
    </div>
    <div class="flex gap-x-10 mt-10">
      <div class="flex w-6/12 max-xl:w-full">
        <TheButton type="btnOrange" class="py-2 w-full">{{ $t('Зарегестрироваться') }}</TheButton>
      </div>
      <div class="w-6/12 max-xl:hidden"/>
    </div>
  </form>
</template>

<style scoped>

</style>