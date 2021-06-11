import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history:[]
  },
  mutations: {
    addHistory(state,kw){
      let index = state.history.indexOf(kw)
      if(index != -1){
        state.history.splice(index,1)
      }
      if(state.history.length === 5){
        state.history.pop()
      }
      state.history.unshift(kw)
    },
    clearHistory(state){
      state.history = []
    },
    popCurrent(state,item){
      let index = state.history.indexOf(item)
      state.history.splice(index,1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins:[vuexPersistedstate()]
})
