<template>
  <!-- 注意这里的count不是解构的count，而是props.count的简写 -->
  {{ count }}
</template>

<script setup lang="ts">
import { watch } from 'vue'
const { count } = defineProps({ count: Number })

watch(
  () => count,
  () => {
    console.log('count', count) // 在 vite 中开启 propsDestructure: true 后，count将会变化
  }
)
</script>
<style>
.props {
  border: 1px solid red;
  margin: 20px;
}
</style>
