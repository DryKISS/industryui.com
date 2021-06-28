/**
 * Services - Hooks  - useAxios
 */

// React
import { useContext, useState, useEffect } from 'react'

// Axios
import axios from 'axios'

// UI
import ConfigContext from '../services/config/context'

const useAxios = (url, params, initialValue) => {
  const { apiConfig } = useContext(ConfigContext)
  const [data, setData] = useState({ ...initialValue, isLoading: true })

  useEffect(() => {
    const bearerToken = window.localStorage.getItem('bearerToken')

    if (bearerToken) {
      apiConfig.headers.Authorization = 'Bearer ' + bearerToken
    }

    const http = axios.create(apiConfig)

    // Mock requests
    const mocker = {}
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
  }, [url])

  return { data }
}

export default useAxios
