import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

/**
 * Molecules - Charts - Highcharts
 */
// React
import React from 'react';
import { any, arrayOf, bool, func, oneOf } from 'prop-types'; // Highcharts

import HighStockcharts from 'highcharts/highstock';
import Highcharts from 'highcharts';
import HighMapcharts from 'highcharts/highmaps';
import HighGanttcharts from 'highcharts/highcharts-gantt';
import HighchartsReact from 'highcharts-react-official';

var getChartType = function getChartType(constructorType) {
  var chart;

  switch (constructorType) {
    case 'stockChart':
      chart = HighStockcharts;
      break;

    case 'mapChart':
      chart = HighMapcharts;
      break;

    case 'ganttChart':
      chart = HighGanttcharts;
      break;

    default:
      chart = Highcharts;
      break;
  }

  return chart;
};

export var HighChart = function HighChart(_ref) {
  var allowChartUpdate = _ref.allowChartUpdate,
      callback = _ref.callback,
      constructorType = _ref.constructorType,
      containerProps = _ref.containerProps,
      immutable = _ref.immutable,
      options = _ref.options,
      updateArgs = _ref.updateArgs,
      props = _objectWithoutProperties(_ref, ["allowChartUpdate", "callback", "constructorType", "containerProps", "immutable", "options", "updateArgs"]);

  return /*#__PURE__*/React.createElement(HighchartsReact, _extends({
    allowChartUpdate: allowChartUpdate,
    constructorType: constructorType || 'chart',
    highcharts: getChartType(constructorType),
    options: options,
    callback: callback,
    containerProps: containerProps,
    immutable: immutable,
    updateArgs: updateArgs
  }, props));
};
HighChart.displayName = "HighChart";
HighChart.prototypes = {
  allowChartUpdate: bool,
  callback: func,
  constructorType: oneOf(['chart', 'stockChart', 'mapChart', 'ganttChart', undefined, null]),
  containerProps: any,
  highcharts: any,
  immutable: bool,
  options: any.isRequired,
  updateArgs: arrayOf(bool)
};
//# sourceMappingURL=index.js.map