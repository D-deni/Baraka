<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';
import IconUzb from '../../../public/img/elements/flags/uzb.svg?url'
import IconRu from '../../../public/img/elements/flags/ru.svg?url'
import {useI18n} from "vue-i18n";
import {useGlobalStore} from "../../store/global.ts";

interface Language {
  code: string;
  label: string;
  flag: string;
}
const globalStore = useGlobalStore()
const isOpen = ref(false);
const { locale } = useI18n();

const selectedLanguage = ref<Language>({
  code: 'RU',
  label: 'ру',
  flag: IconRu,
});

const languages = ref<Language[]>([
  {code: 'ru', label: 'ру', flag: IconRu},
  {code: 'uz', label: 'уз', flag: IconUzb},
]);


const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectLanguage = (lang: Language) => {
  selectedLanguage.value = lang;
  locale.value = lang.code;
  localStorage.setItem('language', lang.code.toLowerCase());
  isOpen.value = true;
};

watch(() => locale.value, (value) => {
  localStorage.setItem('language', value);
  globalStore.language = value;
});

onMounted(() => {
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    locale.value = savedLanguage;
    const selectedLang = languages.value.find(lang => lang.code === savedLanguage);
    if (selectedLang) {
      selectedLanguage.value = selectedLang;
    }
  }
});


</script>

<template>
  <div class="language-select !w-max" @click="toggleDropdown">
    <img :src="selectedLanguage.flag" alt="" class="w-[40px] cursor-pointer"/>
    <div v-if="isOpen" class="language-dropdown">
      <div
          v-for="lang in languages"
          :key="lang.code"
          class="language-item"
          @click="selectLanguage(lang)"
      >
        <img class="" :src="lang.flag" :alt="lang.code + 'Flag'" />
      </div>
    </div>
  </div>
</template>


<style scoped>
.language-select {
  position: relative;
  font-family: Arial, sans-serif;
}

.selected-language {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 5px;
}

.selected-language .flag {
  width: 30px;
  height: 30px;
  margin-right: 8px;
}


.language-dropdown {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  animation: dropdownAnimation 0.3s ease-out;
}

.language-item {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
}

.language-item:hover {
  background-color: #f4f4f4;
}

.language-item .flag {
  width: 18px;
  height: 13px;
  margin-right: 8px;
}

.language-item span {
  font-size: 14px;
}

@keyframes dropdownAnimation {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
