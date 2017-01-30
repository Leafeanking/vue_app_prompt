// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import App from './App'
import store from './store'
import router from './router'

Vue.use(VueResource)
Vue.use(VueMaterial)

Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store,
  router,
  http: {
    root: process.env.API_ROOT,
    headers: {
      Authorization: `Token ${store.state.authToken}`
    }
  }

})
