<template>
  <div class="props">
    <h1>This is an Vue3.3.0 defineOptions page</h1>
    <DefineOptionsChild />
    {{ DefineOptionsChild.name }}
  </div>
</template>

<script setup lang="ts">
import DefineOptionsChild from '../components/3.3.0-defineOptionsChild.vue'

console.log('DefineOptionsChild.name--', DefineOptionsChild.name)
</script>
<style>
.props {
  border: 1px solid red;
  margin: 20px;
}
</style>
