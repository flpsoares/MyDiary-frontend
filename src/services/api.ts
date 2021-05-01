import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333/'
})

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  if (error.response && error.response.data) {
    return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
});

export default api