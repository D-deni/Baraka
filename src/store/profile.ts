import {defineStore} from "pinia";

export const useProfileStore = defineStore('profileStore', {
  state: () => ({
    currentDiscountStatus: 'Regular'
  })
})