import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333/'
})

api.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    return Promise.reject(error.response.data.errors[0].message)
  }
)

export default api