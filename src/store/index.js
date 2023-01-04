import Vue from 'vue'
import Vuex from 'vuex'
import snack from '@/store/snack'

Vue.use(Vuex)

const getters = {
  snackShow: state => state.snack.snackShow,
  snackMsg: state => state.snack.snackMsg,
  snackType: state => state.snack.snackType
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    snack
  },
  getters
})
