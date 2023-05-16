import { reactive } from 'vue'
import { defineStore } from 'pinia'

interface IState {
  count: number
  data: Record<keyof any, any>
}

export const useCounterStore = defineStore(
  'counter',
  () => {
    // 这里不需要指定类型，因为会 类型推导
    // const state = reactive<IState>({
    //   count: 1,
    //   data: {}
    // })

    const state = reactive({
      count: 1,
      data: {}
    })

    const add = () => {
      state.count = state.count + 1
    }

    const getData = async () => {
      const data = await new Promise((resolve) =>
        setTimeout(() => {
          resolve({ name: `woow_wu${state.count}` })
        }, 2000)
      )
      state.data = data as IState['data']
    }

    return { state, add, getData }
  },
  {
    // persist: true
    // 持久化设置
    // persistence 持久化 n noun
    // persist 坚持 v verb
  }
)
