<script setup lang="ts">
import Logo from '/public/img/logo/logo.svg?skipsvgo'
import LogoText from "/public/img/logo/logo-text.svg?skipsvgo";
import Navigation from "./Elements/Navigation.vue";
import Socials from "./Elements/Socials.vue";
import MailTo from "./Elements/MailTo.vue";
</script>

<template>
  <div class="container mx-auto my-20 max-sm:px-6 pt-6 border-t border-[#F2F2F2]">
    <div class="flex justify-between gap-x-7 max-lg:flex-wrap max-lg:gap-y-10 max-lg:gap-x-14 max-lg:justify-center">
      <div class="flex flex-col gap-y-10 w-3/12 max-lg:w-max max-lg:text-center">
        <RouterLink to="/" class="flex items-center gap-x-4 max-lg:justify-center">
          <Logo/>
          <LogoText class="fill-to"/>
        </RouterLink>
        <div>
          <p>www.barakamarket.uz</p>
          <p>{{new Date().toLocaleDateString().slice(6, 10)}} © {{$t('Официальный сайт сети «Baraka Market» ИП ООО «URBAN RETAIL»')}}</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-10">
        <Navigation/>
      </div>
      <div>
        <Socials/>
      </div>
      <div>
        <MailTo/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>