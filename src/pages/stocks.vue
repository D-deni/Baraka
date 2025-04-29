<script setup lang="ts">
import {onMounted, ref, nextTick, useTemplateRef, onUnmounted, watch} from "vue";
import { useStocksStore } from "../store/stocks.ts";
import Card from "../components/reused/UI/card.vue";
import { globalUrl } from "../composables/hooks.ts";
import {useGlobalStore} from "../store/global.ts";

const el = useTemplateRef<HTMLElement>("el");

const currentPage = ref(1);

const isLoading = ref(false);
const observerTarget = ref<HTMLElement | null>(null);

const globalStore = useGlobalStore()

const stocksStore = useStocksStore();

const loadMore = async (initialLoad = false) => {
  if (isLoading.value || !stocksStore.hasMoreData) return;
  isLoading.value = true;

  let nextPage = initialLoad ? 1 : currentPage.value + 1;
  console.log(`Загрузка страницы: ${nextPage}`);

  try {
    await stocksStore.loadAllStocks({ page: currentPage.value, limit: stocksStore.itemPerPage });

    if (stocksStore.stocks.length > 0) {
      const newItems = stocksStore.stocks.filter(
        (newItem) => !stocksStore.stocksArray.some((existingItem : any) => existingItem.id === newItem.id)
      )

      if(newItems.length > 0) {
        stocksStore.stocksArray.push(...stocksStore.stocks);
        currentPage.value++
      }
      if (stocksStore.stocks.length < stocksStore.itemPerPage) {
        console.log('Меньше товаров, чем лимит, останавливаем дальнейшую загрузку.');
        stocksStore.hasMoreData = false;
      }
    } else {
      stocksStore.hasMoreData = false;
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
      if (entries[0].isIntersecting && stocksStore.hasMoreData) {
        console.log("Наблюдатель сработал! Загружаем новую страницу...");
        loadMore();
      }
    },
    { rootMargin: "100px", threshold: 0.1 }
  );

  observer.observe(observerTarget.value);
};

onUnmounted(() => {
  stocksStore.stocksArray = []
  stocksStore.hasMoreData = true
})

onMounted(async () => {
  if(stocksStore.stocksArray.length === 0) {
    await loadMore(true);
  }
  nextTick(() => setupObserver());
});

watch(() => globalStore.language, () => {
  stocksStore.loadAllStocks({ page: currentPage.value, limit: stocksStore.itemPerPage});
    }
);
</script>

<template>
  <div class="container mx-auto">
    <div>
      <TransitionGroup name="fade" tag="div"
        class="grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:px-10 max-sm:px-4 gap-y-10 gap-x-4 w-full"
        ref="el"
      >
        <div v-for="(itemCard, index) in stocksStore.stocksArray" :key="itemCard?.id" :style="{ transitionDelay: index * 0.1 + 's' }">
          <Card
            card-block-style="hover:scale-105 rounded-[8px] w-full h-full shadow-lg transition-all duration-200"
            card-image-style="rounded-[8px] "
            card-title-style="px-4 py-3"
            :card-link-text="'stocks'"
            :card-image-flag="true"
            :card-title-flag="true"
            :card-description-flag="true"
            :card-price-flag="false"
            :card-link="itemCard?.id"
          >
            <template #cardImage>
              <img
                class="rounded-[8px] w-full mx-auto"
                :src="globalUrl + itemCard?.poster_url"
                alt=""
              />
            </template>
            <template #cardTitle>
              {{ globalStore.language !== 'ru' ? itemCard?.title_uz : itemCard?.title }}
            </template>
          </Card>
        </div>
      </TransitionGroup>
    </div>

    <div ref="observerTarget" class="h-10"></div>

    <div v-if="isLoading" class="text-center mt-4">
      <p>Загрузка...</p>
    </div>
  </div>
</template>

<style scoped>
</style>
