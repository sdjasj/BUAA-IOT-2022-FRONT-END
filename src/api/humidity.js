import { request } from '@/api/api'

export async function currentHumidityReq (method, params) {
  const url = '/api/get/humidity'
  return request(url, method, params)
}

export async function historyHumidityReq(method, params) {
  const url = `/api/get/historyHumidity`;
  return request(url, method, params)
}

export async function monitoringHumidityCycleReq(method, params) {
  const url = `/api/monitoringHumidityCycle`;
  return request(url, method, params)
}

export async function getHumidityParams(method, params) {
  const url = `/api/getHumidityParams`;
  return request(url, method, params);
}


