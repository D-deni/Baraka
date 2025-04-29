import {defineStore} from "pinia";
import axios from "../composables/axios.ts";

type TShop = {
  id: number,
  address: string,
  address_uz: string,
  close_at: string,
  landmark: string,
  landmark_uz: string
  latitude: number,
  longitude: number,
  open_at: string,
  title: string
  title_uz: string,
}
export const useMapStore = defineStore("useMap", {
  state: () => ({
    shop: [] as TShop[],
    currentMarkerId: 0,
    setCenter: [] as any,
    center: []
  }),
  getters: {
    get_all_shop:(state) => state.shop
  },
  actions: {
    async loadAllShop(){
      await axios.get('shop/', {})
        .then((res: any) => {
          this.shop = res.data
          this.setCenter = [this.shop[0].latitude, this.shop[0].longitude]
        })
    }
  }
})