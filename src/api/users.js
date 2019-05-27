import axios from 'axios'
export function getusers() {
  return axios.get('/gbny/order/users')
}
export function getPaginationList(params) {
  return axios.get(`/api/idcs/?page=${params.page}`)
}
