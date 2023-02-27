import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const state = reactive({
      count: 1
    })

    const add = () => {
      state.count = state.count + 1
    }

    return { state, add }
  },
  {
    persist: true
    // 持久化设置
    // persistence 持久化 n noun
    // persist 坚持 v verb
  }
)
