import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Form - React Select - Default Styles
 */
// UI
import { THEME_COLOUR } from '../../theme/variables/colour';
export var defaultStyles = {
  container: function container(base, state) {
    return _objectSpread(_objectSpread({}, base), {}, {
      margin: '0'
    });
  },
  control: function control(base, state) {
    return _objectSpread(_objectSpread({}, base), {}, {
      backgroundColor: '#fff',
      borderColor: THEME_COLOUR.dark,
      borderRadius: '0.25rem',
      color: THEME_COLOUR.dark,
      fontSize: '1rem',
      height: '3rem',
      lineHeight: 1.5,
      padding: '0'
    });
  },
  menu: function menu(base, state) {
    return _objectSpread(_objectSpread({}, base), {}, {
      borderColor: THEME_COLOUR.dark,
      boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
      color: THEME_COLOUR.dark
    });
  },
  multiValue: function multiValue(base, state) {
    return state.data.isFixed ? _objectSpread(_objectSpread({}, base), {}, {
      backgroundColor: 'gray'
    }) : base;
  },
  multiValueLabel: function multiValueLabel(base, state) {
    return state.data.isFixed ? _objectSpread(_objectSpread({}, base), {}, {
      fontWeight: 'bold',
      color: 'white',
      paddingRight: 6
    }) : base;
  },
  multiValueRemove: function multiValueRemove(base, state) {
    return state.data.isFixed ? _objectSpread(_objectSpread({}, base), {}, {
      display: 'none'
    }) : base;
  },
  placeholder: function placeholder(base, state) {
    return {
      color: '#003753'
    };
  },
  singleValue: function singleValue(base, state) {
    return _objectSpread(_objectSpread({}, base), {}, {
      color: '#003753'
    });
  }
};
//# sourceMappingURL=styles.js.map