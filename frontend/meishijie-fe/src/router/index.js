import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home.vue' 


Vue.use(Router)

const router = new Router({
  mode: 'history',  // hash http://localhost:8081#home   http://localhost:8081/home
  routes: [
    {
      path: '/',
      name: 'home',
      title: '首页',
      component: Home
    },
  ]
})

export default router;