import Vue from 'vue'
import VueRouter from 'vue-router'
import Prompt from './components/Prompt'
import Login from './components/Login'
import UserPrompts from './components/UserPrompts'
import EditPrompt from './components/EditPrompt'
import NewPrompt from './components/NewPrompt'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Prompt},
  {path: '/login', name: 'login', component: Login},
  {path: '/prompts', name: 'userPrompts', component: UserPrompts},
  {path: '/prompts/:id', name: 'editPrompt', component: EditPrompt},
  {path: '/prompts/add', name: 'newPrompt', component: NewPrompt},
  {path: '*', redirect: '/'}
]

export default new VueRouter({
  routes
})
