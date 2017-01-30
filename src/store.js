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
    setCurrentPrompt: (state, prompt) => {
      console.log('prompt', prompt)
      state.currentPrompt = prompt
    },
    setAuthToken: (state, token) => {
      state.authToken = token
      window.sessionStorage.setItem('token', token)
    },
    setUser: (state, user) => {
      state.user = user
      window.sessionStorage.setItem('user', JSON.stringify(user))
    },
    updateUserPrompt: (state, prompt) => {
      let prompts = state.user ? state.user.prompts : []
      for (let i = 0; i < prompts.length; i++) {
        if (prompts[i].id === prompt.id) {
          prompts[i] = prompt
          return
        }
      }
      prompts.push(prompt)
    },
    logout: (state) => {
      state.authToken = ''
      state.user = {}
      window.sessionStorage.clear()
    }
  },
  actions: {
    getRandomPrompt: (context) => {
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
    userName: (state) => {
      return state.user ? state.user.username : ''
    },
    userPrompts: (state) => {
      return state.user ? state.user.prompts : []
    },
    userPromptById: (state, getters) => (id) => {
      return getters.userPrompts.find(prompt => prompt.id.toString() === id)
    }
  }
})
