import Vue from 'vue'
import Router from 'vue-router'
import Index from '../index/Index'
import Api from '../api/Api'

import JianliRoutes from '../jianli/routes'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/api',
      name: 'Api',
      component: Api
    },
    JianliRoutes,
  ]
})
