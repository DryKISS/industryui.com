/**
 * Services - Notifications - useNotifications
 *
 * id - integer, primary key, unique, default: nextval('"Notification_id_seq1"'::regclass)
 * status - character varying, nullable
 * createdAt - timestamp without time zone, nullable, default: now()
 * updatedAt - timestamp without time zone, nullable
 * archivedAt - timestamp without time zone, nullable
 * communicationId - integer
 * userId - integer
 */

// Apollo
import { gql, useSubscription } from '@apollo/client'

const useNotifications = (url, params = {}, seconds = 60) => {
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
    data: { items } = {
      items: []
    }
  } = useSubscription(GET_NOTIFICATIONS, {
    variables: {
      userId: 48
    }
  })

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

export default useNotifications
