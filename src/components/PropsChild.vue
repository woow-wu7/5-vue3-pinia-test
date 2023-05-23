<template>
  <div class="props-child">
    <h1>This is an PropsChild page</h1>

    <div>computed: {{ aa }}</div>
    <div>props: {{ countToChild }}</div>
    <div>props: {{ obj?.count }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, onUpdated, watch } from 'vue'

const props = defineProps({
  countToChild: Number,
  other: String,
  obj: Object
})

const aa = computed(() => {
  const { countToChild } = props

  return countToChild
})

onUpdated(() => {
  console.log('子组件更新了')

  console.log(
    '1. 当props是父组件的响应式对象，子组件有使用props时，父组件更新props中的属性，子组件就会更新'
  )
  console.log(
    '2. 当子组件内没有使用任何props，即使props是父组件中的响应式对象，当父组件响应式对象变化，即子组件props变化，子组件也不会重新渲染'
  )
})

watch(props, () => {
  console.log('watch', props?.obj?.count)
})
</script>

<style scoped></style>
