/**
 * Services - Hooks  - useAxios
 *
 * @todo Dynamic mock ability
 * @todo default headers
 * @todo API url from config or ENV
 */

// React
import { useState, useEffect } from 'react'

// Axios
import axios from 'axios'

// UI
import { apiConfig } from 'config'

export const useAxios = (url, params, initialValue) => {
  if (!url) {
    return { data: { isLoading: false } }
  }

  const [data, setData] = useState({ ...initialValue, isLoading: true })

  useEffect(
    () => {
      const bearerToken = window.localStorage.getItem('bearerToken')

      if (bearerToken) {
        apiConfig.headers.Authorization = 'Bearer ' + bearerToken
      }

      const http = axios.create(apiConfig)

      // Mock requests
      const mocker = require('api/client.mock')
      mocker.apply(http)

      const fetchData = async () => {
        try {
          const response = await http.get(url, { params })
          if (response.status === 200) {
            setData({ ...response.data, isLoading: false })
          }
        } catch (e) {
          const status = e.response ? e.response.status : 404
          setData({ status, isLoading: false })
        }
      }

      fetchData()
    },
    [url]
  )

  return { data }
}
