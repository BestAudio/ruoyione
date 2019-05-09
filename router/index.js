import Vue from 'vue'
import Router from 'vue-router'
import RyLogin from '@/pages/ry-login'
import RyMenu from '@/pages/ry-menu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: RyLogin,
    },
    {
      path: '/RyMenu',
      name: 'RyMenu',
      component: RyMenu,
    }
  ]
})
