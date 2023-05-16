<template>
  <div class="pinia__child">
    <h1>This is an piniaChild page</h1>

    <div>count: {{ countStore.state.count }}</div>
    <button @click="count">add</button>
  </div>
</template>

<script setup lang="ts">
// withDefaults 指定 props 的默认值
withDefaults(
  defineProps<{
    name: String
  }>(),
  {
    name: () => ''
  }
)
import { useCounterStore } from '@/stores/countStore'
const countStore = useCounterStore()
const count = () => countStore.add()
</script>

<style>
.pinia__child {
  border: 1px solid red;
  margin: 20px;
}
</style>
