<template>
  <div class="background-color">
    <v-card>
      <v-navigation-drawer
        v-model="drawer"
        :expand-on-hover="!$vuetify.breakpoint.mobile"
        app
        style="background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);"
      >


        <v-list
          shaped
        >

          <template
            v-for="l in singleLink"
          >
            <v-list-item
              :key="l.icon"
              v-if="l.show"
              style="margin-top:10px"
              @click="changeLink(l.name)"
              color="indigo"
              :input-value="selectLink === l.name"
            >
              <v-list-item-icon>
                <v-icon> {{ l.icon }} </v-icon>

              </v-list-item-icon>
              <v-list-item-title>
                {{ l.text }}
              </v-list-item-title>
            </v-list-item>
          </template>

        </v-list>


        <v-list-group
          v-for="item in Duplicatelinks"
          :key="item.icon+item.text"
          :prepend-icon="item.icon"
          style="margin-top:10px"
        >

          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="subItem in item.children"
            :key="subItem.icon+subItem.text"
            style="margin-top:10px;margin-left:10px"
            @click="changeLink(subItem.name)"
            :input-value="subItem.routerList.includes(selectLink)"
          >
            <v-list-item-icon>
              <v-icon> {{ subItem.icon }} </v-icon>

            </v-list-item-icon>
            <v-list-item-title>
              {{ subItem.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list-group>

      </v-navigation-drawer>
    </v-card>
    <v-app-bar
      color="white"
      elevation="1"
      style="background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);"
      dark
      src="https://picsum.photos/1920/1080?random"
      fixed
    >
      <v-app-bar-nav-icon @click="drawer = !drawer">

      </v-app-bar-nav-icon>

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
        bottom
        :offset-y="true"
        transition="slide-y-transition"
        :close-on-content-click="false"
      >
      </v-menu>

      <v-btn icon @click="$router.go(-1)">
        <v-icon large>mdi-arrow-left-bold-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main v-if="!mobileFlag" style="padding: 64px 0px 0px 56px; margin: 0px;">
      <router-view></router-view>
    </v-main>
    <v-main v-else style="padding: 64px 0px 0px 0px; margin: 0px;">
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {},
  data () {
    return {
      mobileFlag: false,
      Duplicatelinks: [
        {
          icon: "mdi-home",
          text: "分布控制面板",
          name: "discrete",
          children:[
            {
              icon: 'mdi-bulletin-board',
              text: '温度界面',
              name: 'temperature',
              routerList: [
                'temperature'
              ],
            },
            {
              icon: 'mdi-account-alert',
              text: '湿度界面',
              name: 'humidity',
              routerList: [
                'humidity'
              ],
            },
            {
              icon: 'mdi-access-point',
              text: '排气系统',
              name: 'exhaust',
              routerList: [
                'exhaust'
              ],
            },
            {
              icon: 'mdi-fire-alert',
              text: '加热系统',
              name: 'heating',
              routerList: [
                'heating'
              ],
            }
          ]
        }
      ],
      singleLink: [
        {
          icon: 'mdi-desktop-classic',
          text: '总控界面',
          name: 'control',
          routerList: [
            'control'
          ],
          show: true
        },
      ],
      drawer: true,
      selectLink: null,
      title: null
    }
  },
  methods: {
    changeLink (name) {
      this.selectLink = name
      this.$router.push({ name: name })
    }
  },
  computed: {
  },
  watch: {
    mini (to, from) {
      this.drawer = !this.mini
    },
    $route (to) {
      this.title = to.meta.title
      this.selectLink = to.name
    }
  },
  async mounted () {
    this.title = this.$router.history.current.meta.title
    this.selectLink = this.$router.history.current.name
  },
  beforeMount() {
    this.mobileFlag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) !== null;
  }
}
</script>

<style scoped>
.background-color {
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}
</style>
