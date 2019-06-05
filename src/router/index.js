import Vue from 'vue'
import Router from 'vue-router'
import DiceRoll from '@/components/DiceRoll.vue'
import About from '@/components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DiceRoll',
      component: DiceRoll
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
