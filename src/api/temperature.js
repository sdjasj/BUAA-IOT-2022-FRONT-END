import { request } from '@/api/api'

export async function currentTemperatureReq (method, params) {
  const url = '/api/get/temperature/'
  return request(url, method, params)
}

export async function HistoryTemperatureReq(method, params) {
  const url = `/api/get/historyTemperature`;
  return request(url, method, params);
}

export async function monitoringTemperatureCycleReq(method, params) {
  const url = `/api/monitoringTemperatureCycle`;
  return request(url, method, params);
}

export async function historyTAndHeReq(method, params) {
  const url = `/api/get/historyTAndH`;
  return request(url, method, params);
}
