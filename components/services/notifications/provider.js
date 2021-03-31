/**
 * Services - Notifications - Provider
 */

// React
import React from 'react'

// UI
import NotificationsContext from './context'
import useNotifications from '../../services/notifications/useNotifications'

const NotificationsProvider = ({ children, user }) => {
  const items = useNotifications(
    'messages',
    {
      active: true
    },
    25
  )

  return (
    <NotificationsContext.Provider
      value={{
        items,
        user
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

export default NotificationsProvider
