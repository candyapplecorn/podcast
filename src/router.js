import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/you-sing-and-you-sing-good',
      name: 'interviews',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Interviews.vue')
    },
    {
      path: '/interviews-submitted',
      name: 'interviews-submitted',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/InterviewsSubmitted.vue'),
    }
  ],
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
  }
})
