<template>
    <div ref="mapContainer" id="map-placeholder">
      <span v-if="!mapLoaded">Карта загружается...</span>
    </div>
</template>

<script setup lang="ts">
import {onMounted, onBeforeUnmount, ref, watch} from "vue";
import { useMapStore } from "../../store/map.ts";
import {useI18n} from "vue-i18n";
import {useGlobalStore} from "../../store/global.ts";

const mapStore = useMapStore();
const mapLoaded = ref(false);
const mapContainer = ref<HTMLElement | null>(null);

const {t} = useI18n()
const globalStore = useGlobalStore()
let myMap: any = null;

const loadScript = () => {
  if (document.getElementById("yandex-maps-script")) return;

  const script = document.createElement("script");
  script.id = "yandex-maps-script";
  script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=fc906a8f-366e-48a2-8be7-17e554ed7bd2";
  script.async = true;
  script.onload = () => {
    mapLoaded.value = true;
    initMap();
  };
  document.body.appendChild(script);
};

const initMap = async () => {
  await mapStore.loadAllShop();
  ymaps.ready(() => {
     myMap = new ymaps.Map(mapContainer.value!, {
      center: [41.31140, 69.280226],
      zoom: 12,
      controls: ["zoomControl", "trafficControl", "rulerControl"]
    });

    const shopCollection = new ymaps.GeoObjectCollection(null, {
      preset: "islands#dotIcon",
      iconColor: "#FE5000"
    });

    const mapData = mapStore.shop?.map(e => ({
      coords: [e.longitude, e.latitude],
      id: e.id,
      address: e.address,
      address_uz: e.address_uz,
      title: e.title,
      title_uz: e.title_uz,
      landmark_uz: e.landmark_uz,
      landmark: e.landmark,
      close_at: e.close_at,
      open_at: e.open_at
    }));

    mapData?.forEach(item => {
      let placemark = new ymaps.Placemark(item.coords, {}, { preset: "islands#dotIcon" });
      placemark.id = item.id;

      placemark.events.add("click", () => {
        // openLocationInNewWindow(item.coords);
        showLocationInfo({coords: item?.coords, address: item?.address, address_uz: item?.address_uz, title_uz: item?.title_uz, title: item?.title, close_at: item?.close_at, open_at: item?.open_at, landmark: item?.landmark, landmark_uz: item?.landmark_uz});
      });

      shopCollection.add(placemark);
    });

    myMap.geoObjects.add(shopCollection);
  });
};

const showLocationInfo = (location: {coords: any, title: string, title_uz: string, address: string, address_uz: string, close_at: any, open_at: any, landmark: string, landmark_uz: string}) => {
  const balloonContent = `
     <div>
      <div class="custom-container">
        <h3>${location.title}</h3>
        <p><strong>${t('Адрес')}:</strong> ${ globalStore.language !== 'ru' ? location.address_uz : location.address}</p>
        <p><strong>${t('Режим работы')}:</strong> ${location.open_at} - ${location.close_at}</p>
        <p><strong>${t('Ориентир')}:</strong> ${globalStore.language !== 'ru' ? location.landmark_uz : location.landmark}</p>
      </div>
      <button id="open-in-new" class="custom-btn">${t('Перейти')}</button>
    </div>
  `;
  console.log(location)

  myMap.balloon.open(location.coords, balloonContent);

  const openNew = document.getElementById("open-in-new")
  if(openNew) {
    openNew.addEventListener("click", () => {
    })
  }
  setTimeout(() => {
    const openNew = document.getElementById("open-in-new");
    if (openNew) {
      openNew.addEventListener("click", (event) => {
        event.stopPropagation();
        openLocationInNewWindow(location.coords);
      });
    }
  }, 100);
};

const openLocationInNewWindow = (coords: number[]) => {
  const url = `https://yandex.ru/maps/?ll=${coords[1]},${coords[0]}&mode=search&pt=${coords[1]},${coords[0]}&sll=${coords[1]},${coords[0]}&text=${coords[0]},${coords[1]}&z=16.04`;
  window.open(url, "_blank");
};



const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting && !mapLoaded.value) {
    loadScript();
    observer.disconnect();
  }
}, { threshold: 0.1 });

watch(() => mapStore.center, (newCoords: any) => {
    myMap.setCenter(newCoords, 16, { checkZoomRange: true });
});

onMounted(() => {
  if (mapContainer.value) {
    observer.observe(mapContainer.value);
  } else {
    const interval = setInterval(() => {
      if (mapContainer.value) {
        observer.observe(mapContainer.value);
        clearInterval(interval);
      }
    }, 100);
  }
});

onBeforeUnmount(() => {
  mapLoaded.value = false;
  const script = document.getElementById("yandex-maps-script");
  if (script) {
    document.body.removeChild(script);
  }
});
</script>

<style >
#map-placeholder {
  width: 100%;
  height: 500px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.custom-btn {
  background-color: #FE5000;
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 10px auto 0 auto;
  text-align: center;
  padding: 6px 15px;
  display: flex;
  justify-items: center;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.custom-btn:hover {
  background-color: #e04000;
}

.custom-btn:focus {
  outline: none;
}
.custom-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
