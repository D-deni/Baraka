<script setup lang="ts">
import {computed, nextTick, onMounted, ref, watch} from "vue";
import {useNewsStore} from "../../store/news.ts";
import {useRoute, useRouter} from "vue-router";
import TheTitle from "../../components/UI/TheTitle.vue";
import {globalUrl} from "../../composables/hooks.ts";
import TheBreadcrumbs from "../../components/UI/TheBreadcrumbs.vue";
import {useGlobalStore} from "../../store/global.ts";
import NewsSceleton from "../../components/UI/Sceletons/NewsSceleton.vue";

const newsStore = useNewsStore()
const route = useRoute()
const router = useRouter()
const globalStore = useGlobalStore()

const contentContainer = ref<HTMLElement | null>(null)


const addUnderlineToLinks = () => {
  if (contentContainer.value) {
    const links = contentContainer.value.querySelectorAll('a')
    links.forEach(link => {
      link.classList.add('underline')
      link.classList.add('text-to')
    })
  }
}
const htmlContent = computed(() =>
    globalStore.language !== 'ru'
        ? newsStore.currentNews.content_uz
        : newsStore.currentNews.content
)


watch(htmlContent, async (newVal) => {
  if (newVal) {
    await nextTick()
    addUnderlineToLinks()
  }
})

onMounted(() => {
  newsStore.loadCurrentNews({id: route.params.id, router: router})
})

onMounted(async ()=> {
  if (htmlContent.value) {
    await nextTick()
    addUnderlineToLinks()
  }
})
</script>

<template>
  <div class="container mx-auto max-md:px-4">
    <TheBreadcrumbs class="mb-10"/>
    <NewsSceleton v-if="!newsStore.currentNews.id"></NewsSceleton>
    <div v-else>
      <div class="flex flex-col gap-y-10">
        <div>
          <TheTitle type="title">
            {{globalStore.language !== 'ru' ? newsStore.currentNews.title_uz : newsStore.currentNews.title }}
          </TheTitle>
        </div>
        <div class="w-11/12 mx-auto">
          <img class="mx-auto" :src="globalUrl + newsStore.currentNews.image_url" alt="">
        </div>
        <div class="font-oregular text-[18px]" ref="contentContainer">
          <span v-html="htmlContent"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style >

</style>