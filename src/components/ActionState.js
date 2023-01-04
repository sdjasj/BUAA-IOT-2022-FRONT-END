import store from '@/store'

function actionSuccess (res) {
  store.commit('snack/setState', {
    snackShow: true,
    snackMsg: res.data.message,
    snackType: 'green'
  })
}

function actionFailed () {
  store.commit('snack/setState', {
    snackShow: true,
    snackMsg: '网络异常，请重试',
    snackType: 'red'
  })
}

function actionPostFailed (res) {
  store.commit('snack/setState', {
    snackShow: true,
    snackMsg: res.data.message,
    snackType: 'red'
  })
}

function actionSuccessOwnDefinedText (text) {
  store.commit('snack/setState', {
    snackShow: true,
    snackMsg: text,
    snackType: 'green'
  })
}

export {
  actionSuccess,
  actionFailed,
  actionPostFailed,
  actionSuccessOwnDefinedText
}
