/**
 * Notifications - Provider
 */

// UI
import { NotificationsContext, useNotifications } from '../../../'

export const NotificationsProvider = ({ children, user }) => {
  // const {
  //   data: { notifications },
  //   fetchNotifications
  // } = useNotifications('messages', { active: true }, 25)

  const items = useNotifications('messages', { active: true }, 25)

  // Debug
  console.log('NotificationsProvider', items)

  // return (
  //   <NotificationsContext.Provider
  //     value={{
  //       fetchNotifications,
  //       notifications,
  //       user
  //     }}
  //   >
  //     {children}
  //   </NotificationsContext.Provider>
  // )

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
