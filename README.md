# Vue3 + Vite + Pinia 测试

### (1) Todo List

```
1. pinia的整个数据流 state getter action plugin
2. 组件外使用store，比如在 router 的 ( 全局前置守卫 router.beforeEach 中使用 pinia 中的数据 )
```

### (2) Pinia

```
Pinia
--

1
plugin
- 持久化插件: pinia-plugin-persistedstate

2
组件外如何使用store ？
- 只要满足: app.use(pinia) 即vue插件pinia安装后，就可以调用各个store
- https://pinia.vuejs.org/zh/core-concepts/outside-component-usage.html
```
