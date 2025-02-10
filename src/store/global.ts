import {defineStore} from "pinia";
import axios from "../composables/axios.ts";


type TSocial = {
  id: number;
  title: string;
  url: string;
  is_available: boolean;
  image_url: string;
}

export const useGlobalStore = defineStore('globalStore', {
  state: () => ({
    modalFeedback: false,
    modalFeedbackThanks: false,
    isAuth: false,
    currentComponent: 'buyHistory',
    showMenu: false,
    showMenuProfile: false,
    showMenuProfileUser:false,
    newsletter: [],
    socials: [] as TSocial[],
  }),
  getters: {
    getIsAuth: (state) => state.isAuth,
    get_all_social: (state) => state.socials
  },
  actions: {
    async loadNewsLetters(params: { page: number, limit: number }) {
      await axios.get(`newsletter/?page=${params.page}&limit=${params.limit}`,{})
        .then(res => {
        this.newsletter = res.data
      })
    },
    async createNewsLetter(params: { email: any }) {
      await axios.post(`newsletter/`, params, {})
        .then(res => {
        this.newsletter = res.data
      })
    },
    async loadSocial() {
      await axios.get('social/', {

      }).then(res => {
        this.socials = res.data
      })
    }
  }
})