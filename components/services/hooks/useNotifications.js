/**
 * Services - Hooks  - useNotifications
 *
 */

// React
import { useState, useEffect } from 'react'

// UI
import { Api, useInterval } from '../../../'

export const useNotifications = (url, params = {}, seconds = 60) => {
  const [data, setData] = useState({ messages: [] })

  if (!url) {
    return { data }
  }

  const fetchNotifications = async () => {
    const res = await Api.get(url, params)

    if (res.status === 200 && res.data.messages) {
      window.localStorage.setItem('active-notifications', JSON.stringify(res.data.messages))
      setData({ notifications: res.data.messages })
    }
  }

  useInterval(() => {
    fetchNotifications()
  }, seconds * 1000)

  useEffect(() => {
    fetchNotifications()
  }, [])

  return { data, fetchNotifications }
}
