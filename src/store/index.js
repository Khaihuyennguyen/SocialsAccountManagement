import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scheduledPosts: []
  },
  mutations: {
    ADD_SCHEDULED_POST(state, post) {
      state.scheduledPosts.push(post)
    }
  },
  actions: {
    schedulePost({ commit }, post) {
      // Here you would make API calls to Pinterest and Instagram
      commit('ADD_SCHEDULED_POST', post)
    }
  }
}) 