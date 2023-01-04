import {request} from "@/api/api";

export async function exhaustControlReq (method, params) {
  const url = '/api/get/exhaustControl';
  return request(url, method, params);
}
