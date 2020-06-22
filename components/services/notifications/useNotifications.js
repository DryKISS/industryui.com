/**
 * Services - Hooks  - useNotifications
 *
 * id - integer, primary key, unique, default: nextval('"Notification_id_seq1"'::regclass)
 * status - character varying, nullable
 * createdAt - timestamp without time zone, nullable, default: now()
 * updatedAt - timestamp without time zone, nullable
 * archivedAt - timestamp without time zone, nullable
 * communicationId - integer
 * userId - integer
 */

// React
import { useState, useEffect } from 'react'

// Apollo
import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

// UI
import { Api, useInterval } from '../../../'

export const useNotifications = (url, params = {}, seconds = 60) => {
  // const [data, setData] = useState({ messages: [] })

  // if (!url) {
  //   return { data }
  // }

  const GET_NOTIFICATIONS = gql`
    subscription GetNotifications($userId: Int) {
      items: Notification(where: { userId: { _eq: $userId } }) {
        id
        notification: Communication {
          message: content
          priority
          createdAt
        }
      }
    }
  `

  const {
    loading,
    data: { items } = {
      items: []
    }
  } = useSubscription(GET_NOTIFICATIONS, {
    variables: {
      userId: 48
    }
  })

  // Debug
  // console.log('useNotifications')
  // console.log('Params', url, params, seconds)
  // console.log('Loading', loading)
  // console.log('Items', items)

  // const fetchNotifications = async () => {
  //   const res = await Api.get(url, params)

  //   if (res.status === 200 && res.data.messages) {
  //     window.localStorage.setItem('active-notifications', JSON.stringify(res.data.messages))
  //     setData({ notifications: res.data.messages })
  //   }
  // }

  // useInterval(() => {
  //   fetchNotifications()
  // }, seconds * 1000)

  // useEffect(() => {
  //   fetchNotifications()
  // }, [])

  // return { data, fetchNotifications }
  return items
}
