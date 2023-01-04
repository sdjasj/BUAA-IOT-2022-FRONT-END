import {request} from "@/api/api";

export async function deviceReq (method, params) {
  const url = '/api/device';
  return request(url, method, params);
}

export async function modeReq (method, params) {
  const url = '/api/monitorMode';
  return request(url, method, params);
}

export async function baseModeReq (method, params) {
  const url = '/api/baseMode';
  return request(url, method, params);
}
