<script setup lang="ts">

import {onMounted, ref, watch} from "vue";
import TheTitle from "../UI/TheTitle.vue";
import {useMapStore} from "../../store/map.ts";

defineProps<{
  titleFlag?: boolean,
  mapStyle?: string
}>()

const emit = defineEmits(['focusMarker'])

const mapStore = useMapStore()
const currentMarkerId = ref<number | null>(null)
const loadMap = () => {
  let myMap: any
  ymaps.ready(function () {
    myMap = new ymaps.Map("map", {
      center: [41.31140, 69.280226],
      zoom: 12,
      controls: ['zoomControl', 'trafficControl', 'rulerControl'],
    });

    const shopCollection = new ymaps.GeoObjectCollection(null, {
      preset: 'islands#dotIcon',
      iconColor: '#FE5000'
    })
    const mapData = mapStore.shop?.map(e=> ({
      coords: [e.longitude, e.latitude],
      id: e.id,
    }))

    for (let i = 0; i < mapData.length; i++) {
      let placemark = new ymaps.Placemark(mapData[i].coords, {}, {
        preset: 'islands#dotIcon',
      });
      placemark.id = mapData[i].id;
      shopCollection.add(placemark)
    }

    let myGeoObject: any

    myMap.geoObjects.add(shopCollection)
    myMap.events.add('click', function (e: any) {
      if (!myMap.balloon.isOpen()) {
        let coords = e.get('coords')
        myGeoObject.value = new ymaps.GeoObject({
          geometry: {
            type: "Point",
            coordinates: [coords[0].toPrecision(6), coords[1].toPrecision(6)]
          },
        }, {
          preset: 'islands#blackStretchyIcon',
          draggable: false
        })

      } else {
        myMap.balloon.close()
      }
    })
  })
  watch(currentMarkerId, (newId: any) => {
    if (newId !== null && myMap) {
      const targetPlacemark = myMap.geoObjects.toArray().find((placemark: any) => placemark.id === newId)
      if(targetPlacemark) {
        myMap.setCenter(targetPlacemark.geometry.getCoordinates(), 16, {
          checkZoomRange: true
        })
      }
    }
  })
}

onMounted(async () => {
  await mapStore.loadAllShop()
  await loadMap()
})

</script>


<template>
  <div class="">
    <div class="container mx-auto">
      <TheTitle v-if="titleFlag">
        {{ $t('Адреса магазинов') }}
      </TheTitle>
    </div>
    <div
        class="w-full mt-[40px]"
        :class="mapStyle"
        id="map"
        style="height: 500px; width: 100%"
    ></div>
  </div>
</template>

<style>
.map-block {
  -moz-border-radius: 16px 16px 16px 16px; /* Firefox */
  -webkit-border-radius: 16px 16px 16px 16px; /* Safari, Chrome */
  -khtml-border-radius: 16px 16px 16px 16px; /* KHTML */
  border-radius: 16px 16px 16px 16px; /* CSS3 */
  overflow: hidden;
  position: relative;

}
</style>

