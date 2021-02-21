import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

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
// Apollo
import { useSubscription } from '@apollo/client';
import gql from 'graphql-tag';
export var useNotifications = function useNotifications(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var seconds = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60;
  // const [data, setData] = useState({ messages: [] })
  // if (!url) {
  //   return { data }
  // }
  var GET_NOTIFICATIONS = gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    subscription GetNotifications($userId: Int) {\n      items: Notification(where: { userId: { _eq: $userId } }) {\n        id\n        notification: Communication {\n          message: content\n          priority\n          createdAt\n        }\n      }\n    }\n  "])));

  var _useSubscription = useSubscription(GET_NOTIFICATIONS, {
    variables: {
      userId: 48
    }
  }),
      _useSubscription$data = _useSubscription.data;

  _useSubscription$data = _useSubscription$data === void 0 ? {
    items: []
  } : _useSubscription$data;
  var items = _useSubscription$data.items; // const fetchNotifications = async () => {
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

  return items;
};
//# sourceMappingURL=useNotifications.js.map