import axios from 'axios'
const BASE_URL =
  'https://rad-sprinkles-ccb0d8.netlify.app/.netlify/functions/app'
// const BASE_URL = 'http://localhost:4002/store'

const AccessControlAllowOrigin_dev = 'http://localhost:5173'
const AccessControlAllowOrigin_prod =
  'https://react-node-express-jwt-mongodb.netlify.app'

export default axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    // 'Access-Control-Allow-Origin':
    //   'https://rad-sprinkles-ccb0d8.netlify.app/.netlify/functions/app/refresh',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Origin': `${AccessControlAllowOrigin_prod}`,
  },
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    // 'Access-Control-Allow-Origin':
    //   'https://rad-sprinkles-ccb0d8.netlify.app/.netlify/functions/app/refresh',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Origin': `${AccessControlAllowOrigin_prod}`,
  },
})
