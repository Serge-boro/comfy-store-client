import axios from 'axios'
const BASE_URL =
  'https://rad-sprinkles-ccb0d8.netlify.app/.netlify/functions/app'
// const BASE_URL = 'http://localhost:4002/store'

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
