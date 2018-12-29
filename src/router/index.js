import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
import Detail from '../views/detail/detail.vue'
import City from '../views/city/city.vue'
import Out from '../views/city/out.vue' 

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path:'/detail/:id',
      component:Detail
    },
    {
      path:'/cityIn',
      component:City
    },
    {
      path:'/cityOut',
      component:Out
    }
  ]
})
