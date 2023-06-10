<template>
  <section>
    <button @click="onChange">+1</button>
    <button @click="onChange2">+10</button>
    <span v-for="(item, index) in count" :key="index" class="item-wrap">
      <div class="item" :style="styleObj(item.target, index)">
        <div v-for="(item2, index2) in item.arr" :key="index2" class="item-child">
          {{ item2 }}
        </div>
      </div>
    </span>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'

const state = reactive({ count: '0000' })

const count = computed(() => {
  return state.count.split('').map((item) => ({
    target: item,
    arr: new Array(20).fill(0).map((_, index) => index % 10)
  }))
})

onMounted(() => {
  setTimeout(() => {
    state.count = `1479`
  }, 100)
})

const styleObj = computed(() => (item: any, index: any) => {
  return {
    transform: `translateY(-${50 + item * 5}%)`,
    color: 'blue',
    transition: `all 1s`
  }
})

const onChange = () => {
  state.count = `${Number(state.count) + 1}`
}

const onChange2 = () => {
  state.count = `${Number(state.count) + 10}`
}
</script>
<style>
.props {
  border: 1px solid red;
  margin: 20px;
}

.item-wrap {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: red;
  overflow-y: hidden;
  transition: all 10s;
  font-size: 35px;
}
.item {
  transition: all 10s;
}
.item-child {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
