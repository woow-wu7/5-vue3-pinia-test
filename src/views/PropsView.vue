<template>
  <div class="props">
    <h1>This is an Props page</h1>
    <p>props 响应式测试</p>

    <button @click="changeCount">改变父组件的state，不在子组件的props上</button>
    <span>count: {{ state.count }}</span>

    <button @click="changeCountToChild">
      改变父组件的state - 基本类型，传入子组件，在子组件的props上
    </button>
    <span>count: {{ state.count }}</span>

    <button @click="changeObjToChild">
      改变父组件的state - 引用类型，传入子组件，在子组件的props上
    </button>
    <span>count: {{ state.obj.count }}</span>

    <PropsChild :countToChild="state.countToChild" other="other" :obj="state.obj" />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import PropsChild from '../components/PropsChild.vue'

const state = reactive({
  count: 1,
  countToChild: 11,
  obj: {
    count: 111
  }
})

const changeCount = () => {
  state.count++
}
const changeCountToChild = () => {
  state.countToChild++
}

const changeObjToChild = () => {
  state.obj.count++
}
</script>
<style>
.props {
  border: 1px solid red;
  margin: 20px;
}
</style>
