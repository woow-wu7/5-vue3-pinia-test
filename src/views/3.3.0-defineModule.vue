<template>
  <div class="props">
    <h1>This is an Vue3.3.0 defineModule page</h1>
    <DefineModuleChild v-model="state.count" />
    {{ state.count }}
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import DefineModuleChild from '../components/3.3.0-defineModuleChild.vue'

const state = reactive({ count: 0 })
</script>
<style>
.props {
  border: 1px solid red;
  margin: 20px;
}
</style>
