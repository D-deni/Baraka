<script setup lang="ts">
import {ref, watch, defineEmits} from "vue";

const emit = defineEmits()
const props = defineProps({
  modelValue: String,
  selectedValue: String,
  inputPlaceholderProfile: String,
  passwordStyleProfile: String,
  inputType: {
    type: String,
    default: ''
  },
  inputT: {
    type: String,
    default: ''
  },
  inputPlaceholder: {
    type: String,
    default: ''
  },
  passwordStyle: String
})
const mask = ref()
const password = ref()
const email = ref()
const selectedGender = ref<string | null>(null);

watch(() => props.modelValue, (newValue) => {
 emit('update:selectedValue', newValue)
});
</script>

<template>
<div class="">
  <label v-if="inputT === 'text'">
    <input :type="inputType" class="bg-[#F2F2F2] w-full outline-none border-none px-5" :placeholder="inputPlaceholder"/>
  </label>

  <label v-if="inputT === 'number'" class="relative flex bg-[#F2F2F2] rounded-lg items-center mt-6 " for="phoneInput">
    <span class="absolute top-0 pl-3 pr-3 py-3 text-[#6B6B6B] font-oregular">+998</span>
    <input @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" id="phoneInput" placeholder="_ _  _ _ _  _ _  _ _" :type="inputType" class="pl-14 bg-[#F2F2F2] rounded-lg outline-none border-none py-3 text-[#6B6B6B] font-oregular" name="phone" v-model="mask" v-mask="'00 000-00-00'">
  </label>

  <label v-if="inputT === 'password'" class="bg-[#F2F2F2] mt-6 outline-none border-none flex rounded-lg" :class="passwordStyle" for="passwordInput">
    <span class=" pl-2 py-3.5 font-oregular">
      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.231 6.35294V4.76471C10.231 3.01039 8.78449 1.58824 7.00019 1.58824C5.21588 1.58824 3.76942 3.01039 3.76942 4.76471V6.35294L10.231 6.35294ZM2.15403 4.76471V6.35294H1.07692C0.482155 6.35294 0 6.82699 0 7.41176V15.8823C0 17.0519 0.96431 18 2.15385 18H11.8462C13.0357 18 14 17.0519 14 15.8823V7.41176C14 6.82699 13.5178 6.35294 12.9231 6.35294H11.8463V4.76471C11.8463 2.13323 9.67664 0 7.00019 0C4.32373 0 2.15403 2.13323 2.15403 4.76471ZM1.61538 7.94117H2.15403V7.94118H11.8463L12.3846 7.94117V15.8823C12.3846 16.1747 12.1435 16.4118 11.8462 16.4118H2.15385C1.85646 16.4118 1.61538 16.1747 1.61538 15.8823V7.94117ZM7.00008 10.5882C6.70269 10.5882 6.46161 10.8293 6.46161 11.1267V13.2263C6.46161 13.5236 6.70269 13.7647 7.00008 13.7647C7.29746 13.7647 7.53854 13.5236 7.53854 13.2262V11.1267C7.53854 10.8293 7.29746 10.5882 7.00008 10.5882Z" fill="#6B6B6B"/>
      </svg>
    </span>
    <span class="relative flex justify-between max-xl:w-full">
      <input id="passwordInput" :placeholder="inputPlaceholder" :type="inputType" class="pl-3 px-10 bg-[#F2F2F2] rounded-lg w-max max-xl:w-full outline-none border-none py-3 text-[#6B6B6B] font-oregular"  name="phone" v-model="password">
      <span @click="$emit('passwordShow')" class=" absolute right-0 w-[30px] cursor-pointer pr-2 py-3 bg-[#F2F2F2] rounded-lg font-oregular">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.9614 11.7725C20.5386 7.7216 16.5357 5 12 5C7.46429 5 3.46143 7.7216 2.03857 11.7725C1.98714 11.9195 1.98714 12.0805 2.03857 12.2275C3.46143 16.2784 7.46429 19 12 19C16.5357 19 20.5386 16.2784 21.9614 12.2275C22.0129 12.0805 22.0129 11.9195 21.9614 11.7725ZM12 16.2C9.63643 16.2 7.71429 14.3163 7.71429 12C7.71429 9.6837 9.63643 7.8 12 7.8C14.3636 7.8 16.2857 9.6837 16.2857 12C16.2857 14.3163 14.3636 16.2 12 16.2Z" fill="#6B6B6B"/>
      </svg>
    </span>
    </span>
  </label>

  <label v-if="inputT === 'email'" class="bg-[#F2F2F2] mt-6 outline-none border-none flex rounded-lg" for="emailInput">
    <span class="relative flex justify-between max-xl:w-full">
      <input id="emailInput" :placeholder="inputPlaceholder" :type="inputType" class="pl-3 px-10 bg-[#F2F2F2] rounded-lg w-max max-xl:w-full outline-none border-none py-3 text-[#6B6B6B] font-oregular"  name="phone" v-model="email">
    </span>
  </label>

  <div v-if="inputT === 'passwordProfile'" class="flex max-md:flex-col max-md:gap-y-2 items-center gap-x-4">
    <label class="bg-[#F2F2F2]  outline-none border-none flex rounded-lg" :class="passwordStyleProfile" for="passwordInput">
    <span class=" pl-2 py-3.5 font-oregular">
      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.231 6.35294V4.76471C10.231 3.01039 8.78449 1.58824 7.00019 1.58824C5.21588 1.58824 3.76942 3.01039 3.76942 4.76471V6.35294L10.231 6.35294ZM2.15403 4.76471V6.35294H1.07692C0.482155 6.35294 0 6.82699 0 7.41176V15.8823C0 17.0519 0.96431 18 2.15385 18H11.8462C13.0357 18 14 17.0519 14 15.8823V7.41176C14 6.82699 13.5178 6.35294 12.9231 6.35294H11.8463V4.76471C11.8463 2.13323 9.67664 0 7.00019 0C4.32373 0 2.15403 2.13323 2.15403 4.76471ZM1.61538 7.94117H2.15403V7.94118H11.8463L12.3846 7.94117V15.8823C12.3846 16.1747 12.1435 16.4118 11.8462 16.4118H2.15385C1.85646 16.4118 1.61538 16.1747 1.61538 15.8823V7.94117ZM7.00008 10.5882C6.70269 10.5882 6.46161 10.8293 6.46161 11.1267V13.2263C6.46161 13.5236 6.70269 13.7647 7.00008 13.7647C7.29746 13.7647 7.53854 13.5236 7.53854 13.2262V11.1267C7.53854 10.8293 7.29746 10.5882 7.00008 10.5882Z" fill="#6B6B6B"/>
      </svg>
    </span>
      <span class="relative flex justify-between max-xl:w-full">
      <input id="passwordInput" :placeholder="inputPlaceholder" :type="inputType" class="pl-3 px-10 bg-[#F2F2F2] rounded-lg  max-xl:w-full outline-none border-none py-3 text-[#6B6B6B] font-oregular"  name="phone" v-model="password">
        <span @click="$emit('passwordShow')" class=" absolute right-0 w-[30px] cursor-pointer pr-2 py-3 bg-[#F2F2F2] rounded-lg font-oregular">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9614 11.7725C20.5386 7.7216 16.5357 5 12 5C7.46429 5 3.46143 7.7216 2.03857 11.7725C1.98714 11.9195 1.98714 12.0805 2.03857 12.2275C3.46143 16.2784 7.46429 19 12 19C16.5357 19 20.5386 16.2784 21.9614 12.2275C22.0129 12.0805 22.0129 11.9195 21.9614 11.7725ZM12 16.2C9.63643 16.2 7.71429 14.3163 7.71429 12C7.71429 9.6837 9.63643 7.8 12 7.8C14.3636 7.8 16.2857 9.6837 16.2857 12C16.2857 14.3163 14.3636 16.2 12 16.2Z" fill="#6B6B6B"/>
          </svg>
        </span>
      </span>
    </label>
    <button class="flex  items-center gap-x-4 bg-bgGray p-3 rounded-lg">
      {{$t('Изменить')}}
      <span>
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8.33228L10.6667 4.99895M1.08334 17.9156L3.90365 17.6023C4.24823 17.564 4.42051 17.5448 4.58155 17.4927C4.72442 17.4464 4.86038 17.3811 4.98575 17.2984C5.12706 17.2052 5.24963 17.0827 5.49478 16.8375L16.5 5.83228C17.4205 4.91181 17.4205 3.41942 16.5 2.49895C15.5796 1.57848 14.0872 1.57847 13.1667 2.49895L2.16145 13.5042C1.9163 13.7493 1.79372 13.8719 1.70054 14.0132C1.61787 14.1386 1.55252 14.2745 1.50627 14.4174C1.45414 14.5784 1.435 14.7507 1.39671 15.0953L1.08334 17.9156Z" stroke="#272727" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
  </div>

  <div v-if="inputT === 'textProfile'" class="flex items-center max-md:flex-col max-md:gap-y-2 gap-x-4">
    <label class="bg-[#F2F2F2]  outline-none border-none flex rounded-lg" :class="passwordStyleProfile" for="passwordInput">
      <input id="passwordInput" :placeholder="inputPlaceholder" :type="inputType" class=" px-10 w-max bg-[#F2F2F2] rounded-lg  max-xl:w-full outline-none border-none py-3 text-[#6B6B6B] font-oregular"  name="phone" v-model="password">
    </label>
    <button class="flex items-center gap-x-4 bg-bgGray p-3 rounded-lg">
      {{$t('Изменить')}}
      <span>
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 8.33228L10.6667 4.99895M1.08334 17.9156L3.90365 17.6023C4.24823 17.564 4.42051 17.5448 4.58155 17.4927C4.72442 17.4464 4.86038 17.3811 4.98575 17.2984C5.12706 17.2052 5.24963 17.0827 5.49478 16.8375L16.5 5.83228C17.4205 4.91181 17.4205 3.41942 16.5 2.49895C15.5796 1.57848 14.0872 1.57847 13.1667 2.49895L2.16145 13.5042C1.9163 13.7493 1.79372 13.8719 1.70054 14.0132C1.61787 14.1386 1.55252 14.2745 1.50627 14.4174C1.45414 14.5784 1.435 14.7507 1.39671 15.0953L1.08334 17.9156Z" stroke="#272727" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
  </div>
  <div v-if="inputT === 'gender'" class="flex gap-x-4 max-sm:flex-col max-sm:gap-y-4">
    <label class="flex gap-x-2 bg-bgGray py-2 px-4 rounded-xl" for="male">
      <input id="male" type="radio" v-model="selectedGender" value="male">
      <span>{{$t('Мужской')}}</span>
    </label>
    <label class="flex gap-x-2 bg-bgGray py-2 px-4 rounded-xl" for="female">
      <input id="female" type="radio" v-model="selectedGender" value="female">
      <span>{{$t('Женский')}}</span>
    </label>
  </div>
</div>
</template>

<style scoped>

</style>