import { useSelector } from 'react-redux'
import axios from '../axios/axios'
import { axiosPrivate } from '../axios/axios'

const useRefreshToken = () => {
  let user = useSelector((state) => state?.userState)
  const refresh = async () => {
    const response = await axiosPrivate.get('/refresh', {
      withCredentials: true,
    })
    user = { ...user, accessToken: response.data.accessToken }
    return response?.data?.accessToken
  }
  return refresh
}

export default useRefreshToken
