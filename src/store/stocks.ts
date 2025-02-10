import {defineStore} from "pinia";
import axios from "../composables/axios.ts";


type TStock = {
  id: number
  title: string,
  image_url: string,
  image?: string,
  poster_url?: string,
  content: string,
  start_date: string,
  end_date: string,
}

export const useStocksStore = defineStore('useStocks', {
  state: () => ({
    stocks: [] as TStock[],
    stocksArray: [] as any,
    stock: {} as TStock,
    itemPerPage: 10,
    hasMoreData: true,
  }),
  getters: {
    get_all_stocks: (state) => state.stocks
  },
  actions: {
    async loadAllStocks(params: {page: number, limit: number}) {
      await axios.get(`promotion/?page=${params.page}&limit=${params.limit}`, {})
        .then(res=> {
          this.stocks = res.data
        })
    },
    async loadCurrentStock(params: {id: any}) {
      await axios.get(`promotion/${params.id}`, {})
        .then(res=> {
          this.stock = res.data
        })
    }
  }
})