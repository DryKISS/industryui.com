import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

/**
 * Components - Pricing
 */
// React
import React, { useEffect, useRef, useState } from 'react'; // Style

import styled, { css } from 'styled-components'; // UI

import { Button, Icon, LAYOUTS, PriceMatrix, PricingCard, PricingDropdown, ResizeDetector, Text } from '../../../';
export var Pricing = function Pricing(_ref) {
  var pricingInfo = _ref.pricingInfo,
      onPlanSelect = _ref.onPlanSelect;
  var WrapperRef = useRef(null);
  useEffect(function () {
    resetLayout();
    return function () {};
  }, []);

  var _useState = useState(LAYOUTS.DESKTOP),
      _useState2 = _slicedToArray(_useState, 2),
      Layout = _useState2[0],
      setLayout = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      SelectedPlan = _useState4[0],
      setSelectedPlan = _useState4[1];

  var resetLayout = function resetLayout() {
    var wrapper = WrapperRef.current;
    var width = wrapper.offsetWidth;

    if (width > 1920) {
      if (Layout !== LAYOUTS.LARGEDESKTOP) {
        setLayout(LAYOUTS.LARGEDESKTOP);
      }
    } else if (width > 1440) {
      if (Layout !== LAYOUTS.MEDDESKTOP) {
        setLayout(LAYOUTS.MEDDESKTOP);
      }
    } else if (width > 1024) {
      if (Layout !== LAYOUTS.DESKTOP) {
        setLayout(LAYOUTS.DESKTOP);
      }
    } else if (width > 768) {
      if (Layout !== LAYOUTS.TABLET) {
        setLayout(LAYOUTS.TABLET);
      }
    } else {
      if (Layout !== LAYOUTS.MOBILE) {
        setLayout(LAYOUTS.MOBILE);
      }
    }
  };

  var handlePlanChange = function handlePlanChange(planIndex) {
    setSelectedPlan(planIndex);
  };

  var handlePlanSelect = function handlePlanSelect(e) {
    onPlanSelect(e);
  };

  return /*#__PURE__*/React.createElement(Wrapper, {
    ref: WrapperRef
  }, /*#__PURE__*/React.createElement(ResizeDetector, {
    onResize: function onResize(_ref2) {
      var width = _ref2.width;
      return resetLayout(width);
    }
  }), /*#__PURE__*/React.createElement(PricesWrapper, null, /*#__PURE__*/React.createElement(React.Fragment, null, Layout.includes(LAYOUTS.DESKTOP) ? pricingInfo.map(function (item, index) {
    return /*#__PURE__*/React.createElement(PricingCard, {
      layout: Layout,
      onCardSelect: handlePlanSelect,
      data: item,
      key: index
    });
  }) : /*#__PURE__*/React.createElement(DropDownAndFeatues, null, /*#__PURE__*/React.createElement(PricingDropdown, {
    onPlanChange: handlePlanChange,
    pricingInfo: pricingInfo,
    selectedPlan: SelectedPlan
  }), /*#__PURE__*/React.createElement(FeaturesAndAdd, null, /*#__PURE__*/React.createElement("div", null, pricingInfo[SelectedPlan].checkList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(ListItem, {
      key: index
    }, /*#__PURE__*/React.createElement(Icon, {
      color: "rgb(69, 186, 190)",
      icon: "check",
      prefix: "fas"
    }), /*#__PURE__*/React.createElement(StyledFeature, {
      content: item.title,
      context: "dark",
      size: "sm"
    }));
  })), /*#__PURE__*/React.createElement(AddToCartWrapper, {
    fullWidth: Layout === LAYOUTS.MOBILE
  }, /*#__PURE__*/React.createElement(StyledButton, {
    block: true,
    context: "deepBlue",
    onClick: function onClick() {
      return handlePlanSelect(pricingInfo[SelectedPlan]);
    },
    outline: true
  }, "Add To Cart")))))), /*#__PURE__*/React.createElement(PriceMatrix, {
    pricingInfo: pricingInfo,
    layout: Layout,
    selectedPlan: SelectedPlan
  }));
};
Pricing.displayName = "Pricing";
var StyledButton = styled(Button)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  div {\n    font-weight: 600;\n  }\n"])));
var AddToCartWrapper = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-top: 1.875rem;\n  margin-bottom: 1.5rem;\n  width: 15rem;\n  ", "\n"])), function (_ref3) {
  var fullWidth = _ref3.fullWidth;
  return fullWidth && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      width: 100%;\n    "])));
});
var StyledFeature = styled(Text)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  line-height: 1.25rem;\n  padding-left: 0.375rem;\n"])));
var ListItem = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"])));
var FeaturesAndAdd = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  margin-top: 1.5rem;\n"])));
var DropDownAndFeatues = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var Wrapper = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  min-width: 21.25rem;\n"])));
var PricesWrapper = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n  position: relative;\n  width: 100%;\n"])));
//# sourceMappingURL=pricing.js.map