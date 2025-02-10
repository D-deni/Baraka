import {defineStore} from "pinia";
import axios from "../composables/axios.ts";

type TVacancies = {
  id: number,
  title: string,
  address: string
}

type TCondition = {
  id: number,
  title: string,
  position: number
}

export const useCareer = defineStore('useVacancies', {


  state: () => ({
    vacancies: [] as TVacancies[],
    condition: [] as TCondition[]
  }),
  getters: {},
  actions: {
    async loadVacancies() {
      await axios.get(`vacancies/`, {

      }).then(res => {
        this.vacancies = res.data;
      })
    },
    async loadCondition() {
      await axios.get(`condition/`, {

      }).then(res => {
        this.condition = res.data;
      })
    }
  },
})