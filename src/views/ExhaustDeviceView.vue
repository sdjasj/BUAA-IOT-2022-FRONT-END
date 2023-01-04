<template>
  <v-container fluid>
    <v-card style="margin-bottom: 150px;background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);" >
      <v-card-title class="board-head">
        排气系统
      </v-card-title>
      <v-divider></v-divider>
      <v-tabs
        color="deep-purple accent-4"
        background-color="transparent"
      >
        <v-tab @click="THtype = 0">温度控制</v-tab>
        <v-tab @click="THtype = 1">湿度控制</v-tab>
        <v-spacer></v-spacer>
        <v-card-actions v-if="THtype === 0">
          <v-btn
            outlined
            color="success"
            @click="operateDevice(1)"
          >
            <v-icon>
              mdi-weather-windy
            </v-icon>
            强制排风
          </v-btn>


          <v-btn
            outlined
            color="red darken-2"
            @click="operateDevice(0)"
          >
            <v-icon>
              mdi-progress-close
            </v-icon>
            关闭排风
          </v-btn>
        </v-card-actions>

        <v-card-actions v-if="THtype === 1">
          <v-btn
            outlined
            color="success"
            @click="operateDevice(1)"
          >
            <v-icon>
              mdi-weather-windy
            </v-icon>
            强制排风
          </v-btn>


          <v-btn
            outlined
            color="red darken-2"
            @click="operateDevice(0)"
          >
            <v-icon>
              mdi-progress-close
            </v-icon>
            关闭排风
          </v-btn>
        </v-card-actions>

        <v-tab-item style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
          <v-container fluid>
            <v-row justify="center" align="center" style="min-height: 300px;">
              <v-card-title class="no-bulletin">
                排气系统状态:{{deviceStateT}}
              </v-card-title>
            </v-row>
          </v-container>
        </v-tab-item>

        <v-tab-item style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
          <v-container fluid>
            <v-row justify="center" align="center" style="min-height: 300px;">
              <v-card-title class="no-bulletin">
                排气系统状态:{{deviceStateH}}
              </v-card-title>
            </v-row>
          </v-container>
        </v-tab-item>

      </v-tabs>
    </v-card>

  </v-container>
</template>

<script>
import {exhaustControlReq} from "@/api/exhaustDevice";
import {actionFailed, actionPostFailed, actionSuccess} from "@/components/ActionState";
import {baseModeReq} from "@/api/Device";

export default {
  name: 'ExhaustDeviceView',
  data () {
    return {
      deviceStateT: "关闭",
      deviceStateH: "开启",
      THtype:0,
    }
  },
  methods: {
    operateDevice(type) {
      let vm = this;
      exhaustControlReq('get', {
        direction: type,
        optype: this.THtype,
      }).then(res => {
        if (res.data.success) {
          if (type === 0) {
            vm.deviceState = "关闭"
          } else {
            vm.deviceState = "开启"
          }
          actionSuccess(res);
        } else {
          actionPostFailed(res);
        }
      }).catch(err => {
        actionFailed();
      })
    },
    loadData() {
      let vm = this;
      baseModeReq('get', {}).then(res => {
        if (res.data.success) {
          let st = Number.parseInt(res.data.data.state);
          console.log(st)
          if (((st & 1) === 1 && ((st >> 1) & 1) === 1 && (((st >> 2) & 1) === 1) && (((st >> 3) & 1) === 1))) {
            vm.deviceStateH = '开启'
          } else {
            vm.deviceStateH = '关闭'
          }

          if (((((st >> 4) & 1) === 1)) && (((st >> 5) & 1) === 1) && (((st >> 6) & 1) === 1) && (((st >> 7) & 1) === 1)) {
            vm.deviceStateT = "开启";
          } else {
            vm.deviceStateT = "关闭";
          }
        }
      }).catch(err => {

      })
    },
  },
  mounted() {
    this.loadData();
  }
}
</script>

<style scoped>
.no-bulletin {
  font-size: xx-large;
  opacity: 0.5;
}

.board-head {
  justify-content: center;
  font-size: xx-large;
}
</style>
