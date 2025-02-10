import {defineStore} from "pinia";
import axios from "../composables/axios.ts";
type TProduct = {
  id: number;
  title: string;
  price: number;
  is_available: boolean;
  image_url: string;
  description: string;
  value: number,
  discount: {
    discount_type: string;
    id: number;
    is_active: boolean;
    start_date: string;
    title: string,
    value: number
  }
}

type TDiscount = {
  id: number;
  title: string;
  price: number;
  is_available: boolean;
  image_url: string;
  description: string;
  discount_type: string;
  value: number,
  products: [
    {
      category_id: number,
      description: string,
      id: number,
      image_url: string,
      is_available: boolean,
      price: number,
      title: string,
    }
  ]
}

export const useDiscountsStore = defineStore('useDiscounts', {
  state: () => ({
    discounts: [] as TDiscount[],
    products: [] as TProduct[],
    product: {} as TProduct,
    searchedArray: [] as any,
    newData: [] as any,
    filteredDiscounts: [] as any,
    totalCount: 1,
    hasMoreData: true
  }),
  getters: {
    get_searchedArray: (state) => state.searchedArray
  },
  actions: {

    async loadProducts(params: { page: number, limit: number }) {
      await axios.get(`products/?page=${params.page}&limit=${params.limit}`, {}).then(res => {
        this.products = res.data
      })
    },

    async loadProduct(params: { id: string | string[] }) {
      await axios.get(`products/${params.id}`, {})
        .then(res => {
          this.product = res.data
        })
    },

    async searchProducts(params: { query: string }) {
      await axios.post(`products/search/?query=${params.query}`, {
        query: params.query,
      }).then((res) => {
        this.searchedArray = res.data
      })
    },

    async loadDiscounts(params: { page: number, limit: number }) {
      await axios.get(`discount/?page=${params.page}&limit=${params.limit}`, {}).then(response => {
        this.discounts = response.data;
      })
    }
  }
})