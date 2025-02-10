<script setup lang="ts">
import Header from "../components/UI/Header/Header.vue";
import Footer from "../components/UI/Footer/Footer.vue";
import {useGlobalStore} from "../store/global.ts";
import {onMounted, ref} from "vue";

const global = useGlobalStore()

const showScrollButton = ref(false)

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300
}
const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"})
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})
</script>

<template>
  <div>
    <Header/>
    <div :class="{'max-xl:blur-sm' : global.showMenu}">
      <Transition name="fade" mode="out-in">
        <RouterView></RouterView>
      </Transition>
      <Footer/>
    </div>
    <Transition name="fade">
      <button
        v-if="showScrollButton"
        @click="scrollToTop"
        class="fixed z-20 bottom-6 right-6 w-14 h-14 bg-orange-500 text-white rounded-full shadow-lg flex items-center justify-center transition-opacity duration-300 hover:bg-orange-600"
      >
        ▲
      </button>
    </Transition>
  </div>
</template>

<style scoped>

</style>