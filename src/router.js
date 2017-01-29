import Vue from 'vue'
import VueRouter from 'vue-router'
import Prompt from './components/Prompt'
import Login from './components/Login'

Vue.use(VueRouter)
// Pointing routes to the components they should use
const routes = [
  { path: '/', component: Prompt },
  { path: '/login', name: 'login', component: Login },
  { path: '*', redirect: '/' }
]
export default new VueRouter({
  routes
})
