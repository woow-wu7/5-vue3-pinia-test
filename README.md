# Vue3 + Vite + Pinia 测试

### (1) Todo List

```
1. pinia的整个数据流 state getter action plugin
2. 组件外使用store，比如在 router 的 ( 全局前置守卫 router.beforeEach 中使用 pinia 中的数据 )
3. pinia/plugin 数据持久化
4. 重写 store.$reset() 方法，( 好处: 复用，不用每个store都实现一个 )
5. store属性的使用
  - store.$id
  - store.$state 获取state
  - store.$reset() 通过建立一个新的状态对象，将 store 重设为初始状态
  - store.$patch(state) 更新state
  - $onAction(callback, detached?): () => void
  - store.$subscribe
```

### (2) Pinia

```
Pinia
- 兼容vue2
- 兼容vue3 script-setup 写法
- 插件系统
--

1
三种使用方式
- 1. 直接 访问 和 修改
- 2. 调用 store 定义的 方法
- 3. 调用 $patch 函数
// 1. 直接 访问 和 修改
const changeCount = () => {
  console.log('访问', countStore.state.count)
  console.log('修改', countStore.state.count++)
}
// 2. 调用 store 定义的 方法
const changeCount2 = () => countStore.add()
// 3. 调用 $patch 函数
const changeCount3 = () =>
  countStore.$patch({
    [countStore.state.count]: countStore.state.count++
  })

2
plugin
- 持久化插件: pinia-plugin-persistedstate

3
问题: 组件外如何使用store ？
- 只要满足: app.use(pinia) 即vue插件pinia安装后，就可以调用各个store
- https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html

4
store属性
- 内部暴露的属性和方法都是以 $ 开头的
- 手写重置插件
  - store.$reset() 通过建立一个新的状态对象，将 store 重设为初始状态
  - store.$state 获取state
  - store.$patch(state) 更新state
- store.$id
- store.$state
- store.$onAction()
  - $onAction(callback, detached?): () => void
  - 设置一个回调，当一个 action 即将被调用时，就会被调用。
  - callback参数: store name args
  - 详见: 本项目/src/views/PiniaView.vue
- store.$subscribe
  - $subscribe(callback, options?): () => void
  - 设置一个回调，当状态发生变化时被调用

5
问题: 如何给每个store实现一个reset方法？(好处: 复用，不用每个store都实现一个)
报错: 我们直接在 <script setup> 中调用 store.$reset 会报错，所以我们需要手动实现reset方法
报错信息: Uncaught Error: 🍍: Store "counter" is built using the setup syntax and does not implement $reset().
实现:
  - 我们需要借助 pinia/plugin 用插件的方式来为每个store添加 reset() 方法
  - store.$reset() 通过建立一个新的状态对象，将 store 重设为初始状态
  - store.$state 获取state
  - store.$patch(state) 更新state
链接: https://stackoverflow.com/questions/71690883/pinia-reset-alternative-when-using-setup-syntax
详细:
const reset = ({ store }: { store: Store }) => {
  const initialState = lodash.cloneDeep(store.$state)
  store.$reset = () => store.$patch(initialState) // 重写 store.$reest() 方法
}
const pinia = createPinia()
pinia.use(reset) // pinia reset
```
