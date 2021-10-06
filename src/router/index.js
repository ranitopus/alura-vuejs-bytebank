import Vue       from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: () => import('@/views/Gerentes.vue'),
    meta: {
      private: true
    }
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: () => import('@/views/NovoUsuario.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.private && !store.state.token) return next({name: 'login'})

  next()
})

export default router
