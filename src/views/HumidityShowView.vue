<template>
  <v-container fluid>
    <v-card style="margin-bottom: 150px; background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
      <v-card-title class="board-head">
        湿度记录
      </v-card-title>
      <v-divider></v-divider>
      <v-tabs
        color="deep-purple accent-4"
        background-color="transparent"
      >
        <v-tab @click="pageType = 0">当前湿度查看</v-tab>

        <v-tab @click="pageType = 1">历史湿度查看</v-tab>

        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn
            outlined
            color="success"
            @click="getCurHumidity"
            v-if="pageType === 0"
          >
            <v-icon>
              mdi-eye
            </v-icon>
            查询当前湿度
          </v-btn>


          <v-btn
            outlined
            color="success"
            @click="getHistoryHumidity"
            v-if="pageType === 1"
          >
            <v-icon>
              mdi-eye
            </v-icon>
            查询历史湿度
          </v-btn>
        </v-card-actions>

        <v-tab-item style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
          <v-container fluid v-if="!hasHumidity">
            <v-row justify="center" align="center" style="min-height: 300px;">
              <v-card-title class="no-bulletin">
                当前暂无湿度记录哦，去别的地方逛逛吧~~~
              </v-card-title>
            </v-row>
          </v-container>

          <v-container fluid v-else>
            <v-row justify="center" align="center" style="min-height: 300px;">
              <v-card-title>
                {{ humidity }}
              </v-card-title>
            </v-row>
          </v-container>
        </v-tab-item>

        <v-tab-item style="background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);">
          <v-container fluid v-if="!hasHistoryHumidity">
            <v-row justify="center" align="center" style="min-height: 300px;">
              <v-card-title class="no-bulletin">
                当前暂无历史湿度记录哦，去别的地方逛逛吧~~~
              </v-card-title>
            </v-row>
          </v-container>
          <v-container fluid v-else>
            <my-line-chart
              :graph-data-set="historyHumidityDataSet">
            </my-line-chart>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>

  </v-container>
</template>

<script>
import {HistoryTemperatureReq} from '@/api/temperature'
import { actionFailed, actionPostFailed, actionSuccess } from '@/components/ActionState'
import {currentHumidityReq, historyHumidityReq} from '@/api/humidity'
import MyLineChart from '@/components/MyLineChart'

export default {
  name: 'HumidityShowView',
  components: { MyLineChart },
  data () {
    return {
      pageType: 0,
      hasHumidity: false,
      humidity: 114514,
      hasHistoryHumidity: false,
      historyHumidityDataSet: {
        labels: ['2001-1-1', '2001-1-2', '2001-1-3'],
        datasets: [
          {
            label: '历史湿度',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },
    }
  },
  methods: {
    getCurHumidity() {
      const vm = this
      currentHumidityReq('get', {}).then(res => {
        if (res.data.success) {
          vm.hasHumidity = true
          vm.humidity = res.data.data.humidity
          actionSuccess(res)
        } else {
          actionPostFailed(res)
        }
      }).catch(err => {
        actionFailed()
      })
    },
    getHistoryHumidity() {
      const vm = this;
      historyHumidityReq('get', {}).then(res => {
        if (res.data.success) {
          vm.hasHistoryHumidity = false;
          vm.historyHumidityDataSet.labels = res.data.data.datetime;
          vm.historyHumidityDataSet.datasets[0].data = res.data.data.humidity;
          vm.hasHistoryHumidity = true;
          actionSuccess(res);
        } else {
          actionPostFailed(res);
        }
      }).catch(err => {
        actionFailed();
      })
    },
  },
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
