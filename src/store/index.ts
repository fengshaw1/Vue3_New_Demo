import { defineStore } from "pinia";

export const useStore = defineStore('1', {
  state: () => {
    return {
      counter: 1
    }
  }
})

