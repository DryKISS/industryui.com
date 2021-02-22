import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2;

/**
 * Components - Atoms - Details2
 */
// React
import React, { useEffect, useRef, useState } from 'react'; // UI

import { DetailsSubscriber, Details2Header, Details2Content, MessageNames, useComponentCommunication } from '../../../';
import { Details2PropTypes, Details2DefaultProps } from '../props'; // Style

import styled, { css } from 'styled-components';
export var Details2 = function Details2(_ref) {
  var animationDuration = _ref.animationDuration,
      children = _ref.children,
      contentStyle = _ref.contentStyle,
      context = _ref.context,
      disableAnimation = _ref.disableAnimation,
      endActionComponent = _ref.endActionComponent,
      fitParentHeight = _ref.fitParentHeight,
      headerContext = _ref.headerContext,
      iconComponent = _ref.iconComponent,
      open = _ref.open,
      startActionComponent = _ref.startActionComponent,
      style = _ref.style,
      title = _ref.title,
      titleContext = _ref.titleContext,
      toolbar = _ref.toolbar,
      uniqueId = _ref.uniqueId,
      unmountContentOnClose = _ref.unmountContentOnClose;
  var animationTime = disableAnimation ? 0 : animationDuration;

  var _useState = useState(open),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setisOpen = _useState2[1];

  var _useState3 = useState(unmountContentOnClose ? open : true),
      _useState4 = _slicedToArray(_useState3, 2),
      mounted = _useState4[0],
      setMounted = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      contentHeight = _useState6[0],
      setcontentHeight = _useState6[1];

  var contentRef = useRef(null);
  useEffect(function () {
    if (unmountContentOnClose) {
      isOpen ? setMounted(function () {
        return true;
      }) : setTimeout(function () {
        window && window.requestAnimationFrame(function () {
          setMounted(function () {
            return false;
          });
        });
      }, animationTime !== null && animationTime !== void 0 ? animationTime : 300);
    }

    setTimeout(function () {
      window && window.requestAnimationFrame(function () {
        contentRef.current && setcontentHeight(function () {
          return contentRef.current.offsetHeight;
        });
      });
    }, !isOpen ? animationTime !== null && animationTime !== void 0 ? animationTime : 300 : 0);
    return function () {};
  }, [contentRef.current, isOpen]);

  var handleEventRecieve = function handleEventRecieve(e) {
    setisOpen(e);
  };

  useComponentCommunication({
    id: uniqueId,
    messageName: MessageNames.DetailsComponent.SET_OPEN,
    onRecieve: function onRecieve(e) {
      return handleEventRecieve(e);
    },
    subscriber: DetailsSubscriber
  });

  var handleOpenClose = function handleOpenClose() {
    setisOpen(function (isOpen) {
      return !isOpen;
    });
  };

  return /*#__PURE__*/React.createElement(Wrapper, {
    context: context,
    style: style,
    fitParentHeight: fitParentHeight,
    open: isOpen
  }, /*#__PURE__*/React.createElement(Details2Header, {
    animationtime: animationTime,
    children: children,
    headerContext: headerContext,
    handleOpenClose: handleOpenClose,
    iconComponent: iconComponent,
    isOpen: isOpen,
    title: title,
    titleContext: titleContext
  }), children && /*#__PURE__*/React.createElement(Details2Content, {
    animationTime: animationTime,
    children: children,
    contentRef: contentRef,
    fitParentHeight: fitParentHeight,
    isOpen: isOpen,
    maxHeight: contentHeight,
    mounted: mounted
  }));
};
Details2.displayName = "Details2";
var Wrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background: ", ";\n  border-bottom: 2px solid\n    ", ";\n  transition: height 0.3 cubic-bezier(0.4, 0, 0.2, 1);\n  width: 100%;\n\n  ", "\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.DETAILS2.wrapper.background;
}, function (_ref3) {
  var theme = _ref3.theme,
      context = _ref3.context;
  return context ? theme.COLOUR[context] : 'white';
}, function (_ref4) {
  var fitParentHeight = _ref4.fitParentHeight,
      open = _ref4.open;
  return fitParentHeight && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        height: ", ";\n      "])), !open ? '3.6rem' : '100%');
});
Details2.propTypes = Details2PropTypes;
Details2.defaultProps = Details2DefaultProps;
//# sourceMappingURL=details2.js.map