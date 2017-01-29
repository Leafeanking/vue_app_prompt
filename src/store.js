import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPrompt: {},
    authToken: window.sessionStorage.getItem('token'),
    user: JSON.parse(window.sessionStorage.getItem('user'))
  },
  mutations: {
    setCurrentPrompt: function (state, prompt) {
      console.log('prompt', prompt)
      state.currentPrompt = prompt
    },
    setAuthToken: function (state, token) {
      state.authToken = token
      window.sessionStorage.setItem('token', token)
    },
    setUser: function (state, user) {
      state.user = user
      window.sessionStorage.setItem('user', JSON.stringify(user))
    },
    logout: function (state) {
      state.authToken = ''
      state.user = {}
      window.sessionStorage.clear()
    }
  },
  actions: {
    getRandomPrompt: function (context) {
      Vue.http.get('http://localhost:8000/api/prompts/random/').then(
        function (response) {
          console.log(response)
          context.commit('setCurrentPrompt', response.data)
        },
        function () {
          // error
        }
      )
    },
    getAuthToken: function (context, formData) {
    }
  },
  getters: {
    userName: function (state) {
      return state.user ? state.user.username : ''
    }
  }
})
