import axios from 'axios'

import AlertEvents from '../events/AlertEvents'

const api = axios.create({
  baseURL: 'http://localhost:3333/'
})

api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    AlertEvents.emit('currentError', error.response.data.errors[0].message)
  }
)

export default api
