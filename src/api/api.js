import axios from 'axios'
import store from '@/store/index'
import global from '@/components/Global'

axios.defaults.baseURL = global.ApiUrl
axios.defaults.timeout = 10000

export async function request (url, method, params) {
  let response
  const options = { url, method }
  console.log(url + " " + Date.now())
  if (typeof params !== 'undefined') {
    if (method === 'get' || method === 'delete') {
      options.params = params
    } else {
      options.data = params
    }
  }
  response = await axios(options)
  console.log(url + " " +Date.now())
  return response
}
