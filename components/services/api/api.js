/**
 * API
 */

// React
import { useContext } from 'react'

// Axios
import axios from 'axios'

// UI
import ConfigContext from '../config/context'

 const Api = () => {
  const { config } = useContext(ConfigContext)

  const { apiConfig } = config

  return {
    init: () => {
      const mocker = {}

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

    delete: async (url) => {
      const http = Api.init()
      return http.delete(url)
    }
  }
}
export default Api
