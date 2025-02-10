<script setup lang="ts">
import LogoOrange from '/img/logo/logoOrange.png?url'
import ImgHeader from '/img/elements/loyalty/img.png?url'
import LogoVector from '/img/elements/vectors/vector-logo.png?url'
import TheButton from "../UI/TheButton.vue";
import {onMounted, ref} from "vue";

const buttonLink = ref('')

const getDeviceLink = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.includes('android')) {
    buttonLink.value = 'https://play.google.com/store/apps/details?id=ru.r.proc.smartkit.baraka&hl=en_GB&gl=UZ&pli=1';
  } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
    buttonLink.value = 'https://apps.apple.com/uz/app/baraka-market/id6472742783';
  } else {
    buttonLink.value = '#';
  }
};

onMounted(() => {
  getDeviceLink()
})
</script>

<template>
  <div class="flex justify-between  max-lg:flex-col max-lg:px-6 ">
    <div class="w-5/12 max-lg:w-full max-lg:mx-auto max-lg:items-center flex flex-col gap-y-6 mt-[28px]">
      <div class="flex items-start gap-x-4 ">
        <h1 class="text-to text-[64px] max-md:text-5xl max-sm:text-4xl max-[320px]:text-3xl mt-4 font-obold">Baraka club</h1>
        <img class="w-[57px] h-[57px]" :src="LogoOrange" alt="">
      </div>
      <div class="w-6/12 font-oregular max-md:w-8/12 max-md:text-center max-sm:w-full">
        <p>{{$t('Присоединяйтесь к программе лояльности Baraka Market и получайте кешбэк за покупки!')}}</p>
      </div>
      <div class="flex items-center gap-x-10">
        <a :href="buttonLink" class="w-7/12 max-lg:w-full">
          <TheButton class="py-3 w-full max-lg:px-20 rounded-xl" :type="'btnYellow'">
            {{$t('Скачать')}}
          </TheButton>
        </a>
        <div class="max-sm:hidden">
          <svg width="92" height="41" viewBox="0 0 92 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.73908 17.9682C10.1309 22.9652 18.6579 25.1833 27.0001 26.7894V26.8404C27.1803 26.8321 27.3535 26.8292 27.5186 26.8264C28.3695 26.8122 29.0051 26.8015 29.2705 26.0756C29.6318 25.0521 28.8723 24.4955 28.195 23.9992C28.13 23.9515 28.0657 23.9044 28.0033 23.8575C23.597 20.4631 18.6009 18.0891 13.584 15.7053C13.401 15.6183 13.2179 15.5313 13.0349 15.4443C12.6447 15.2593 12.1841 15.1093 11.7169 14.9572C10.4455 14.5432 9.12576 14.1136 9.04853 12.9203C8.97381 11.7657 10.1416 11.1856 11.2986 10.6109C11.7766 10.3734 12.2529 10.1368 12.6388 9.86096C13.2958 9.38515 13.9759 8.93359 14.6567 8.48155C16.4929 7.26234 18.3344 6.03968 19.7403 4.32858C20.5851 3.2833 20.9019 2.13604 19.9251 0.988782C19.1331 0.0709739 18.0771 -0.00548053 17.074 0.580897C15.8291 1.32324 14.5772 2.05543 13.3256 2.78748C9.71975 4.89641 6.11572 7.0043 2.68627 9.35103C-0.930439 11.824 -0.877629 15.4953 2.73908 17.9682Z" fill="#FFC600"/>
            <path d="M26.1392 13.9385C27.009 13.9332 27.8533 13.928 28.6632 13.9401V13.9656C47.9876 13.8382 60.7912 16.5151 73.9909 23.6536C80.2212 27.0444 86.0554 30.9196 87.8506 38.2875C88.0618 39.1799 88.4578 40.1741 89.6458 40.0722C90.913 39.9702 91.2562 38.8994 91.3617 37.8541C91.7049 34.0809 90.121 30.8941 87.877 27.9877C84.3659 23.4242 79.6668 20.1353 74.5981 17.3564C64.0648 11.5691 52.7131 8.38227 40.6222 7.79589C32.5968 7.41347 24.6505 8.40776 16.9155 10.6258C16.835 10.647 16.751 10.668 16.6651 10.6895C15.8213 10.9006 14.7821 11.1606 14.83 12.1555C14.8913 13.2613 15.7445 13.3118 16.5799 13.3613C16.8231 13.3757 17.0649 13.39 17.2851 13.4302C20.3032 13.9743 23.352 13.9556 26.1392 13.9385Z" fill="#FFC600"/>
          </svg>
        </div>
      </div>

    </div>
    <div class="w-7/12 relative max-lg:w-full max-lg:mx-auto max-lg:items-center max-lg:mt-10">
      <img class="w-max rounded-3xl relative z-10" :src="ImgHeader" alt="">
      <img class="absolute -left-16 bottom-0 " :src="LogoVector" alt="">
    </div>
  </div>
</template>

<style scoped>

</style>