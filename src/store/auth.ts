import {defineStore} from "pinia";
import axios from "../composables/axios.ts";
import {toast} from "vue3-toastify";
import router from "../router.ts";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: {}
  }),

  getters: {
    get_user: (state) => state.user
  },

  actions: {
    async authorize(params: {email: string, password: string}) {
      await axios.post(`auth/login/`, {
        email: params.email,
        password: params.password
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
    },

    async userRegister(params: {email: string, password: number | string[]}){
      await axios.post("auth/register/", {
        email: params.email,
        password: params.password
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }).then(res => {
        this.user = res.data
      })
    },

    async loadUser({}) {
      await axios.get("auth/get-users/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }).then(res => {
        this.user = res.data
        toast.success("Успешная авторизация", {autoClose: 1500, theme: 'auto'})
        router.push("/")
      }).catch(() => {
        toast.error('Что то пошло не так!', {autoClose: 1500, theme: 'auto'})
      })
    },

  }
})