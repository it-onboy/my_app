import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    redirect:'/main',
    children:[
      {
        path:'/main',
        name:'Main',
        component: () => import('../views/Main')
      },
      {
        path:'/my',
        name:'My',
        component: () => import('../views/My')
      },
      {
        path:'/search',
        name:'Search',
        component: () => import('../views/Search'),
        children:[
            {
              path:'/detail',
              name:'Detail',
              component: () => import('../views/Detail')
            }
        ]
      },
      {
        path:'/buy',
        name:'Buy',
        component: () => import('../views/Buy')
      }
      
    ]
  }
  
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
