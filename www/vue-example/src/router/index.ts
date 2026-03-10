import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
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
