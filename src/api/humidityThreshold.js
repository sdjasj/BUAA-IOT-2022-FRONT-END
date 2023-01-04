import { request } from '@/api/api'

export async function setHighHumidityThresholdReq (method, params) {
  const url = '/api/get/setHighHumidityThreshold'
  return request(url, method, params)
}

export async function setLowHumidityThresholdReq (method, params) {
  const url = `/api/get/setLowHumidityThreshold`;
  return request(url, method, params);
}

export async function setPreHighHumidityThresholdReq (method, params) {
  const url = '/api/get/setPreHighHumidityThreshold'
  return request(url, method, params)
}

export async function setPreLowHumidityThresholdReq (method, params) {
  const url = `/api/get/setPreLowHumidityThreshold`;
  return request(url, method, params);
}

export async function getTemperatureParams (method, params) {
  const url = `/api/get/getTemperatureParams`;
  return request(url, method, params);
}

