/**
 * API
 */

// Axios
import axios from 'axios'

// UI
import { apiConfig } from 'config'

export const Api = {
  init: () => {
    const mocker = require('api/client.mock')

    const bearerToken = window.localStorage.getItem('bearerToken')

    if (bearerToken) {
      apiConfig.headers.Authorization = 'Bearer ' + bearerToken
    }

    const http = axios.create(apiConfig)

    mocker.apply(http)

    return http
  },

  get: async (url, params) => {
    const http = Api.init()
    return http.get(url, { params })
  },

  post: async (url, data) => {
    const http = Api.init()
    return http.post(url, data)
  },

  put: async (url, data) => {
    const http = Api.init()
    return http.put(url, data)
  },

  delete: async url => {
    const http = Api.init()
    return http.delete(url)
  }
}
