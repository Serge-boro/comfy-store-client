import axios from 'axios'
const BASE_URL = 'https://comfy-store-service.onrender.com/store'
// const BASE_URL = '/'

export default axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    //   // 'Access-Control-Allow-Origin': 'http://localhost:5173/',
  },
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
})