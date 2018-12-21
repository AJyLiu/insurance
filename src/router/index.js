import Vue from 'vue'
import Router from 'vue-router'
import Insurance from '@/components/Insurance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'insurance',
      component: Insurance
    }
  ]
})
