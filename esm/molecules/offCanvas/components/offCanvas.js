import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Molecules - OffCanvas
 */
// React
import React, { useState, useEffect } from 'react';
import { bool, func, node, number, oneOf, string } from 'prop-types'; // UI

import { OffCanvasDiv, OffCanvasHeader, OffCanvasContent, OffCanvasOverlay } from '../../../';
import { THEME_CONTEXT } from '../../../theme/constants/context';
export var OffCanvasComponent = function OffCanvasComponent(_ref) {
  var children = _ref.children,
      closeOnOverlayClick = _ref.closeOnOverlayClick,
      context = _ref.context,
      hasAvatar = _ref.hasAvatar,
      headerText = _ref.headerText,
      headerContent = _ref.headerContent,
      height = _ref.height,
      overlay = _ref.overlay,
      overlayOpacity = _ref.overlayOpacity,
      placement = _ref.placement,
      show = _ref.show,
      submit = _ref.submit,
      toggleShow = _ref.toggleShow,
      transitionDuration = _ref.transitionDuration,
      variant = _ref.variant,
      width = _ref.width;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      initialState = _useState2[0],
      setInitialState = _useState2[1];

  useEffect(function () {
    if (show) {
      setTimeout(function () {
        return setInitialState(true);
      }, 1);
    } else {
      setInitialState(false);
    }
  }, [show]);

  var handleOverlayClick = function handleOverlayClick() {
    if (closeOnOverlayClick) {
      toggleShow(false);
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, overlay && /*#__PURE__*/React.createElement(OffCanvasOverlay, {
    duration: transitionDuration,
    onClick: handleOverlayClick,
    opacity: overlayOpacity,
    show: initialState
  }), /*#__PURE__*/React.createElement(OffCanvasDiv, {
    "data-cy": "offCanvas",
    duration: transitionDuration,
    height: height,
    placement: placement,
    show: initialState,
    width: width
  }, /*#__PURE__*/React.createElement(OffCanvasHeader, {
    context: context,
    hasAvatar: hasAvatar,
    headerContent: headerContent,
    onClose: function onClose(e) {
      return toggleShow(false);
    },
    submit: submit,
    title: headerText,
    variant: variant
  }), /*#__PURE__*/React.createElement(OffCanvasContent, null, children)));
};
OffCanvasComponent.propTypes = {
  children: node,
  closeOnOverlayClick: bool,
  context: oneOf(Object.values(THEME_CONTEXT)),
  hasAvatar: bool,
  headerText: string.isRequired,
  headerContent: string,
  height: string,
  overlay: bool,
  overlayOpacity: number,
  placement: oneOf(['top', 'right', 'bottom', 'left']),
  show: bool.isRequired,
  submit: bool,
  toggleShow: func.isRequired,
  transitionDuration: number,
  variant: string,
  width: string
};
OffCanvasComponent.defaultProps = {
  closeOnOverlayClick: true,
  context: 'secondary',
  hasAvatar: false,
  overlay: true,
  overlayOpacity: 0.3,
  placement: 'right',
  submit: true,
  transitionDuration: 300,
  width: '30vw'
};
//# sourceMappingURL=offCanvas.js.map