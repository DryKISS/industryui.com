import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Components - Suppliers - SSIP - Force Update
 */
// React
import { useState } from 'react';
export var useForceUpdate = function useForceUpdate() {
  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // integer state


  var forceUpdate = function forceUpdate() {
    return setValue(function (value) {
      return ++value;
    });
  }; // update the state to force render


  return [forceUpdate, value];
};
//# sourceMappingURL=index.js.map