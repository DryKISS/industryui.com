/**
 * API
 */

// Axios
import axios from 'axios'

// UI
import { apiConfig } from 'config'

const http = axios.create(apiConfig)

// Mock requests
const mocker = require('api/client.mock')
mocker.apply(http)

export const api = {

  get: async(url) => {
    return http.get(url)
  },

  post: async(url, data) => {
    return http.post(url, data)
  }

}