import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView'
import TemperatureShowView from '@/views/TemperatureShowView'
import HumidityShowView from '@/views/HumidityShowView'
import ExhaustDeviceView from '@/views/ExhaustDeviceView'
import HeatingDeviceView from "@/views/HeatingDeviceView";
import ControlView from "@/views/ControlView";
import DiscreteControlView from "@/views/DiscreteControlView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/control',
    children: [
      {
        path: '/control',
        name: 'control',
        meta: {
          title: '总控面板'
        },
        component: ControlView,
      },
      {
        path: '/discrete',
        name: 'discrete',
        component: DiscreteControlView,
        children: [
          {
            path: '/discrete/temperature',
            name: 'temperature',
            meta: {
              title: '温度控制'
            },
            component: TemperatureShowView
          },
          {
            path: '/discrete/humidity',
            name: 'humidity',
            meta: {
              title: '湿度控制'
            },
            component: HumidityShowView
          },
          {
            path: '/discrete/exhaust',
            name: 'exhaust',
            meta: {
              title: '排气系统'
            },
            component: ExhaustDeviceView
          },
          {
            path: '/discrete/heating',
            name: 'heating',
            meta: {
              title: '加热系统'
            },
            component: HeatingDeviceView
          }
        ]
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
