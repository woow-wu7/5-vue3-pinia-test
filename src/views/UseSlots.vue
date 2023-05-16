<template>
  <div class="container">
    <h1>This is an UseSlots page</h1>

    <UseSlotsChild>
      <template #header="headerData">
        <p>slot-header</p>
        <p>作用域插: {{ headerData?.age }}</p>
      </template>

      <p>slot-default1</p>
      <p>slot-default2</p>

      <template #footer>
        <p>slot-footer</p>
      </template>
    </UseSlotsChild>
  </div>
</template>

<script setup lang="ts">
import UseSlotsChild from '../components/UseSlotsChild.vue'
</script>

<style>
.container {
  border: 1px solid red;
  margin: 20px;
}
</style>
