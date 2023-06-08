<template>
  <div class="props">
    <h1>This is an Vue3.3.0 defineEmits page</h1>
    <DefineEmitsChild @emitsCallback="emitsCallback" />
  </div>
</template>

<script setup lang="ts">
import DefineEmitsChild from '../components/3.3.0-defineEmitsChild.vue'

const emitsCallback = (count: number) => {
  console.log('count', count)
}
</script>
<style>
.props {
  border: 1px solid red;
  margin: 20px;
}
</style>
