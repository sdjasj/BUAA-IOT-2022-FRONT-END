<template>
  <v-app>
    <Message />
    <router-view />
  </v-app>
</template>

<script>
import Message from '@/components/Message.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    Message
  },
  methods: {
  }
}
</script>

<style scoped>
pre {
  font-family: 'SF Mono', 'Consolas', monospace;
}
</style>
