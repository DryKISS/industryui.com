import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * BarChart - Variables
 */
// UI
import { THEME_COLOUR } from '../../../../theme/variables/colour';
var legendTranslateX = 110;
export var BARCHART = {
  animate: false,
  colors: THEME_COLOUR,
  margin: function margin() {
    return {
      top: 50,
      right: this.showLegend ? 125 : 125 - legendTranslateX,
      // boolean passed as prop
      bottom: 50,
      left: 80
    };
  },
  borderColor: THEME_COLOUR.dark,
  borderWidth: 1,
  enableGridX: false,
  enableGridY: true,
  enableLabel: true,
  isInteractive: false,
  labelSkipHeight: 24,
  padding: 0.2,
  axisBottom: function axisBottom() {
    return _objectSpread({
      tickSize: 10,
      tickPadding: 10,
      tickRotation: -1,
      legend: this.bottomLegend,
      // string passed as prop
      legendPosition: 'middle',
      legendOffset: 36
    }, this.axisBottom);
  },
  axisLeft: function axisLeft() {
    return _objectSpread({
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: this.leftLegend,
      // string passed as prop
      legendPosition: 'middle',
      legendOffset: -60
    }, this.axisLeft);
  },
  legends: [{
    anchor: 'bottom-right',
    dataFrom: 'keys',
    direction: 'column',
    effects: [{
      on: 'hover',
      style: {
        itemOpacity: 1
      }
    }],
    itemDirection: 'left-to-right',
    itemHeight: 20,
    itemsSpacing: 2,
    itemOpacity: 0.85,
    itemWidth: 100,
    justify: false,
    translateX: legendTranslateX,
    translateY: 0,
    symbolSize: 20
  }]
};
//# sourceMappingURL=variables.js.map