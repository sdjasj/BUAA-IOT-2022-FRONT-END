import { request } from '@/api/api'

export async function setHighTemperatureThresholdReq (method, params) {
  const url = `/api/get/setHighTemperatureThreshold`
  return request(url, method, params)
}

export async function setLowTemperatureThresholdReq (method, params) {
  const url = `/api/get/setLowTemperatureThreshold`;
  return request(url, method, params);
}

export async function setPreHighTemperatureThresholdReq (method, params) {
  const url = `/api/get/setPreHighTemperatureThreshold`
  return request(url, method, params)
}

export async function setPreLowTemperatureThresholdReq (method, params) {
  const url = `/api/get/setPreLowTemperatureThreshold`;
  return request(url, method, params);
}

