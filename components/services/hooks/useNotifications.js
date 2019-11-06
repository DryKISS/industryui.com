/**
 * Services - Hooks  - useNotifications
 *
 */

// React
import { useState } from 'react'

// UI
import { Api, useInterval } from '../../../'

export const useNotifications = (url, params = {}, seconds = 60) => {
  const [data, setData] = useState(null)

  if (!url) {
    return { data }
  }

  useInterval(() => {
    const fetchNotifications = async () => {
      const response = await Api.get(url, params)

      if (response.status === 200) {
        setData({ ...response.data, isLoading: false })
      }
    }

    fetchNotifications()
  }, seconds * 1000)

  return { data }
}
