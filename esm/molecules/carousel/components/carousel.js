import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

/**
 * Carousel
 */
// React
import React, { useEffect, useState } from 'react'; // Style

import styled, { css } from 'styled-components'; // UI

import { Carouselnav } from './nav';
import { CarouselSampleSlide } from './sample';
import { Icon, Pagination, revert, ResizeDetector } from '../../../';
import { CarouselDefaultProps, CarouselPropTypes } from './props';
var interval;
export var Carousel = function Carousel(_ref) {
  var navContext = _ref.navContext,
      navPosition = _ref.navPosition,
      autoplay = _ref.autoplay,
      autoplayInterval = _ref.autoplayInterval,
      children = _ref.children,
      fullWidth = _ref.fullWidth,
      gap = _ref.gap,
      height = _ref.height,
      leftNavIcon = _ref.leftNavIcon,
      leftNavComponent = _ref.leftNavComponent,
      numberOfItems = _ref.numberOfItems,
      paginationProps = _ref.paginationProps,
      paginationPosition = _ref.paginationPosition,
      rightNavIcon = _ref.rightNavIcon,
      rightNavComponent = _ref.rightNavComponent,
      showNavs = _ref.showNavs,
      showPagination = _ref.showPagination,
      slides = _ref.slides,
      width = _ref.width;
  var dataSource = slides || children;
  dataSource = revert(dataSource);

  var _useState = useState((slides || children).length - 1),
      _useState2 = _slicedToArray(_useState, 2),
      currentImageIndex = _useState2[0],
      setCurrentImageIndex = _useState2[1];

  var _useState3 = useState(typeof numberOfItems === 'number' ? numberOfItems : 1),
      _useState4 = _slicedToArray(_useState3, 2),
      NumberOfItems = _useState4[0],
      setNumberOfItems = _useState4[1];

  var resetNumberOfItems = function resetNumberOfItems(width) {
    var found = false;

    for (var key in numberOfItems) {
      if (width <= Number(key) && found === false) {
        found = true;
        setNumberOfItems(numberOfItems[key]);
      }
    }

    if (found === false) {
      setNumberOfItems(10);
    }
  };

  useEffect(function () {
    if (autoplay === true) {
      interval = setInterval(function () {
        nextSlide();
      }, autoplayInterval);
    }

    return function () {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  var previousSlide = function previousSlide() {
    var lastIndex = dataSource.length - 1;
    var shouldResetIndex = currentImageIndex === lastIndex;
    var index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  var nextSlide = function nextSlide() {
    var lastIndex = dataSource.length - 1;
    var shouldResetIndex = currentImageIndex === NumberOfItems - 1;
    var index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  var renderPagination = function renderPagination() {
    return /*#__PURE__*/React.createElement(PaginationWrapper, null, /*#__PURE__*/React.createElement(Pagination, _extends({
      currentPage: dataSource.length - currentImageIndex,
      nextLabel: /*#__PURE__*/React.createElement(Icon, {
        icon: "chevron-right"
      }),
      onPageChange: function onPageChange(page) {
        setCurrentImageIndex(dataSource.length - page);
      },
      pageCount: dataSource.length,
      prevLabel: /*#__PURE__*/React.createElement(Icon, {
        icon: "chevron-left"
      }),
      showNextAndPrev: true,
      size: "xs"
    }, paginationProps)));
  };

  var hasNavigation = Array.isArray(dataSource) && dataSource.length > 1;

  var navComponents = function navComponents() {
    var components = {
      left: /*#__PURE__*/React.createElement(Carouselnav, {
        context: navContext,
        clickFunction: previousSlide,
        direction: "left",
        icon: leftNavIcon,
        position: navPosition
      }),
      right: /*#__PURE__*/React.createElement(Carouselnav, {
        context: navContext,
        clickFunction: nextSlide,
        direction: "right",
        icon: rightNavIcon,
        position: navPosition
      })
    };

    if (leftNavComponent) {
      components.left = /*#__PURE__*/React.createElement(NavWrapper, {
        componentPosition: navPosition,
        onClick: nextSlide
      }, leftNavComponent);
    }

    if (rightNavComponent) {
      components.right = /*#__PURE__*/React.createElement(NavWrapper, {
        componentPosition: navPosition,
        endNav: true,
        onClick: previousSlide
      }, rightNavComponent);
    }

    return components;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Wrapper, {
    width: width,
    height: height,
    fullWidth: fullWidth
  }, typeof numberOfItems !== 'number' && /*#__PURE__*/React.createElement(ResizeDetector, {
    onResize: function onResize(_ref2) {
      var width = _ref2.width;
      return resetNumberOfItems(width);
    }
  }), hasNavigation && showNavs && navComponents().left, dataSource.map(function (item, index) {
    return /*#__PURE__*/React.createElement(ItemWrapper, {
      gap: gap,
      width: "calc(".concat(100 / NumberOfItems, "% - ").concat(gap, "px)"),
      transform: "translateX(calc(".concat(currentImageIndex - index, " * calc(100% + ").concat(gap, "px)))"),
      key: 'slide' + index
    }, slides ? /*#__PURE__*/React.createElement(CarouselSampleSlide, item) : dataSource[index]);
  }), hasNavigation && showPagination && paginationPosition === 'inside' && renderPagination(), hasNavigation && showNavs && navComponents().right), hasNavigation && showPagination && paginationPosition === 'outside' && renderPagination());
};
var ItemWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: absolute;\n  transition: all 0.5s ease;\n  ", "\n"])), function (_ref3) {
  var gap = _ref3.gap,
      transform = _ref3.transform,
      width = _ref3.width;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-left: ", "px;\n    transform: ", ";\n    width: ", ";\n  "])), gap / 2, transform, width);
});
var NavWrapper = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  align-items: ", ";\n\n  display: flex;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n  cursor: pointer;\n\n  ", "\n"])), function (_ref4) {
  var componentPosition = _ref4.componentPosition;
  return componentPosition === 'top' ? 'flex-start' : componentPosition === 'bottom' ? 'flex-end' : 'center';
}, function (_ref5) {
  var endNav = _ref5.endNav;
  return endNav === true && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      right: 0;\n    "])));
});
var Wrapper = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  height: ", ";\n  min-height: ", ";\n  margin: 0;\n  position: relative;\n  width: ", ";\n"])), function (_ref6) {
  var height = _ref6.height;
  return height;
}, function (_ref7) {
  var height = _ref7.height;
  return height;
}, function (_ref8) {
  var width = _ref8.width,
      fullWidth = _ref8.fullWidth;
  return fullWidth ? '100%' : width;
});
var PaginationWrapper = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  margin: 1rem 0;\n  width: 100%;\n"])));
Carousel.defaultProps = CarouselDefaultProps;
Carousel.propTypes = CarouselPropTypes;
//# sourceMappingURL=carousel.js.map