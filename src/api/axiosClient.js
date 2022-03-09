import axios from 'axios'
import queryString from 'query-string'

import apiConfig from './apiConfig'


const axiosClient = axios.create({
     baseURL: apiConfig.baseUrl,
     headers: {
          'Content-type': 'application/json'
     }
})