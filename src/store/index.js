import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{
      address:'',
      chainId:'',
      isNetwork:false,
    },
  },
  mutations: {
    setUserInfo(state,obj){
      Object.assign(state.userInfo, obj)
    },
  },
  actions: {
  },
  modules: {
  }
})
