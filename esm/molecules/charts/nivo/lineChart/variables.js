import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Charts - Line - Variables
 */
// Date fns
import { shortDate } from '../../../../utils/dateFns/date'; // UI

import { THEME_COLOUR } from '../../../../theme/variables/colour';
var lastValue = null;
export var LINECHART = {
  axisBottom: function axisBottom() {
    var _this = this;

    return _objectSpread({
      axisTop: null,
      axisRight: null,
      format: function format(value) {
        if (_this.axisBottomDistinct) {
          var formatted = shortDate(value);

          if (formatted !== lastValue) {
            lastValue = formatted;
            return formatted;
          }
        } else return value;
      },
      legend: this.bottomLegend,
      // string passed as prop
      legendOffset: 36,
      legendPosition: 'middle',
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0
    }, this.axisBottom);
  },
  axisLeft: function axisLeft() {
    var _this2 = this;

    return _objectSpread({
      format: function format(value) {
        if (value % 1 === 0) return "".concat(value + _this2.axisLeftSymbol || value);
      },
      legend: this.leftLegend,
      // string passed as prop
      legendOffset: -50,
      legendPosition: 'middle',
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0
    }, this.axisLeft);
  },
  margin: function margin() {
    return {
      bottom: 50,
      left: 60,
      right: this.showLegend ? 110 : 30,
      // props context
      top: 30
    };
  },
  legends: [{
    anchor: 'bottom-right',
    direction: 'column',
    effects: [{
      on: 'hover',
      style: {
        itemBackground: 'rgba(0, 0, 0, .03)',
        itemOpacity: 1
      }
    }],
    justify: false,
    translateX: 100,
    translateY: 0,
    itemsSpacing: 0,
    itemDirection: 'left-to-right',
    itemWidth: 80,
    itemHeight: 20,
    itemOpacity: 0.75,
    symbolSize: 12,
    symbolShape: 'circle',
    symbolBorderColor: 'rgba(0, 0, 0, .5)'
  }],
  pointColor: THEME_COLOUR.white,
  pointSize: 10,
  pointBorderColor: {
    from: 'serieColor'
  },
  pointBorderWidth: 2,
  pointLabel: 'y',
  pointLabelYOffset: -12,
  useMesh: true,
  xScale: {
    type: 'point'
  },
  yScale: function yScale() {
    return {
      type: 'linear',
      stacked: !!this.stacked,
      // props context
      min: 'auto',
      max: 'auto'
    };
  }
};
//# sourceMappingURL=variables.js.map