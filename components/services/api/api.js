/**
 * API
 */

// Axios
import axios from 'axios'

// UI
import { apiConfig } from 'config'

const http = axios.create(apiConfig)

export const Api = {
  init: () => {
    const mocker = require('api/client.mock')
    mocker.apply(http)
  },

  get: async (url, params) => {
    Api.init()
    return http.get(url, { params })
  },

  post: async (url, data) => {
    Api.init()
    return http.post(url, data)
  },

  put: async (url, data) => {
    Api.init()
    return http.put(url, data)
  },

  delete: async (url) => {
    Api.init()
    return http.delete(url)
  }
}
