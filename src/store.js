import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPrompt: {}
  },
  mutations: {
    setCurrentPrompt: function (state, prompt) {
      console.log('prompt', prompt)
      state.currentPrompt = prompt
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
    }
  }
})
