import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"mqlong",
    num:10000
  },
  getters:{
    // numadd(state){
    //   return state.num+1000
    // }
  },
  mutations: {
    numadd(state,count){
      state.num+=count
    }
  },
  actions: {
  },
  modules: {
  }
})
 