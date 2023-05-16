<template>
  <div class="container">
    <h1>This is an UseSlotsChild page</h1>

    <slot name="header" :age="state.age" :city="state.city"></slot>

    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { reactive, useSlots } from 'vue'

const state = reactive({
  city: 'shanghai',
  age: 20
})

const slots = useSlots()

if (slots && slots.default) {
  slots.default().forEach((item) => {
    console.log('item.type', item.type)
  })
}

if (slots && slots.header) {
  slots.header().forEach((item) => {
    console.log('item.type', item)
  })
}
</script>
