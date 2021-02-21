import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Why did you update
 */
// React
import { useEffect, useRef } from 'react'; // Hook

export function useWhyDidYouUpdate(name, props) {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  var previousProps = useRef();
  useEffect(function () {
    if (previousProps.current) {
      // Get all keys from previous and current props
      var allKeys = Object.keys(_objectSpread(_objectSpread({}, previousProps.current), props)); // Use this object to keep track of changed props

      var changesObj = {}; // Iterate through keys

      allKeys.forEach(function (key) {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key]
          };
        }
      }); // If changesObj not empty then output

      if (Object.keys(changesObj).length) {
        console.error('[why-did-you-update]', name, changesObj);
      }
    } // Finally update previousProps with current props for next hook call


    previousProps.current = props;
  });
}
//# sourceMappingURL=useWhyDidYouUpdate.js.map