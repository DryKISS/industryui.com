import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Molecules - Page Progress Bar
 */
// React
import React, { useEffect, useState } from 'react';
import { bool, object, oneOf, string } from 'prop-types'; // React NProgress

import { NProgress } from '@tanem/react-nprogress'; // UI

import { THEME_CONTEXT } from '../../../theme/constants/context'; // Components

import { Container } from './container';
import { Bar } from './bar';
export var PageProgressBar = function PageProgressBar(_ref) {
  var context = _ref.context,
      isAnimating = _ref.isAnimating,
      instanceKey = _ref.instanceKey,
      router = _ref.router;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isRouteChanging = _useState2[0],
      setIsRouteChanging = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      loadingKey = _useState4[0],
      setLoadingKey = _useState4[1];

  var routeChangeStartHandler = function routeChangeStartHandler() {
    setIsRouteChanging(true);
    setLoadingKey(new Date().getTime());
  };

  var routeChangeEndHandler = function routeChangeEndHandler() {
    setIsRouteChanging(false);
  };

  useEffect(function () {
    if (router) {
      router.events.on('routeChangeStart', routeChangeStartHandler);
      router.events.on('routeChangeComplete', routeChangeEndHandler);
      router.events.on('routeChangeError', routeChangeEndHandler);
    }
  }, []);
  return /*#__PURE__*/React.createElement(NProgress, {
    isAnimating: isRouteChanging || isAnimating,
    key: loadingKey || instanceKey
  }, function (_ref2) {
    var animationDuration = _ref2.animationDuration,
        isFinished = _ref2.isFinished,
        progress = _ref2.progress;
    return /*#__PURE__*/React.createElement(Container, {
      animationDuration: animationDuration,
      isFinished: isFinished
    }, /*#__PURE__*/React.createElement(Bar, {
      animationDuration: animationDuration,
      context: context,
      progress: progress
    }));
  });
};
PageProgressBar.displayName = "PageProgressBar";
PageProgressBar.propTypes = {
  context: oneOf(Object.values(THEME_CONTEXT)),
  isAnimating: bool,
  instanceKey: string,
  router: object
};
PageProgressBar.defaultProps = {
  context: 'info',
  isAnimating: false,
  instanceKey: null
};
//# sourceMappingURL=pageProgressBar.js.map