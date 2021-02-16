/**
 * Services - Notifications - Provider
 */

// React
import React from 'react'

// UI
import { NotificationsContext, useNotifications } from '../../'

export const NotificationsProvider = ({ children, user }) => {
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
