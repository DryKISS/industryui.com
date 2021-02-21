import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Providers - Authorization
 */
// React
import React, { useContext, useEffect, useState } from 'react'; // Next

import Router, { useRouter } from 'next/router'; // UI

import { AuthorizationContext, ConfigContext, UserContext } from '../../';
export var AuthorizationProvider = function AuthorizationProvider(_ref) {
  var children = _ref.children;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useContext = useContext(UserContext),
      user = _useContext.user;

  var router = useRouter();

  var _useContext2 = useContext(ConfigContext),
      AccessPages = _useContext2.AccessPages,
      AccessRules = _useContext2.AccessRules;

  var permissions = user && user.role ? AccessRules[user.role] : []; // Check if the user is allowed page access

  useEffect(function () {
    if (router.pathname !== '/403') {
      if (!AccessPages[router.pathname]) {
        // Allow access to non-protected page
        setIsLoading(false);
      } else if (user && AccessPages[router.pathname] && AccessPages[router.pathname].includes(user.role)) {
        // Allow access to protected page when role is assigned
        setIsLoading(false);
      } else {
        // Not authorized, redirect to /403 page
        Router.push('/403');
      }
    } else {
      setIsLoading(false);
    }
  }, [router.pathname]);

  var hasAccess = function hasAccess(rule) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof permissions[rule] === 'boolean') {
      return permissions[rule];
    } else if (typeof permissions[rule] === 'function') {
      options.userId = user && user.id ? user.id : null;
      return permissions[rule](options);
    } else {
      return false;
    }
  };

  var checkRole = function checkRole(role) {
    // check
    var _role$split = role.split('_'),
        _role$split2 = _slicedToArray(_role$split, 2),
        type = _role$split2[0],
        subtype = _role$split2[1];

    if (subtype) {
      switch (subtype) {
        case 'owner':
          return user.role === type + '_owner';

        case 'manager':
          return user.role === type + '_owner' || user.role === type + '_manager';

        case 'user':
          return user.role.startsWith(type);

        default:
          return false;
      }
    } else {
      return user.role.startsWith(type);
    }
  };

  var hasRole = function hasRole(role) {
    if (user && user.role) {
      if (Array.isArray(role)) {
        return role.some(checkRole);
      } else {
        return checkRole(role);
      }
    }

    return false;
  };

  return !isLoading && /*#__PURE__*/React.createElement(AuthorizationContext.Provider, {
    value: {
      hasAccess: hasAccess,
      hasRole: hasRole
    }
  }, children);
};
//# sourceMappingURL=provider.js.map