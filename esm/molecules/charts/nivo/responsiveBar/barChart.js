import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/**
 * Charts - Bar - responsiveBar
 */
// React
import React from 'react';
import { func, oneOf, bool, string } from 'prop-types'; // Nivo

import { ResponsiveBar, BarPropTypes, BarDefaultProps } from '@nivo/bar';
import { colorSchemes } from '@nivo/colors'; // Style

import { withTheme } from 'styled-components';

var BarComponent = function BarComponent(_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["theme"]);

  var BARCHART = theme.BARCHART;
  var _props$colorBy = props.colorBy,
      colorBy = _props$colorBy === void 0 ? BarDefaultProps.colorBy : _props$colorBy,
      colorScheme = props.colorScheme,
      data = props.data,
      _props$enableGridY = props.enableGridY,
      enableGridY = _props$enableGridY === void 0 ? BARCHART.enableGridY : _props$enableGridY,
      _props$enableGridX = props.enableGridX,
      enableGridX = _props$enableGridX === void 0 ? BARCHART.enableGridX : _props$enableGridX,
      _props$groupMode = props.groupMode,
      groupMode = _props$groupMode === void 0 ? BarDefaultProps.groupMode : _props$groupMode,
      _props$indexBy = props.indexBy,
      indexBy = _props$indexBy === void 0 ? BarDefaultProps.indexBy : _props$indexBy,
      _props$isInteractive = props.isInteractive,
      isInteractive = _props$isInteractive === void 0 ? BARCHART.isInteractive : _props$isInteractive,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? BarDefaultProps.keys : _props$keys,
      _props$label = props.label,
      label = _props$label === void 0 ? BarDefaultProps.label : _props$label,
      _props$layout = props.layout,
      layout = _props$layout === void 0 ? BarDefaultProps.layout : _props$layout,
      _props$minValue = props.minValue,
      minValue = _props$minValue === void 0 ? BarDefaultProps.minValue : _props$minValue,
      _props$maxValue = props.maxValue,
      maxValue = _props$maxValue === void 0 ? BarDefaultProps.maxValue : _props$maxValue,
      _props$reverse = props.reverse,
      reverse = _props$reverse === void 0 ? BarDefaultProps.reverse : _props$reverse,
      showLegend = props.showLegend,
      _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? BarDefaultProps.tooltip : _props$tooltip;
  return /*#__PURE__*/React.createElement(ResponsiveBar, {
    animate: BARCHART.animate,
    axisBottom: BARCHART.axisBottom.call(props),
    axisLeft: BARCHART.axisLeft.call(props),
    borderColor: BARCHART.borderColor,
    borderWidth: BARCHART.borderWidth,
    colorBy: colorBy,
    colors: {
      scheme: colorScheme
    },
    data: data,
    enableLabel: BARCHART.enableLabel,
    enableGridX: enableGridX,
    enableGridY: enableGridY,
    groupMode: groupMode,
    indexBy: indexBy,
    isInteractive: isInteractive,
    keys: keys,
    label: label,
    labelSkipHeight: BARCHART.labelSkipHeight,
    layout: layout,
    legends: showLegend ? BARCHART.legends : [],
    minValue: minValue,
    maxValue: maxValue,
    margin: BARCHART.margin.call(props),
    padding: BARCHART.padding,
    reverse: reverse,
    tooltip: tooltip
  });
};

BarComponent.displayName = "BarComponent";

/**
 * Unrequire specific props as this is a wrapper component
 * Nivo uses recompose/withPropsOnChange to assign a default value to these props
 * More info: https://github.com/plouc/nivo/blob/master/packages/bar/src/enhance.js
 */
BarPropTypes.getBorderColor = func;
BarPropTypes.getColor = func;
BarPropTypes.getIndex = func;
BarPropTypes.getLabel = func;
BarPropTypes.getLabelTextColor = func;
BarPropTypes.getLabelLinkColor = func;
BarPropTypes.getTooltipLabel = func;
export var BarChart = withTheme(BarComponent);
BarChart.displayName = 'BarChart';
BarChart.propTypes = Object.assign({}, BarPropTypes, {
  bottomLegend: string,
  colorScheme: oneOf(Object.keys(colorSchemes)),
  leftLegend: string,
  showLegend: bool
});
BarChart.defaultProps = Object.assign({}, BarDefaultProps, {
  colorScheme: 'nivo',
  showLegend: false
});
//# sourceMappingURL=barChart.js.map