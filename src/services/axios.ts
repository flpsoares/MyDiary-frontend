import axios from 'axios'

import { parseCookies } from 'nookies'

export function getAPIClient(ctx?: any) {
  const { 'mydiary-token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://flpmydiary.herokuapp.com/'
  })

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  return api
}
