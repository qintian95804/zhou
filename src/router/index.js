import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   redirect:'/test'
  // },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: ()=>import("../views/Test.vue")
  // },
  {
    path: '/',
    name: 'Home',
    component: ()=>import("../views/Home.vue")
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=>import("../views/Home.vue")
  },
  {
    path: '/classify',
    name: 'Classify',
    component: ()=>import("../views/Classify.vue")
  },
  {
    path: '/shopping',
    name: 'Shopping',
    component: ()=>import("../views/Shopping.vue")
  },
  {
    path: '/my',
    name: 'My',
    component: ()=>import("../views/My.vue")
  },
  {
    path: '/sing',
    name: 'Sing',
    component: ()=>import("../views/Sing.vue")
  },
  {
    path: '/register',
    name: 'Register',
    component: ()=>import("../views/Register.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
