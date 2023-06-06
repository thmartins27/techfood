import axios, { AxiosError } from 'axios'

const api = axios.create({ baseURL: 'http://localhost:5000/' })
const token: any = sessionStorage.getItem('token')
axios.defaults.headers.common['authorization'] = token

export { api, AxiosError }