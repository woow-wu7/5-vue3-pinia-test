<template>
  <section>
    <RollUpChild />
    <button @click="onChangeInc">+1</button>
    <button @click="onChangeDec">-1</button>
    <button @click="onChange2">+10</button>
    <span v-for="(item, index) in count" :key="index" class="item-wrap" ref="refRow">
      <span v-if="Number.isNaN(+item.target)" style="display: inline">{{ item.target }}</span>

      <div
        v-else
        class="item"
        :style="styleObj(item.target)"
        @transitionend="() => transitionEnd(item, index)"
        ref="refCol"
      >
        <div v-for="(item2, index2) in item.arr" :key="index2" class="item-child" ref="refColItem">
          {{ item2 }}
        </div>
      </div>
    </span>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import RollUpChild from '../components/RollUp/RollUpChild.vue'

const refRow = ref()
const refCol = ref()
const refColItem = ref()
const state = reactive({ count: '1239', percent: 0, isRun: true })

const count = computed(() => {
  return state.count.split('').map((item) => ({
    target: item,
    arr: Number.isNaN(+item)
      ? item
      : new Array(10)
          .fill(0)
          .map((_, index) => index % 10)
          .concat(0)
  }))
})

onMounted(() => {
  setInterval(() => {
    state.count = String(Number(state.count) + 1)
  }, 1000)
  // setTimeout(() => {
  //   state.count = `14789`
  // }, 100)

  // 当我们 v-for 绑定元素的 ref 时，该 ref 是一个数组
  console.log('refRow', refRow.value[0])

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

const styleObj = computed(() => (item: any) => {
  console.log('------', item)
  return {
    transition: item === '0' ? `all 0.8s` : `all 1s`,
    transform: item === '0' ? `translateY(-91%)` : `translateY(-${item * 9.1}%)`,
    color: 'blue'
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

const transitionEnd = (item: any, index: any) => {
  console.log('333', item.target)
  // console.log('refCol.value[index].style', refCol.value[index].getBoundingClientRect())
  if (item.target === '0') {
    refCol.value[index].style.transition = 'all 0s'
    refCol.value[index].style.transform = 'translateY(0)'
  } else {
    refCol.value[index].style.transition = 'all 1s'
  }
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
