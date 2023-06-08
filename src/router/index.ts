import { createRouter, createWebHistory } from 'vue-router'
import { useCounterStore } from '@/stores/countStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PiniaView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('../views/PiniaView.vue')
    },
    {
      path: '/use-slots',
      name: 'uses-lots',
      component: () => import('../views/UseSlots.vue')
    },
    {
      path: '/props',
      name: 'props',
      component: () => import('../views/PropsView.vue')
    },
    {
      path: '/setupvsdata',
      name: 'setupvsdata',
      component: () => import('../views/SetupVsData.vue')
    },
    {
      path: '/fragment',
      name: 'fragment',
      component: () => import('../views/FragmentMultiple.vue')
    },
    {
      path: '/3.3.0-defineModule',
      name: ' 3.3.0-defineModule',
      component: () => import('../views/3.3.0-defineModule.vue')
    },
    {
      path: '/3.3.0-defineOptions',
      name: ' 3.3.0-defineOptions',
      component: () => import('../views/3.3.0-defineOptions.vue')
    },
    {
      path: '/3.3.0-defineEmits',
      name: ' 3.3.0-defineEmits',
      component: () => import('../views/3.3.0-defineEmits.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const countStore = useCounterStore()
  console.log(
    '在路由全局导航勾子-全局前置守卫-router.beforeEach中使用pinia',
    countStore.state.count
  )
  next()
})

export default router
