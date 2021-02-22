import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/**
 * Pie chart
 */
// React
import React from 'react';
import { oneOf, bool } from 'prop-types'; // Nivo

import { ResponsivePie, PiePropTypes, PieDefaultProps } from '@nivo/pie';
import { colorSchemes } from '@nivo/colors'; // Style

import { withTheme } from 'styled-components';
export var PieChart = withTheme(function (_ref) {
  var theme = _ref.theme,
      props = _objectWithoutProperties(_ref, ["theme"]);

  var PIECHART = theme.PIECHART,
      _theme$PIECHART = theme.PIECHART,
      animate = _theme$PIECHART.animate,
      borderColor = _theme$PIECHART.borderColor,
      borderWidth = _theme$PIECHART.borderWidth,
      startAngle = _theme$PIECHART.startAngle,
      legends = _theme$PIECHART.legends,
      margin = _theme$PIECHART.margin,
      motionStiffness = _theme$PIECHART.motionStiffness,
      motionDamping = _theme$PIECHART.motionDamping,
      radialLabelsSkipAngle = _theme$PIECHART.radialLabelsSkipAngle,
      radialLabelsTextColor = _theme$PIECHART.radialLabelsTextColor,
      radialLabelsLinkColor = _theme$PIECHART.radialLabelsLinkColor,
      slicesLabelsSkipAngle = _theme$PIECHART.slicesLabelsSkipAngle,
      slicesLabelsTextColor = _theme$PIECHART.slicesLabelsTextColor;
  var colorScheme = props.colorScheme,
      _props$cornerRadius = props.cornerRadius,
      cornerRadius = _props$cornerRadius === void 0 ? PIECHART.cornerRadius : _props$cornerRadius,
      data = props.data,
      enableRadialLabels = props.enableRadialLabels,
      enableSlicesLabels = props.enableSlicesLabels,
      _props$innerRadius = props.innerRadius,
      innerRadius = _props$innerRadius === void 0 ? PIECHART.innerRadius : _props$innerRadius,
      isInteractive = props.isInteractive,
      onClick = props.onClick,
      _props$padAngle = props.padAngle,
      padAngle = _props$padAngle === void 0 ? PIECHART.padAngle : _props$padAngle,
      _props$radialLabelsLi = props.radialLabelsLinkStrokeWidth,
      radialLabelsLinkStrokeWidth = _props$radialLabelsLi === void 0 ? PIECHART.radialLabelsLinkStrokeWidth : _props$radialLabelsLi,
      _props$radialLabelsTe = props.radialLabelsTextXOffset,
      radialLabelsTextXOffset = _props$radialLabelsTe === void 0 ? PIECHART.radialLabelsTextXOffset : _props$radialLabelsTe,
      _props$radialLabelsLi2 = props.radialLabelsLinkHorizontalLength,
      radialLabelsLinkHorizontalLength = _props$radialLabelsLi2 === void 0 ? PIECHART.radialLabelsLinkHorizontalLength : _props$radialLabelsLi2,
      _props$radialLabelsLi3 = props.radialLabelsLinkDiagonalLength,
      radialLabelsLinkDiagonalLength = _props$radialLabelsLi3 === void 0 ? PIECHART.radialLabelsLinkDiagonalLength : _props$radialLabelsLi3,
      _props$radialLabelsLi4 = props.radialLabelsLinkOffset,
      radialLabelsLinkOffset = _props$radialLabelsLi4 === void 0 ? PIECHART.radialLabelsLinkOffset : _props$radialLabelsLi4,
      showLegend = props.showLegend,
      sortByValue = props.sortByValue,
      _props$tooltip = props.tooltip,
      tooltip = _props$tooltip === void 0 ? PieDefaultProps.tooltip : _props$tooltip;
  return /*#__PURE__*/React.createElement(ResponsivePie, {
    animate: animate,
    onClick: onClick,
    data: data,
    enableSlicesLabels: enableSlicesLabels,
    enableRadialLabels: enableRadialLabels,
    isInteractive: isInteractive,
    innerRadius: innerRadius,
    cornerRadius: cornerRadius,
    colors: {
      scheme: colorScheme
    },
    borderWidth: borderWidth,
    borderColor: borderColor,
    legends: showLegend ? legends : [],
    margin: margin.call(props),
    motionDamping: motionDamping,
    motionStiffness: motionStiffness,
    padAngle: padAngle,
    radialLabelsSkipAngle: radialLabelsSkipAngle,
    radialLabelsTextXOffset: radialLabelsTextXOffset,
    radialLabelsTextColor: radialLabelsTextColor,
    radialLabelsLinkOffset: radialLabelsLinkOffset,
    radialLabelsLinkDiagonalLength: radialLabelsLinkDiagonalLength,
    radialLabelsLinkHorizontalLength: radialLabelsLinkHorizontalLength,
    radialLabelsLinkStrokeWidth: radialLabelsLinkStrokeWidth,
    radialLabelsLinkColor: radialLabelsLinkColor,
    slicesLabelsSkipAngle: slicesLabelsSkipAngle,
    slicesLabelsTextColor: slicesLabelsTextColor,
    sortByValue: sortByValue,
    startAngle: startAngle,
    tooltip: tooltip
  });
});
PieChart.displayName = 'PieChart';
PieChart.propTypes = Object.assign({}, PiePropTypes, {
  colorScheme: oneOf(Object.keys(colorSchemes)),
  showLegend: bool
});
PieChart.defaultProps = Object.assign({}, PieDefaultProps, {
  colorScheme: 'nivo',
  showLegend: false
});
//# sourceMappingURL=pieChart.js.map