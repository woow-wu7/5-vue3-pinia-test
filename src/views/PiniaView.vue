<template>
  <div class="pinia">
    <section>
      <h1>This is an pinia page</h1>

      <div class="state">
        <div>count/取属性方式: {{ countStore.state.count }}</div>
        <div>count/toRefs方式: {{ count }}</div>
        <div>count/toRef方式: {{ count3 }}</div>
        <div>count/直接解构方式 {{ countNotReactive }}</div>
        <button @click="add">add</button>
        <button @click="reset">reset</button>
        <br />
        <button @click="getAll">获取 toRefs/object.ref 和 toRef/ref</button>
      </div>

      <div class="data">
        <button @click="getData">action/异步获取远程数据</button>
        <div>data: {{ countStore.state.data }}</div>
      </div>
    </section>

    <PiniaChild />
  </div>
</template>

<script setup lang="ts">
import { toRefs, toRef } from 'vue'
import { useCounterStore } from '@/stores/countStore'
import PiniaChild from '@/components/PiniaChild.vue'

const countStore = useCounterStore()

// store.$onAction
countStore.$onAction(({ after, onError }) => {
  // 你可以在这里创建所有钩子之间的共享变量，
  // 同时设置侦听器并清理它们。
  console.log('每个action调用时，执行 $onAction()')
  after((resolvedValue) => {
    // 可以用来清理副作用
    // `resolvedValue` 是 action 返回的值，
    // 如果是一个 Promise，它将是已经 resolved 的值
  })
  onError((error) => {
    // 可以用于向上传递错误
  })
})

// store.$subscribe
countStore.$subscribe(() => {
  console.log('state变化后，执行 $subscribe()')
})

// 1. 直接解构不会 响应式
const { count: countNotReactive } = countStore.state

// 1. toRefs ===== 普通对象，对象的每个成员都是ref
// - 使用 toRefs 保持响应式
// - 将一个响应式对象转换为一个 ( 普通对象 )，这个普通对象的每个属性都是指向源对象相应属性的 ref。
// - 每个单独的 ref 都是使用 toRef() 创建的
// const { count } = toRefs(countStore.$state.state) // 这样获取state也是可以的
const { count } = toRefs(countStore.state)

// 1. toRef  ===== ref
// - 基于响应式对象上的一个属性，创建一个对应的 ref
// - 这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然
const count3 = toRef(countStore.state, 'count')

const add = () => countStore.add()
const reset = () => countStore.$reset() // 这里是通过插件重写的 $reset() 方法

const getAll = () => {
  console.log('count.value', count.value)
  console.log('count3.value', count3.value)
}

const getData = async () => await countStore.getData()
</script>

<style>
.pinia {
  border: 1px solid red;
  padding: 20px;
}
</style>
