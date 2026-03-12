import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/css-properties',
    },
    {
      path: '/css-properties',
      name: 'CssProperties',
      component: () => import('@/views/CssProperties.vue'),
    },
    {
      path: '/components',
      name: 'Components',
      component: () => import('@/views/ComponentsDemo.vue'),
    },
    {
      path: '/chinese',
      name: 'Chinese',
      component: () => import('@/views/ChinesePage.vue'),
    },
  ],
})

export default router
