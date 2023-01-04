
const snack = {
  namespaced: true,
  state: {
    snackShow: false,
    snackMsg: '114514',
    snackType: 'success'
  },
  mutations: {
    setState (state, { snackShow, snackMsg, snackType }) {
      state.snackShow = snackShow
      state.snackMsg = snackMsg
      state.snackType = snackType
    },
    closeSnackBar (state) {
      state.snackShow = false
    },
    changeSnackBar (state, { newValue }) {
      state.snackShow = newValue
    }
  }
}

export default snack
