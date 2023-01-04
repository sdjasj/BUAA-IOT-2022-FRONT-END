<template>
  <v-container fluid>
    <v-card style="margin-bottom: 150px; background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
      <v-card-title class="board-head">
        温度记录
      </v-card-title>
      <v-divider></v-divider>
      <v-tabs
        color="deep-purple accent-4"
        background-color="transparent"
      >
        <v-tab @click="pageType = 0">当前温度查看</v-tab>

        <v-tab @click="pageType = 1">历史温度查看</v-tab>

        <v-spacer></v-spacer>
        <v-card-actions>
            <v-btn
              outlined
              color="success"
              @click="getCurTemperature"
              v-if="pageType === 0"
            >
              <v-icon>
                mdi-eye
              </v-icon>
              查询当前温度
            </v-btn>


            <v-btn
              outlined
              color="success"
              @click="getHistoryTemperature"
              v-if="pageType === 1"
            >
              <v-icon>
                mdi-eye
              </v-icon>
              查询历史温度
            </v-btn>
        </v-card-actions>

        <v-tab-item style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
          <v-container fluid v-if="!hasTemperature">
            <v-row justify="center" align="center" style="min-height: 300px;">
              <v-card-title class="no-bulletin">
                当前暂无温度记录哦，去别的地方逛逛吧~~~
              </v-card-title>
            </v-row>
          </v-container>
          <v-container fluid v-else>
            <v-row justify="center" align="center" style="min-height: 300px;">
              <v-card-title>
                {{temperature}}
              </v-card-title>
            </v-row>
          </v-container>
        </v-tab-item>

        <v-tab-item style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
          <v-container fluid v-if="!hasHistoryTemperature">
            <v-row justify="center" align="center" style="min-height: 300px;">
              <v-card-title class="no-bulletin">
                当前暂无历史温度记录哦，去别的地方逛逛吧~~~
              </v-card-title>
            </v-row>
          </v-container>
          <v-container fluid v-if="hasHistoryTemperature">
            <my-line-chart :graph-data-set="historyTemperatureDataSet">
            </my-line-chart>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>

  </v-container>
</template>

<script>
import {currentTemperatureReq, HistoryTemperatureReq} from '@/api/temperature'
import { actionFailed, actionPostFailed, actionSuccess } from '@/components/ActionState'
import MyLineChart from '@/components/MyLineChart'

export default {
  name: 'TemperatureShowView',
  components:{
    MyLineChart
  },
  data () {
    return {
      pageType: 0,
      hasTemperature: false,
      temperature: 114514,
      hasHistoryTemperature: false,
      historyTemperatureDataSet: {
        labels: ['2001-1-1', '2001-1-2', '2001-1-3'],
        datasets: [
          {
            label: '历史湿度',
            backgroundColor: '#f87979',
            data: [25,44,30]
          }
        ]
      },
    }
  },
  methods: {
    getCurTemperature () {
      const vm = this
      currentTemperatureReq('get', {
      }).then(res => {
        if (res.data.success) {
          vm.hasTemperature = true
          vm.temperature = res.data.data.temperature
          actionSuccess(res)
        } else {
          actionPostFailed(res)
        }
      }).catch(err => {
        actionFailed()
      })
    },
    getHistoryTemperature() {
      const vm = this;
      HistoryTemperatureReq('get', {

      }).then(res => {
        if (res.data.success) {
          vm.hasHistoryTemperature = false;
          vm.historyTemperatureDataSet.labels = res.data.data.datetime;
          vm.historyTemperatureDataSet.datasets[0].data = res.data.data.temperature;
          vm.hasHistoryTemperature = true;
          actionSuccess(res);
        } else {
          actionPostFailed(res);
        }
      }).catch(err => {
        console.log(111)
        actionFailed();
      })
    },
  }
}
</script>

<style scoped>
.no-bulletin {
  font-size: xx-large;
  color: gray;
  opacity: 0.5;
}

.board-head {
  justify-content: center;
  font-size: xx-large;
}
</style>
