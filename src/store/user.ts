import { defineStore } from "pinia";

interface State {
  firstName: string
  laseName: string
  num: number
}

// defineStore: 模块名 + 回调
export const useUserStore = defineStore('user', {
  state: (): State => ({
    firstName: 'xiao',
    laseName: 'feng',
    num: 0
  }),
  // 新版action、可直接定义操作(异步也可)
  // 无需借助mutation
  actions: {
    increment() {
      this.num ++
    },
    decrement() {
      this.num --
    }
  }, 
  // 像计算属性
  getters: {
    getFullName: (state) => state.firstName + ' ' + state.laseName
  }
})