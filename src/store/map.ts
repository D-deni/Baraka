import {defineStore} from "pinia";
import axios from "../composables/axios.ts";

type TShop = {
  id: number,
  address: string,
  close_at: string,
  landmark: string,
  latitude: number,
  longitude: number,
  open_at: string,
  title: string
}
export const useMapStore = defineStore("useMap", {
  state: () => ({
    shop: [] as TShop[],
    currentMarkerId: 0
  }),
  getters: {
    get_all_shop:(state) => state.shop
  },
  actions: {
    async loadAllShop(){
      await axios.get('shop/', {})
        .then((res: any) => {
          this.shop = res.data
        })
    }
  }
})