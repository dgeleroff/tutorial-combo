import Vue from 'vue'
import Router from 'vue-router'
import DiceRoll from '@/components/DiceRoll.vue'
import About from '@/components/About.vue'
import Welcome from '@/components/Welcome.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/diceroll',
      name: 'DiceRoll',
      component: DiceRoll
    }
  ]
})
