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

export const useAxios = (url, initialValue) => {
  const [data, setData] = useState({ ...initialValue, isLoading: true })

  useEffect(() => {
    const config = {
      baseURL: 'https://api.drykiss.com/',
      timeout: 0,
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        'X-API-VERSION': '1.0'
      }
    }

    const http = axios.create(config)

    // Mock requests
    const mocker = require('api/client.mock')
    mocker.apply(http)

    const fetchData = async () => {
      const response = await http.get(url)

      if (response.status === 200) {
        setData({ ...response.data, isLoading: false })
      }
    }

    fetchData()
  }, [url])

  return { data }
}
