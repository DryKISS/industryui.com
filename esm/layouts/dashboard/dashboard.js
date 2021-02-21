import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Layouts - Dashboard
 */
// React
import React, { Suspense } from 'react';
import { any, bool, node, oneOf, shape, string } from 'prop-types'; // UI

import { Alert, LdsSpinner, Page, PageLoading, Space } from '../../';
import { THEME_CONTEXT } from '../../theme/constants/context';
export var Dashboard = function Dashboard(_ref) {
  var children = _ref.children,
      meta = _ref.meta,
      pageHeading = _ref.pageHeading,
      resultAlert = _ref.resultAlert,
      View = _ref.View;
  var context = resultAlert.context,
      message = resultAlert.message;
  var defaultMeta = {
    description: 'Admin',
    path: '/',
    title: 'Admin'
  };

  var mergedMeta = _objectSpread(_objectSpread({}, defaultMeta), meta);

  return /*#__PURE__*/React.createElement(Suspense, {
    fallback: /*#__PURE__*/React.createElement(PageLoading, {
      indicator: /*#__PURE__*/React.createElement(LdsSpinner, null)
    })
  }, /*#__PURE__*/React.createElement(Page, {
    fluid: true,
    meta: mergedMeta,
    pageHeading: pageHeading
  }, View || children, message && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Space, null), /*#__PURE__*/React.createElement(Alert, {
    content: message,
    context: context
  }))));
};
Dashboard.displayName = "Dashboard";
Dashboard.propTypes = {
  children: node,
  meta: shape({
    description: string,
    path: string,
    title: string
  }),
  pageHeading: shape({
    center: bool,
    context: oneOf(Object.values(THEME_CONTEXT)),
    divider: bool,
    heading: any.isRequired,
    help: bool,
    helpContent: any,
    strapline: string
  }),
  resultAlert: shape({
    context: string,
    message: string
  }),
  View: node
};
Dashboard.defaultProps = {
  resultAlert: {
    context: 'success',
    message: ''
  }
};
//# sourceMappingURL=dashboard.js.map