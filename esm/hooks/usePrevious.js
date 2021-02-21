/**
 * Use Previous
 * Allows us os save the previous state variable, good for counters or loops
 */
// React
import { useEffect, useRef } from 'react';
export var usePrevious = function usePrevious(value) {
  var ref = useRef();
  useEffect(function () {
    ref.current = value;
  });
  return ref.current;
};
//# sourceMappingURL=usePrevious.js.map