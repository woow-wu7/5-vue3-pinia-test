<template>
  <div class="props">
    <h1>This is an Vue3.3.0 defineEmitsChild page</h1>
    <button @click="emitSomething">emit</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const emits = defineEmits<{
  emitsCallback: [count: number]
}>()

const state = reactive({ count: 1 })

const emitSomething = () => {
  emits('emitsCallback', state.count)
}
</script>
<style>
.props {
  border: 1px solid red;
  margin: 20px;
}
</style>
