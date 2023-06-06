<template>
  <div class="fragment">
    <transition>
      <FragmentChild @click="onClick" name="111" age="222" />
    </transition>
    <div>
      <h3>
        1. 当我们在组件上做 ( 属性透传时 - 不在props和emit中的属性，会自动透传到根元素上
        )，如果组件存在多个根节点，将会报错，因为Vue 不知道要将 attribute 透传到哪里
      </h3>
      <p>
        Extraneous non-props attributes (age) were passed to component but could not be
        automatically inherited because component renders fragment or text root nodes.
      </p>
    </div>
    <div>
      <h3>2. 内置组件 "Transition" 只支持一个 ( 根节点的组件 )，多个根节点动画将不生效</h3>
      <p>Component inside "Transition " renders non-element root node that cannot be animated.</p>
    </div>
    <div>
      <h3>3. 当在组件上绑定事件时，如果子组件有多个根元素，事件不会触发</h3>
      <p>
        Extraneous non-emits event listeners (click) were passed to component but could not be
        automatically inherited because component renders fragment or text root nodes. If the
        listener is intended to be a component custom event listener only, declare it using the
        "emits" option.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import FragmentChild from '../components/FragmentChild.vue'

const onClick = () => {
  console.log('FragmentChild组件有多个根节点，组件上绑定事件并不会触发')
}
</script>

<style>
.fragment {
  border: 1px solid red;
  margin: 20px;
}
</style>
