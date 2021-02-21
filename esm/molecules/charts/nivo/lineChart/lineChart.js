import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/**
 * Charts - Line
 */
// React
import React from 'react';
import { oneOf, bool, string } from 'prop-types'; // Nivo

import { ResponsiveLine, LinePropTypes, LineDefaultProps } from '@nivo/line';
import { colorSchemes } from '@nivo/colors'; // Style

import { withTheme } from 'styled-components';
export var LineChart = withTheme(function (_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["theme"]);

  var LINECHART = theme.LINECHART,
      _theme$LINECHART = theme.LINECHART,
      axisBottom = _theme$LINECHART.axisBottom,
      axisLeft = _theme$LINECHART.axisLeft,
      axisTop = _theme$LINECHART.axisTop,
      axisRight = _theme$LINECHART.axisRight,
      legends = _theme$LINECHART.legends,
      margin = _theme$LINECHART.margin,
      pointColor = _theme$LINECHART.pointColor,
      pointBorderColor = _theme$LINECHART.pointBorderColor,
      pointBorderWidth = _theme$LINECHART.pointBorderWidth,
      pointLabel = _theme$LINECHART.pointLabel,
      pointLabelYOffset = _theme$LINECHART.pointLabelYOffset,
      useMesh = _theme$LINECHART.useMesh,
      xScale = _theme$LINECHART.xScale,
      yScale = _theme$LINECHART.yScale;
  var colorScheme = props.colorScheme,
      curve = props.curve,
      data = props.data,
      enableArea = props.enableArea,
      areaOpacity = props.areaOpacity,
      enableCrosshair = props.enableCrosshair,
      enablePoints = props.enablePoints,
      enablePointLabel = props.enablePointLabel,
      enableGridX = props.enableGridX,
      enableGridY = props.enableGridY,
      enableSlices = props.enableSlices,
      isInteractive = props.isInteractive,
      lineWidth = props.lineWidth,
      _props$pointSize = props.pointSize,
      pointSize = _props$pointSize === void 0 ? LINECHART.pointSize : _props$pointSize,
      showLegend = props.showLegend,
      _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? LineDefaultProps.tooltip : _props$tooltip;
  return /*#__PURE__*/React.createElement(ResponsiveLine, {
    areaOpacity: areaOpacity,
    axisTop: axisTop,
    axisRight: axisRight,
    axisBottom: axisBottom.call(props),
    axisLeft: axisLeft.call(props),
    curve: curve,
    colors: {
      scheme: colorScheme
    },
    data: data,
    enableArea: enableArea,
    enableCrosshair: enableCrosshair,
    enablePoints: enablePoints,
    enablePointLabel: enablePointLabel,
    enableGridX: enableGridX,
    enableGridY: enableGridY,
    enableSlices: enableSlices,
    isInteractive: isInteractive,
    lineWidth: lineWidth,
    legends: showLegend ? legends : [],
    margin: margin.call(props),
    pointSize: pointSize,
    pointColor: pointColor,
    pointBorderColor: pointBorderColor,
    pointBorderWidth: pointBorderWidth,
    pointLabel: pointLabel,
    pointLabelYOffset: pointLabelYOffset,
    tooltip: tooltip,
    useMesh: useMesh,
    xScale: xScale,
    yScale: yScale.call(props)
  });
});
LineChart.displayName = 'LineChart';
LineChart.propTypes = Object.assign({}, LinePropTypes, {
  // TODO: maybe write more custom schemes :)
  bottomLegend: string,
  colorScheme: oneOf(Object.keys(colorSchemes)),
  leftLegend: string,
  showLegend: bool
});
LineChart.defaultProps = Object.assign({}, LineDefaultProps, {
  colorScheme: 'nivo',
  showLegend: false
});
//# sourceMappingURL=lineChart.js.map