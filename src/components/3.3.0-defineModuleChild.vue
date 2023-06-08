<template>
  <div class="props">
    <h1>This is an Vue3.3.0 defineModuleChild page</h1>

    <input v-model="modelValue" />
    <input :value="modelValue" @input="onInput" />
  </div>
</template>

<script setup lang="ts">
const modelValue = defineModel()

defineProps({ modelValue: Number })
const emit = defineEmits(['update:modelValue'])
function onInput(e: any) {
  emit('update:modelValue', e.target.value)
}
</script>
<style>
.props {
  border: 1px solid red;
  margin: 20px;
}
</style>
