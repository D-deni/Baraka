<script setup lang="ts">
import {onMounted, onUnmounted, ref} from "vue";
import TheTitle from "../components/UI/TheTitle.vue";
import Map from "../components/reused/map.vue";
import {useMapStore} from "../store/map.ts";

const mapStore = useMapStore()

const hoverCard = ref<number | null>(null)
const mapContainer = ref<HTMLElement | null>(null);
const map = ref<HTMLElement | null>(null);
const isFixed = ref(false);
const isStuck = ref(false);
const isMobile = ref(false);
const mapLeft = ref('auto'); // Будем вычислять левую позицию


const checkScreenSize = () => {
  isMobile.value = window.innerWidth <= 1280;
};

const focusOnMarker = (id: number) => {
  hoverCard.value = id;
  mapStore.currentMarkerId = id; // Обновляем ID в store
};

const handleScroll = () => {
  if (!mapContainer.value || !map.value || isMobile.value) return;

  const rect = mapContainer.value.getBoundingClientRect();
  const mapHeight = map.value.offsetHeight;

  if (rect.top <= 10 && rect.bottom > map.value.clientHeight) {
    isFixed.value = true;
    isStuck.value = false;
    mapLeft.value = `${mapContainer.value.getBoundingClientRect().left}px`
  } else if (rect.bottom <= mapHeight + 10) {
    isFixed.value = false;
    isStuck.value = true;
  } else {
    isFixed.value = false;
    isStuck.value = false;
  }
};

onMounted(() => {
  checkScreenSize();
  window.addEventListener("resize", checkScreenSize);
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenSize);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="container mx-auto max-md:px-4 relative">
    <div class="flex max-xl:flex-wrap gap-x-10">
      <div class="w-full">
        <TheTitle>
          {{ $t('Адреса магазинов') }}
        </TheTitle>
        <div class="flex flex-col gap-y-6 mt-5">
          <div
              class="cursor-pointer flex max-sm:flex-col gap-x-4 bg-[#F2F2F2] p-6 relative rounded-xl overflow-hidden h-max"
              @mouseenter.prevent="hoverCard = item.id" @mouseleave.prevent="hoverCard = null"
              v-for="item in mapStore.shop" :key="item.id" @click="focusOnMarker(item.id)">
            <div class="bg-white p-4 rounded-2xl z-20 relative text-center">
              <div class="flex justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M20.1667 11C20.1667 16.06 16.06 20.1666 11 20.1666C5.94 20.1666 1.83333 16.06 1.83333 11C1.83333 5.93998 5.94 1.83331 11 1.83331C16.06 1.83331 20.1667 5.93998 20.1667 11Z"
                      stroke="#FE5000" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.4008 13.915L11.5592 12.2192C11.0642 11.9258 10.6608 11.22 10.6608 10.6425V6.88416"
                        stroke="#FE5000" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <p>{{ $t('Режим работы' + ':') }}</p>
              <div class="mt-3">
                <p>{{ item.open_at?.slice(0, 5) + ' - ' + item.close_at?.slice(0, 5) }}</p>
                <p>{{ $t('(без выходных)') }}</p>
              </div>
            </div>
            <div class="flex flex-col max-sm:w-10/12  max-sm:mt-4 gap-y-5">
              <div class="flex items-center max-md:flex-wrap gap-x-2 z-20 relative">
                <div>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 12.3118C12.5795 12.3118 13.86 11.0313 13.86 9.4518C13.86 7.87226 12.5795 6.5918 11 6.5918C9.42048 6.5918 8.14001 7.87226 8.14001 9.4518C8.14001 11.0313 9.42048 12.3118 11 12.3118Z"
                        stroke="#FE5000" stroke-width="1.375"/>
                    <path
                        d="M3.31823 7.78315C5.12406 -0.15518 16.8849 -0.146013 18.6816 7.79232C19.7357 12.449 16.8391 16.3907 14.2999 18.829C12.4574 20.6073 9.5424 20.6073 7.69073 18.829C5.16073 16.3907 2.26406 12.4398 3.31823 7.78315Z"
                        stroke="#FE5000" stroke-width="1.375"/>
                  </svg>
                </div>
                <p class="w-10/12">{{ $t('Адрес:') }} <span>{{ item.address }}</span></p>
              </div>
              <div class="flex items-center gap-x-2 z-20 relative">
                <div>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20.1667 8.24999V13.75C20.1667 16.0417 19.7083 17.6458 18.6817 18.6817L12.8333 12.8333L19.9192 5.7475C20.0842 6.47166 20.1667 7.29666 20.1667 8.24999Z"
                        stroke="#FE5000" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M19.9192 5.74748L5.74749 19.9191C2.98833 19.2866 1.83334 17.38 1.83334 13.75V8.24998C1.83334 3.66665 3.66667 1.83331 8.25 1.83331H13.75C17.38 1.83331 19.2867 2.98832 19.9192 5.74748Z"
                        stroke="#FE5000" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M18.6817 18.6817C17.6458 19.7083 16.0417 20.1666 13.75 20.1666H8.25C7.29667 20.1666 6.47166 20.0841 5.74749 19.9191L12.8333 12.8333L18.6817 18.6817Z"
                        stroke="#FE5000" stroke-width="1.375" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M5.71999 7.31497C6.34332 4.62914 10.3767 4.62914 11 7.31497C11.3575 8.89164 10.3675 10.23 9.49665 11.055C8.86415 11.66 7.865 11.66 7.22334 11.055C6.3525 10.23 5.35332 8.89164 5.71999 7.31497Z"
                        stroke="#FE5000" stroke-width="1.375"/>
                    <path d="M8.33672 7.975H8.34495" stroke="#FE5000" stroke-width="1.83333" stroke-linecap="round"
                          stroke-linejoin="round"/>
                  </svg>
                </div>
                <p class="flex gap-x-4 w-9/12">
                  <span>{{ $t('Ориентир:') }} {{ item.landmark }}</span>

                </p>
              </div>
            </div>
            <div class="max-sm:hidden">
              <div
                  class="bg-[#E8E8E8] rounded-[99px] flex items-center pl-4 w-[180px] absolute  -right-32 h-full top-0 transition-all duration-200"
                  :class="{'bg-to transition-all duration-400 !rounded-[90px] scale-125' : hoverCard === item.id}">
              </div>
              <div class="absolute top-0 bottom-0 flex items-center right-2 transition-all duration-200"
                   :class="{'right-[20px] transition-all duration-200' : hoverCard === item.id}">
                <svg class="stroke-black transition-all duration-200"
                     :class="{'stroke-white transition-all duration-200 !scale-100' : hoverCard == item.id}" width="24"
                     height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M12 19.5C16.1421 19.5 19.5 16.1421 19.5 12C19.5 7.85786 16.1421 4.5 12 4.5C7.85786 4.5 4.5 7.85786 4.5 12C4.5 16.1421 7.85786 19.5 12 19.5Z"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 4V2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M4 12H2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 20V22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20 12H22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-10/12 max-xl:w-full max-lg:w-full" ref="mapContainer">
        <div>
          <TheTitle class="text-[22px] font-omedium">
            {{ $t('Мы на карте') }}
          </TheTitle>
           <Transition name="fade" mode="out-in">
             <div
                 ref="map"
                 class="mt-5 "
                 :class="{'fixed max-lg:static top-5': isFixed && !isMobile, 'absolute max-lg:static bottom-0': isStuck && !isMobile }"
                 :style="{
                  left: isFixed && !isMobile ? mapLeft : 'auto',
                  width: isFixed && !isMobile ? `${mapContainer?.offsetWidth}px` : '100%',
                }"
             >
               <Map :map-style="`map-block shadow-mapShadow`" @focusMarker="focusOnMarker"/>
             </div>
           </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>