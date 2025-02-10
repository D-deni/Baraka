<script setup lang="ts">
import {nextTick, onMounted, onUnmounted, ref} from 'vue';
import {useNewsStore} from '../store/news.ts';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import TheTitle from "../components/UI/TheTitle.vue";
import Card from "../components/reused/UI/card.vue";
import {globalUrl} from "../composables/hooks.ts";

const newsStore = useNewsStore();

const currentPage = ref(1); // Текущая страница
const isLoading = ref(false); // Флаг загрузки
const observerTarget = ref<HTMLElement | null>(null); // Элемент для наблюдателя

const loadMore = async (initialLoad = false) => {
  if (isLoading.value || !newsStore.hasMoreData) return;
  isLoading.value = true;

  let nextPage = initialLoad ? 1 : currentPage.value;
  console.log(`Загрузка страницы: ${nextPage}`);

  try {
    await newsStore.loadAllNews({ page: currentPage.value, limit: newsStore.itemPerPage });

    if (newsStore.news.length > 0) {
      const newItems = newsStore.news.filter(
        (newItem) => !newsStore.newsArray.some((existingItem : any) => existingItem.id === newItem.id)
      )

      if(newItems.length > 0) {
        newsStore.newsArray.push(...newsStore.news);
        currentPage.value++
      }
      if (newsStore.news.length < newsStore.itemPerPage) {
        newsStore.hasMoreData = false;
      }
    } else {
      newsStore.hasMoreData = false;
    }
  } catch (error) {
    console.error("Ошибка при загрузке скидок:", error);
  } finally {
    isLoading.value = false;
  }
};

let observer: IntersectionObserver | null = null;

const setupObserver = () => {
  if (observer) {
    observer.disconnect();
  }
  if (!observerTarget.value) return;

  observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting &&  newsStore.hasMoreData) {
        console.log("Наблюдатель сработал! Загружаем новую страницу...");
        loadMore();
      }
    },
    { rootMargin: "100px", threshold: 0.1 }
  );

  observer.observe(observerTarget.value);
};

onUnmounted(() => {
  newsStore.newsArray = []
  newsStore.hasMoreData = true
})

onMounted(async () => {
  if(newsStore.newsArray.length === 0) {
    await loadMore(true);
  }
  nextTick(() => setupObserver());
});



const getCardDescriptionStyle = (content: string) => {
  return content.length > 100 ? 'bg-gradient-to-b from-black to-white bg-clip-text text-transparent font-oregular text-[16px]' : 'text-black font-oregular text-[16px]';
};

const formatDate = (dateString: string) => {
  if(!dateString) return '';
  const date = new Date(dateString);

  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}

const cleanContent = (content: string | null) => {
  if (!content) return "";

  const cleaned = content
      .replace(/<(?!p\s|\/p)[^>]+>/gi, "")
      .replace(/&nbsp;/g, "")
      .trim();

  return cleaned.length > 0 ? cleaned : "";
};

</script>

<template>
  <div class="container mx-auto px-4">
    <div class="mb-4">
      <TheTitle>
        {{ $t('Новости') }}
      </TheTitle>
    </div>
    <TransitionGroup name="fade" tag="div" class="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:mx-auto max-sm:w-9/12 max[425px]:w-11/12 max-sm:justify-center gap-[30px] break-all ">
      <Card v-for="(item, index) in newsStore.newsArray" :key="item.id" :card-image-flag="true" :style="{ transitionDelay: index * 0.1 + 's' }"
            :card-percent-flag="false"
            :price-container-flag="false"
            :card-description-flag="true"
            :card-btn-flag="true"
            :card-title-flag="true"
            :card-discount-flag="false"
            :card-price-flag="false"
            :card-date-flag="true"
            :card-date-style="`mt-[16px] text-oregular text-[15px]`"
            :card-block-style="`justify-center  items-center rounded-xl`"
            :card-link-text="`news`"
            :card-description-style="getCardDescriptionStyle(item.content)"
            :card-title-style="`text-[22px] text-to mt-6 !font-omedium`"
            :card-image-style="`mx-auto`"
            :card-link="item?.id"
      >
        <template v-slot:cardImage>
          <img class="!rounded-lg h-[230px] w-full" :src="globalUrl + item.image_url" alt="news-image">
        </template>
        <template v-slot:cardTitle>
          {{ item?.title?.length > 30 ? item?.title?.slice(0,30) + '...' : item?.title }}
        </template>
        <template v-slot:cardDescription>
          <span v-if="cleanContent(item?.content)" v-html="cleanContent(item?.content)"></span>
        </template>
        <template #cardBtn>
          {{ $t('Читать полностью') }}
        </template>
        <template #cardDate>
          {{ formatDate(item?.created_at) }}
        </template>
      </Card>
    </TransitionGroup>

    <div ref="observerTarget" class="h-10"></div>
    <div v-if="isLoading" class="text-center mt-4">
      <p>Загрузка...</p>
    </div>
  </div>
</template>

<style>
.swiper-wrapper {
  flex-direction: row !important;
}

</style>