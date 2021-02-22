import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

/**
 * Components - Organisms - Pricing
 */
// React
import React from 'react'; // Style

import styled, { css } from 'styled-components'; // UI

import { CheckedIcon } from '../../../icons/components/checkedIcon';
import { LAYOUTS } from './constants';
import { priceLayoutSizes } from '../utils/index';
import { Text } from '../../../atoms/text/text';
export var PriceMatrix = function PriceMatrix(_ref) {
  var layout = _ref.layout,
      pricingInfo = _ref.pricingInfo,
      selectedPlan = _ref.selectedPlan;
  var pure = {};
  var features = [];
  pricingInfo.forEach(function (item) {
    item.checkList.forEach(function (feature) {
      if (!pure[feature.title.replace(/ /g, '')]) {
        pure[feature.title.replace(/ /g, '')] = feature;
        features.push(feature.title);
      }
    });
  });

  var featureExist = function featureExist(_ref2, feature) {
    var checkList = _ref2.checkList;
    var exists = false;

    for (var i = 0; i < checkList.length; i++) {
      var title = checkList[i].title;

      if (title === feature) {
        exists = true;
        break;
      }
    }

    return exists;
  };

  return /*#__PURE__*/React.createElement(PriceMatrixWrapper, null, /*#__PURE__*/React.createElement(MatrixCol, {
    freeSize: true
  }, features.map(function (item, index) {
    return /*#__PURE__*/React.createElement(FeatureNameColumn, {
      key: index,
      odd: index % 2 !== 0
    }, /*#__PURE__*/React.createElement(MatrixText, {
      content: item,
      size: priceLayoutSizes(layout).featuresTextSize
    }));
  })), pricingInfo.map(function (item, index) {
    return /*#__PURE__*/React.createElement(MatrixCol, {
      key: index,
      show: layout.includes(LAYOUTS.DESKTOP) || selectedPlan === index,
      flex: !layout.includes(LAYOUTS.DESKTOP),
      layout: layout
    }, features.map(function (feature, idx) {
      return /*#__PURE__*/React.createElement(FeatureCheckColumn, {
        odd: idx % 2 !== 0,
        key: idx
      }, featureExist(item, feature) ? /*#__PURE__*/React.createElement(StyledCheckedIcon, {
        size: 18,
        recommended: item.recommended
      }) : '');
    }));
  }));
};
PriceMatrix.displayName = "PriceMatrix";
var StyledCheckedIcon = styled(CheckedIcon)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref3) {
  var PRICING = _ref3.theme.PRICING,
      recommended = _ref3.recommended;
  return css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    path {\n      fill: ", " !important;\n    }\n  "])), recommended ? PRICING.priceMatrixRecommendedheckedColour : PRICING.priceMatrixCheckedColour);
});
var MatrixText = styled(Text)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref4) {
  var PRICING = _ref4.theme.PRICING;
  return css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), PRICING.priceMatrixTextColour);
});
var FeatureCheckColumn = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  margin: 1px 0;\n  min-height: 2.5rem;\n"])), function (_ref5) {
  var theme = _ref5.theme,
      odd = _ref5.odd;
  return odd ? theme.COLOUR.light : theme.COLOUR.white;
});
var FeatureNameColumn = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  align-items: center;\n  background-color: ", ";\n  border: 1px solid ", ";\n  display: flex;\n  margin: 1px 0;\n  min-height: 2.5rem;\n  padding-left: 1.875rem;\n"])), function (_ref6) {
  var theme = _ref6.theme,
      odd = _ref6.odd;
  return odd ? theme.COLOUR.light : theme.COLOUR.white;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.COLOUR.dark;
});
var MatrixCol = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 0 0.375rem;\n  ", "\n\n  ", "\n"])), function (_ref8) {
  var freeSize = _ref8.freeSize;
  return freeSize && css(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      flex: 1;\n    "])));
}, function (_ref9) {
  var flex = _ref9.flex,
      freeSize = _ref9.freeSize,
      layout = _ref9.layout,
      show = _ref9.show;
  return !freeSize && css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      display: ", ";\n      margin: 0;\n      ", "\n      min-width:calc(", " + 0.75rem );\n    "])), show ? 'block' : 'none', flex && 'flex:1;', priceLayoutSizes(layout).priceCardWidth);
});
var PriceMatrixWrapper = styled.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n"])));
//# sourceMappingURL=priceMatrix.js.map