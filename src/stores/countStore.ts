import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const state = reactive({
    count: 1
  })

  const add = () => {
    state.count = state.count + 1
  }

  return { state, add }
})
