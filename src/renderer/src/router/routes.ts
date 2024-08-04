import { RouteRecordRaw } from "vue-router";

export const routes:RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   name: '',
  //   component: () => import('../views/home/index.vue')
  // },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
]
