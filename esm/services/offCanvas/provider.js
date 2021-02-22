import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject;

/**
 * Services - OffCanvas - Provider
 */
// React
import React, { useState } from 'react'; // Styled Components

import styled from 'styled-components'; // UI

import { getLast, getFirst, OffCanvas, OffCanvasContext } from '../../';
var DURATION = 300;
export var OffCanvasProvider = function OffCanvasProvider(_ref) {
  var children = _ref.children;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataManager = _useState2[0],
      setDataManager = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      visibilityManager = _useState4[0],
      setVisibilityManager = _useState4[1];

  var handleClose = function handleClose() {
    setVisibilityManager(function (prev) {
      prev.pop();
      return _toConsumableArray(prev);
    }); // Prevent data to disappear suddenly on close

    setTimeout(function () {
      setDataManager(function (prev) {
        prev.pop();
        return _toConsumableArray(prev);
      });
    }, dataManager.length === 1 ? DURATION : 0);
  };

  var handleShow = function handleShow(data) {
    if (data && data.content) {
      setVisibilityManager(function (prev) {
        return [].concat(_toConsumableArray(prev), [true]);
      });
      setDataManager(function (prev) {
        return [].concat(_toConsumableArray(prev), [data]);
      });
    } else {
      handleClose();
    }
  }; // Get width and placement from first item


  var options = getFirst(dataManager); // Get title and content from last item

  var data = getLast(dataManager);
  return /*#__PURE__*/React.createElement(OffCanvasContext.Provider, {
    value: {
      show: handleShow,
      close: handleClose
    }
  }, children, /*#__PURE__*/React.createElement(OffCanvas, {
    context: data === null || data === void 0 ? void 0 : data.context,
    handleSubmit: data === null || data === void 0 ? void 0 : data.handleSubmit,
    hasAvatar: data === null || data === void 0 ? void 0 : data.hasAvatar,
    headerContent: data === null || data === void 0 ? void 0 : data.headerContent,
    headerText: (data === null || data === void 0 ? void 0 : data.title) || '',
    lockScrollOnOpen: true,
    overlay: true,
    overlayOpacity: data === null || data === void 0 ? void 0 : data.overlayOpacity,
    placement: options === null || options === void 0 ? void 0 : options.placement,
    submit: data === null || data === void 0 ? void 0 : data.submit,
    show: !!visibilityManager.length,
    toggleShow: handleClose,
    transitionDuration: DURATION,
    variant: data === null || data === void 0 ? void 0 : data.variant,
    width: options === null || options === void 0 ? void 0 : options.width
  }, dataManager.map(function (d, i) {
    return /*#__PURE__*/React.createElement(StyledWrapper, {
      key: i,
      show: i + 1 === dataManager.length
    }, d.content);
  })));
};
OffCanvasProvider.displayName = "OffCanvasProvider";
var StyledWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var show = _ref2.show;
  return !show && 'display:none';
});
//# sourceMappingURL=provider.js.map