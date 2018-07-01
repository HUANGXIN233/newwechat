import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Longing from '@/views/Longing'
import Recipes from '@/views/Recipes'
import Comestible from '@/views/Comestible'
import Logistics from '@/views/Logistics'
import LogisticsSystem from '@/views/LogisticsSystem'
import Principal from '@/views/Principal'
import Dietician from '@/views/Dietician'
import Cookbook from '@/views/Cookbook'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/longing',
      name: 'Longing',
      component: Longing
    }, {
      path: '/recipes',
      name: 'Recipes',
      component: Recipes
    },
    {
      path: '/comestible',
      name: 'Comestible',
      component: Comestible
    }, {
      path: '/logistics',
      name: 'Logistics',
      component: Logistics
    }, {
      path: '/logisticsSystem',
      name: 'LogisticsSystem',
      component: LogisticsSystem
    }, {
      path: '/principal',
      name: 'Principal',
      component: Principal
    }, {
      path: '/dietician',
      name: 'Dietician',
      component: Dietician
    }, {
      path: '/cookbook',
      name: 'Cookbook',
      component: Cookbook
    }
  ]
})
