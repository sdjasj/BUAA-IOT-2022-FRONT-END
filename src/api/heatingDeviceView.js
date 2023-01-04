import {request} from "@/api/api";

export async function heatingControlReq (method, params) {
  const url = '/api/get/heatingControl';
  return request(url, method, params);
}
