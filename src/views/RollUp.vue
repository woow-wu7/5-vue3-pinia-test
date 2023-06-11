<template>
  <section>
    <button @click="onChangeInc">+1</button>
    <button @click="onChangeDec">-1</button>
    <button @click="onChange2">+10</button>
    <span v-for="(item, index) in count" :key="index" class="item-wrap" ref="refItemWrap">
      <span v-if="Number.isNaN(+item.target)" style="display: inline">{{ item.target }}</span>
      <div v-else class="item" :style="styleObj(item.target, index)">
        <div v-for="(item2, index2) in item.arr" :key="index2" class="item-child">
          {{ item2 }}
        </div>
      </div>
    </span>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'

const refItemWrap = ref()
const state = reactive({ count: '0000' })

const count = computed(() => {
  return state.count.split('').map((item) => ({
    target: item,
    arr: Number.isNaN(+item) ? item : new Array(10).fill(0).map((_, index) => index % 10)
  }))
})

onMounted(() => {
  setTimeout(() => {
    state.count = `14789`
  }, 100)

  // 当我们 v-for 绑定元素的 ref 时，该 ref 是一个数组
  console.log('refItemWrap', refItemWrap.value[0])

  // const isNumber = (val: any) => !Number.isNaN(+val)
  // function getNumbers(value: any) {
  //   // const isNumber = (val) => !Number.isNaN(+val);
  //   return String(value)
  //     .split('')
  //     .map((it) => (isNumber(it) ? Number(it) : it))
  // }
  // const res = getNumbers('14,789')
  // console.log('res: ', res)
})

const styleObj = computed(() => (item: any, index: any) => {
  return {
    transform: `translateY(-${item * 10}%)`,
    color: 'blue',
    transition: `all 1s`
  }
})

const onChangeInc = () => {
  state.count = `${Number(state.count) + 1}`
}
const onChangeDec = () => {
  state.count = `${Number(state.count) - 1}`
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
