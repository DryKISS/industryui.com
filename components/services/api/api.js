/**
 * API
 */

// Axios
import axios from 'axios'

// UI
import { apiConfig } from 'config'

const http = axios.create(apiConfig)

export const api = {

  init: () => {
    // Mock requests
    const mocker = require('api/client.mock')
    mocker.apply(http)
  },

  get: async(url) => {
    init()
    return http.get(url)
  },

  post: async(url, data) => {
    init()
    return http.post(url, data)
  }

}