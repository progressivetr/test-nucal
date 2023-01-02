import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

export enum R {
  TODO = 'TODO',
  DONE = 'DONE'
}

export const history = createWebHistory()
export const router = createRouter({
  history,
  routes: [
    {
      path: '',
      redirect: { name: R.TODO }
    },
    {
      path: '/todo',
      name: R.TODO,
      component: () => import('./views/Todo.vue')
    },
    {
      path: '/done',
      name: R.DONE,
      component: () => import('./views/Done.vue')
    }
  ]
})
