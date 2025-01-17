import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// RefreshToken
// import { axiosRefreshToken } from '@/service/axiosRefreshToken';

// Error Handler
// import { axiosErrorHandler } from '@/service/axiosErrorHandler';

declare module '@tanstack/react-query' {
  interface Register {
    defaultError: AxiosError
  }
}

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'api',
  timeout: 4000 * 10,
  withCredentials: true,
})

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response?.data?.data
  },
)

export default api
