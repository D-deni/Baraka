import {defineStore} from "pinia";
import axios from "../composables/axios.ts";

type TNews = {
  id: number,
  content?: any,
  title: string,
  image_url: string
  created_at: string
  image?: string
}

export const useNewsStore = defineStore('newsStore', {
  state: () => ({
    news: [] as TNews[],
    newsArray: [] as TNews[],
    currentNews: {} as TNews,
    totalCount: 0,
    itemPerPage: 10,
    hasMoreData: true,
  }),
  getters: {
    get_all_news: (state) => state.news,
    get_current_news: (state) => state.currentNews
  },
  actions: {
    async loadAllNews(params: { page: number, limit: number }) {
      await axios.get(`news/?page=${params.page}&limit=${params.limit}`, {})
        .then(response => {
          this.news = response.data
        })
    },

    async loadCurrentNews(params: { id: string | string[] }) {
      await axios.get(`news/${params.id}`, {})
        .then(response => {
          this.currentNews = response.data
        })
    }
  },
})