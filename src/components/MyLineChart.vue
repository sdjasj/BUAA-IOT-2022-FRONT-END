<template>
  <line-chart-generator v-if="flag" :chart-data="chartData" />
  <line-chart-generator v-else :chart-data="chartData" :height="140"/>
</template>

<script>
// DataPage.vue
import { Line as LineChartGenerator } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)

export default {
  name: 'LineChart',
  components: { LineChartGenerator },
  props: {
    graphDataSet: {
      type: Object,
      require: true,
      default: () => {},
    }
  },
  data() {
    return {
      flag: false,
      chartData: this.graphDataSet,
    }
  },
  methods: {
  },
  beforeMount() {
    this.flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) !== null;
  }
}
</script>
