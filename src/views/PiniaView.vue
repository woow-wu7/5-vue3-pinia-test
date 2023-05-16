<template>
  <div class="pinia">
    <section>
      <h1>This is an pinia page</h1>

      <button @click="changeCount">pinia使用方式1: 直接访问和修改</button>
      <button @click="changeCount2">pinia使用方式1: 调用方法(action)</button>
      <button @click="changeCount3">pinia使用方式1: 调用 $patch</button>

      <div class="state">
        <div>count/直接读属性方式: {{ countStore.state.count }}</div>
        <div>count/toRefs方式: {{ count }}</div>
        <div>count/toRef方式: {{ count3 }}</div>
        <div>count/直接解构方式:(不响应) {{ countNotReactive }}</div>
        <div>count/解构方式-通过toRefs包装后再解构:(响应) {{ countNotReactive2 }}</div>
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

    <PiniaChild name="name" />
  </div>
</template>

<script setup lang="ts">
import { toRefs, toRef } from 'vue'
import { useCounterStore } from '@/stores/countStore'
import PiniaChild from '@/components/PiniaChild.vue'

const countStore = useCounterStore()

// AA
// 使用方式
// 1. 直接 访问 和 修改
const changeCount = () => {
  console.log('访问', countStore.state.count)
  console.log('修改', countStore.state.count++)
}
// 2. 调用 store 定义的 方法
const changeCount2 = () => countStore.add()
// 3. 调用 $patch 函数
const changeCount3 = () =>
  countStore.$patch({
    [countStore.state.count]: countStore.state.count++
  })

// BB
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

// CC
// store.$subscribe
countStore.$subscribe(() => {
  console.log('state变化后，执行 $subscribe()')
})

// DD
// 1. 直接解构不会 响应式
const { count: countNotReactive } = countStore.state

// 2. 通过 toRefs 包装后，会响应式
const { count: countNotReactive2 } = toRefs(countStore.state)

// 1. toRefs ===== 普通对象，对象的每个成员都是ref
// - 使用 toRefs 保持响应式
// - 将一个响应式对象转换为一个 ( 普通对象 )，这个普通对象的每个属性都是指向源对象相应属性的 ref。
// - 每个单独的 ref 都是使用 toRef() 创建的
// const { count } = toRefs(countStore.$state.state) // 这样获取state也是可以的
const { count } = toRefs(countStore.state)

// 1. toRef  ===== ref
// - 可以将值、refs 或 getters 规范化为 refs (3.3+)
// - 基于响应式对象上的一个属性，创建一个对应的 ref
// - 这样创建的 ref 与其源属性保持同步：改变源属性的值将更新 ref 的值，反之亦然
// ---- 通过 toRefs 将响应式对象转成普通对象后，就可以使用 ( 解构赋值了 )
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

button {
  display: block;
}
</style>
