import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

/**
 * Components - Organisms - Pricing - Components - Card
 */
// React
import React from 'react'; // Style

import styled, { css } from 'styled-components'; // UI

import { CheckedIcon } from '../../../icons/components/checkedIcon';
import { priceLayoutSizes } from '../utils/index';
import { Text } from '../../../atoms/text/text';
export var PricingCard = function PricingCard(_ref) {
  var data = _ref.data,
      layout = _ref.layout,
      onCardSelect = _ref.onCardSelect;
  var checkList = data.checkList,
      recommended = data.recommended,
      price = data.price;
  return /*#__PURE__*/React.createElement(Wrapper, {
    layout: layout,
    recommended: recommended
  }, /*#__PURE__*/React.createElement(Title, {
    recommended: recommended
  }, data.title), /*#__PURE__*/React.createElement(ChecklistWrapper, null, checkList.map(function (item, index) {
    return /*#__PURE__*/React.createElement(ListItem, {
      key: index
    }, /*#__PURE__*/React.createElement(StyledCheckIcon, {
      size: 16,
      recommended: recommended // colour={recommended ? 'rgb(255, 202, 16)' : 'rgb(69, 186, 190)'}

    }), /*#__PURE__*/React.createElement(StyledText, {
      content: item.title,
      context: recommended ? 'white' : 'dark',
      size: priceLayoutSizes(layout).featuresTextSize
    }));
  })), /*#__PURE__*/React.createElement(FlexSpacer, null), /*#__PURE__*/React.createElement(Fee, {
    align: "center",
    content: price,
    recommended: recommended,
    size: "xl"
  }), /*#__PURE__*/React.createElement(AddButtonWrapper, {
    onClick: function onClick() {
      return onCardSelect(data);
    }
  }, /*#__PURE__*/React.createElement(AddToCartText, {
    align: "center",
    content: "Add To Cart",
    recommended: recommended,
    size: "sm"
  })));
};
PricingCard.displayName = "PricingCard";
var StyledCheckIcon = styled(CheckedIcon)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var PRICING = _ref2.theme.PRICING,
      recommended = _ref2.recommended;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    path {\n      fill: ", " !important;\n    }\n  "])), recommended ? PRICING.recommendedCardCheckedIconColour : PRICING.cardCheckedIconColour);
});
var AddToCartText = styled(Text)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 700;\n"])), function (_ref3) {
  var PRICING = _ref3.theme.PRICING,
      recommended = _ref3.recommended;
  return recommended ? PRICING.recommendedAddToCartTextColour : PRICING.addToCartTextColour;
});
var AddButtonWrapper = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  padding-top: 0.75rem;\n"])));
var FlexSpacer = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  flex: 1;\n"])));
var Fee = styled(Text)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid\n    ", ";\n  color: ", ";\n  font-weight: 700;\n  line-height: 1rem;\n  padding-bottom: 1.25rem;\n"])), function (_ref4) {
  var PRICING = _ref4.theme.PRICING,
      recommended = _ref4.recommended;
  return recommended ? PRICING.recommendedCardPriceTextColour : PRICING.cardPriceTextColour;
}, function (_ref5) {
  var PRICING = _ref5.theme.PRICING,
      recommended = _ref5.recommended;
  return recommended ? PRICING.recommendedCardPriceTextColour : PRICING.cardPriceTextColour;
});
var StyledText = styled(Text)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  line-height: 1.25rem;\n  padding-left: 0.375rem;\n"])));
var ListItem = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"])));
var ChecklistWrapper = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  padding-top: 0.75rem;\n"])));
var Title = styled.p(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid\n    ", ";\n  color: ", ";\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n  padding-bottom: 1.25rem;\n  text-align: center;\n"])), function (_ref6) {
  var theme = _ref6.theme,
      recommended = _ref6.recommended;
  return recommended ? theme.COLOUR.white : theme.COLOUR.dark;
}, function (_ref7) {
  var theme = _ref7.theme,
      recommended = _ref7.recommended;
  return recommended ? theme.COLOUR.white : theme.COLOUR.dark;
});
var Wrapper = styled.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background-color: ", ";\n\n  border: ", ";\n  border-radius: 1rem;\n\n  box-shadow: ", ";\n\n  display: flex;\n  flex-direction: column;\n  margin: 0 0.375rem;\n  min-height: ", ";\n  min-width: ", ";\n  padding: 1.375rem;\n  padding-bottom: 0.75rem;\n"])), function (_ref8) {
  var PRICING = _ref8.theme.PRICING,
      recommended = _ref8.recommended;
  return recommended ? PRICING.recommendedCardBackground : PRICING.cardBackground;
}, function (_ref9) {
  var theme = _ref9.theme,
      recommended = _ref9.recommended;
  return recommended ? 'none' : "1px solid ".concat(theme.COLOUR.dark);
}, function (_ref10) {
  var theme = _ref10.theme,
      recommended = _ref10.recommended;
  return recommended ? "0px 3px 8px ".concat(theme.COLOUR.darkBlue) : 'none';
}, function (_ref11) {
  var layout = _ref11.layout;
  return priceLayoutSizes(layout).priceCardHeight;
}, function (_ref12) {
  var layout = _ref12.layout;
  return priceLayoutSizes(layout).priceCardWidth;
});
//# sourceMappingURL=pricingCard.js.map