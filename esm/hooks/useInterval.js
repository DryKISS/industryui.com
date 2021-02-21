/**
 * Hooks  - useInterval
 * Allows running code on specific intervals
 *
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
// React
import { useEffect, useRef } from 'react';
export var useInterval = function useInterval(callback, delay) {
  var savedCallback = useRef(); // Remember the latest callback.

  useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  useEffect(function () {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
};
//# sourceMappingURL=useInterval.js.map