/**
 * Notifications - Provider
 *
 */

// UI
import { NotificationsContext, useNotifications } from '../../../'

export const NotificationsProvider = ({ children, user }) => {
  const {
    data: { notifications },
    fetchNotifications
  } = useNotifications('messages', { active: true }, 25)

  return (
    <NotificationsContext.Provider
      value={{
        fetchNotifications,
        notifications,
        user
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}
