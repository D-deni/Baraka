<script setup lang="ts">
import {onMounted} from "vue";
import {useNewsStore} from "../../store/news.ts";
import {useRoute} from "vue-router";
import TheTitle from "../../components/UI/TheTitle.vue";
import {globalUrl} from "../../composables/hooks.ts";

const newsStore = useNewsStore()
const route = useRoute()

onMounted(()=> {
  newsStore.loadCurrentNews({id: route.params.id})
})
</script>

<template>
  <div class="container mx-auto max-md:px-4">
    <div class="flex flex-col gap-y-10">
      <div>
        <TheTitle type="title">
          {{ newsStore.currentNews.title }}
        </TheTitle>
      </div>
      <div class="w-11/12 mx-auto">
        <img class="mx-auto" :src="globalUrl + newsStore.currentNews.image_url" alt="">
      </div>
      <div class="font-oregular text-[18px]">
        <span v-html="newsStore.currentNews.content"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>