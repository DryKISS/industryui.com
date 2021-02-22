/**
 * Services - Notifications - Provider
 */
// React
import React from 'react'; // UI

import { NotificationsContext, useNotifications } from '../../';
export var NotificationsProvider = function NotificationsProvider(_ref) {
  var children = _ref.children,
      user = _ref.user;
  var items = useNotifications('messages', {
    active: true
  }, 25);
  return /*#__PURE__*/React.createElement(NotificationsContext.Provider, {
    value: {
      items: items,
      user: user
    }
  }, children);
};
NotificationsProvider.displayName = "NotificationsProvider";
//# sourceMappingURL=provider.js.map