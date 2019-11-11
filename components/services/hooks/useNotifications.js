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

  useInterval(() => {
    const fetchNotifications = async () => {
      const res = await Api.get(url, params)

      if (res.status === 200 && res.data.messages) {
        window.localStorage.setItem('active-notifications', JSON.stringify(res.data.messages))
        setData({ messages: res.data.messages })
      }
    }

    fetchNotifications()
  }, seconds * 1000)

  useEffect(() => {
    // get notifications from localStorage
    const notifications = JSON.parse(window.localStorage.getItem('active-notifications'))
    if (notifications) {
      setData({ messages: notifications })
    }
  }, [])

  return { data }
}
