<template>
  <div class="pinia">
    <section>
      <h1>This is an SetupVsData page</h1>

      <!-- 输出1 而不是0 -->
      <!-- setup 优先级大于 data -->
      <!-- 同时 eslint 会报错 -->
      {{ count }}
    </section>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  data() {
    return {
      count: 0
    }
  },
  setup() {
    const count = ref(1)

    return {
      count
    }
  }
}
</script>

<style>
.pinia {
  border: 1px solid red;
  padding: 20px;
}

button {
  display: block;
}
</style>
