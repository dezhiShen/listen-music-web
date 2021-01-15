import axios from '@/utils/http.js'
export function register (params) {
  return axios({
    url: '/system/account/regsiter',
    method: 'post',
    data: params
  })
}
export function login ({loginName, password}) {
  return axios({
    url: `/system/account/login?loginName=${loginName}&password=${password}`,
    method: 'post'
  })
}
