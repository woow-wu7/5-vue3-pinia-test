<template>
  <section>
    <h1>ref 测试</h1>

    <div>'state.a'{{ state.a }}</div>
    <div>'state.b'{{ state.b }}</div>
    <div>'state.c'{{ state.c }}</div>
    <div>'state'{{ state }}</div>
    <hr />
    <div>'state2' {{ state2 }}</div>

    <button @click="onChange">change - ref是对象时，修改对象的某个属性</button>
    <button @click="onChange2">change - ref是对象时，赋值属性相同但值不同的 新的对象</button>
    <button @click="onChange3">change - ref是对象时，赋值原始类型的值</button>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'

const state = ref({ a: 1, b: 20 }) // ref 可以是对象， ref 通过 reactive 实现
const state2 = ref(100)

const onChange = () => {
  state.value.a = state.value.a + 1
  state.value.b = state.value.b + 10
  state2.value = state2.value + 1
}

watch(
  state,
  (val, oldVal) => {
    console.log('val', val)
    console.log('oldVal', oldVal) // 111. ------- val 和 oldVal 不能做出区别
    // 注意: 整个对象一起 watch，val 和 oldValue 都是最新的 对象值
    // - 如果 我们要拿到具体的对象属性值的 前后变化，需要使用下面的方式，即 watch/state.value.a
  },
  {
    deep: true // 对象的观测需要添加 deep
  }
)

watch(
  () => state.value.a,
  (val, oldVal) => {
    console.log('val-a', val)
    console.log('oldVal-a', oldVal) // 111. ---- val 和 oldVal 可以做出区别
  },
  {
    deep: true // 对象的观测需要添加 deep
  }
)

watch(state2, (val, oldVal) => {
  console.log('val-a', val)
  console.log('oldVal-a', oldVal) // 111. ---- 当 ref 是基本类型的数据时，val 和 oldVal 可以做出区别
})

const onChange2 = () => {
  state.value = { a: 100, b: 2000, c: 3000 }
}

const onChange3 = () => {
  state.value = 111
}
</script>

<style scoped>
section {
  border: 1px solid red;
  padding: 20px;
}
</style>
