<template>
  <v-snackbar
    v-model="snackShow"
    :color="snackType"
    top
    class="my-snack"
  >
  {{snackMsg}}
  <template v-slot:action="{ attrs }">
    <v-btn
      color="white"
      text
      v-bind="attrs"
      @click="close"
    >
      Close
    </v-btn>
  </template>
  </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '@/store'

export default {
  name: 'Message',
  mounted () {

  },
  computed: {
    ...mapGetters(['snackMsg', 'snackType']),
    snackShow: {
      get: function () {
        return store.getters.snackShow
      },
      set: function (v) {
        store.commit('snack/changeSnackBar', { newValue: v })
      }
    }
  },
  methods: {
    close () {
      this.$store.commit('snack/closeSnackBar')
    }
  }
}
</script>

<style scoped>
.my-snack {
  z-index: 1500001;
}
</style>
