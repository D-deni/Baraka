import {createApp} from 'vue'
import {createPinia} from "pinia";
import {createI18n} from "vue-i18n";
import { install } from "vue3-recaptcha-v2";
import { MotionPlugin } from '@vueuse/motion'
import VCalendar from 'v-calendar';
import Vue3Toastify, {type ToastContainerOptions} from "vue3-toastify";
import VueMask from '@devindex/vue-mask'
import './style.css'
import 'v-calendar/style.css';
import 'vue3-toastify/dist/index.css';
import App from './App.vue'
import router from "./router";
import {YandexMap} from "vue-yandex-maps";
import {defaultLocale, languages} from "./composables/lang";


const localeLocalStorage = localStorage.getItem("language");
const messages = Object.assign(languages)
const i18n = createI18n({
  legacy: false,
  locale: localeLocalStorage || defaultLocale,
  fallbackLocale: "ru",
  messages,
})
const app = createApp(App)
const settings = {
  apiKey: 'fc906a8f-366e-48a2-8be7-17e554ed7bd2',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(i18n)
app.use(VueMask)
app.use(VCalendar)
app.use(MotionPlugin)
app.use(Vue3Toastify, {
  autoClose: 2000,
} as ToastContainerOptions)
app.use(install, {
  sitekey: "6LfZCTIqAAAAADYploZtWx5aCajjebnriBeq4Yiz",
  cnDomains: false,
})
app.component('yandex-map', YandexMap)
app.use(YandexMap, settings)

app.mount('#app')
export default i18n.global.t
