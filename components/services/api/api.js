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
    // Mock requests
    const mocker = require('api/client.mock')
    mocker.apply(http)
  },

  get: async(url) => {
    Api.init()
    return http.get(url)
  },

  post: async(url, data) => {
    Api.init()
    return http.post(url, data)
  }

}