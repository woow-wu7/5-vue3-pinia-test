<template>
  <div class="props">
    <h1>This is an Vue3.3.0 defineProps page</h1>
    <button @click="state.count++">count++</button>
    <DefinePropsChild :count="state.count"/>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import DefinePropsChild from '../components/3.3.0-definePropsChild.vue'
const state = reactive({ count: 1 })
</script>
<style>
.props {
  border: 1px solid red;
  margin: 20px;
}
</style>
