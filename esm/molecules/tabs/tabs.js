import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

/**
 * Components - Molecules - Tabs - Components - Tabs
 */
// React
import React, { createRef, useEffect, useState } from 'react';
import { array, bool, number, object, oneOfType, string } from 'prop-types'; // Next

import Router, { useRouter } from 'next/router'; // UI

import { slugify } from '../../../';
import { Tab } from './tab'; // Style

import styled, { css } from 'styled-components';
export var handleScroll = function handleScroll(el, grabWalkSpeed, grabTimeout) {
  var slider = el;
  var clickTime;
  var isDown = false;
  var isScrolling = false;
  var startX;
  var sl;
  slider.addEventListener('mousedown', function (e) {
    clickTime = e.timeStamp;
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    sl = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', function () {
    isDown = false;
    isScrolling = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', function () {
    isDown = false;
    isScrolling = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', function (e) {
    if (isScrolling || isDown && e.timeStamp - clickTime > grabTimeout) {
      e.preventDefault();
      slider.classList.add('active');
      var x = e.pageX - slider.offsetLeft;
      var walk = x - startX;
      isScrolling = true;
      slider.scrollLeft = sl - walk + grabWalkSpeed;
    }
  });
};
export var TabContent = function TabContent(_ref) {
  var activeTab = _ref.activeTab,
      children = _ref.children;
  return children[activeTab.index].props.children;
}; // Active

var active = '';
export var Tabs = function Tabs(_ref2) {
  var centerTabs = _ref2.centerTabs,
      children = _ref2.children,
      className = _ref2.className,
      indicatorSize = _ref2.indicatorSize,
      gap = _ref2.gap,
      grabbable = _ref2.grabbable,
      grabWalkSpeed = _ref2.grabWalkSpeed,
      grabTimeout = _ref2.grabTimeout,
      handleChange = _ref2.handleChange,
      onTabChange = _ref2.onTabChange,
      scrollToActiveTab = _ref2.scrollToActiveTab;
  var router = useRouter();
  var wrapperRef = /*#__PURE__*/createRef();
  useEffect(function () {
    if (grabbable) {
      handleScroll(wrapperRef.current, grabWalkSpeed, grabTimeout);
    }
  }, []);

  if (!Array.isArray(children)) {
    children = React.Children.toArray(children);
  } // Find active in children if more than one tab or make first active


  if (children.length > 1) {
    children.forEach(function (child, index) {
      if (child.props.active === true) {
        active = {
          index: index,
          label: slugify(child.props.label)
        };
      }
    });
  } else {
    active = {
      index: 0,
      label: slugify(children[0].props.label)
    };
  }

  var _useState = useState(active),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var onClickTabItem = function onClickTabItem(_ref3) {
    var index = _ref3.index,
        label = _ref3.label;
    var tab = slugify(label);
    setActiveTab({
      index: index,
      label: tab
    });

    if (handleChange) {
      handleRoute(tab);
    }

    if (onTabChange) {
      onTabChange(tab);
    }
  };

  var handleRoute = function handleRoute(tab) {
    var query = router.query;
    delete query.tab;
    query.tab = tab;
    Router.push({
      pathname: router.pathname,
      query: query,
      shallow: true
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledTabs, {
    centerTabs: centerTabs,
    className: className,
    gap: gap,
    grabbable: grabbable,
    ref: wrapperRef
  }, children.map(function (_ref4, index) {
    var props = _ref4.props;
    return /*#__PURE__*/React.createElement(Tab, _extends({
      activeTab: activeTab,
      index: index,
      key: props.label,
      onClick: !props.disabled && onClickTabItem,
      scrollToActiveTab: scrollToActiveTab,
      gap: gap,
      indicatorSize: indicatorSize
    }, props));
  })), /*#__PURE__*/React.createElement(TabContent, {
    activeTab: activeTab,
    children: children
  }));
};
var StyledTabs = styled.ol(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: flex-end;\n  border-bottom: 1px solid ", ";\n  display: flex;\n  ", "\n\n  ", "\n\n  margin: 0 0 1rem 0;\n  padding-left: 0;\n  overflow-x: scroll;\n  user-select: none;\n  white-space: nowrap;\n  -ms-overflow-style: none;\n  &&::-webkit-scrollbar {\n    display: none;\n  }\n\n  ", "\n"])), function (_ref5) {
  var theme = _ref5.theme;
  return theme.TABS.borderColour;
}, function (_ref6) {
  var gap = _ref6.gap;
  return gap !== 0 && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      gap: ", "px;\n    "])), gap);
}, function (_ref7) {
  var centerTabs = _ref7.centerTabs;
  return centerTabs && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      justify-content: center;\n    "])));
}, function (_ref8) {
  var grabbable = _ref8.grabbable;
  return grabbable && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      &.active {\n        cursor: grabbing;\n\n        li {\n          cursor: grabbing;\n          pointer-events: none;\n        }\n      }\n    "])));
});
Tabs.propTypes = {
  centerTabs: bool,
  children: oneOfType([array, object]).isRequired,
  className: string,
  gap: number,
  grabbable: bool,
  grabWalkSpeed: number,
  grabTimeout: number,
  handleChange: bool,
  indicatorSize: number,
  scrollToActiveTab: bool
};
Tabs.defaultProps = {
  centerTabs: false,
  gap: 0,
  grabbable: true,
  grabWalkSpeed: 25,
  grabTimeout: 100,
  handleChange: true,
  indicatorSize: 1,
  scrollToActiveTab: true
};
//# sourceMappingURL=tabs.js.map