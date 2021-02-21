import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Use Keypress
 */
// React
import { useState, useEffect } from 'react';
export function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      keyPressed = _useState2[0],
      setKeyPressed = _useState2[1]; // If pressed key is our target key then set to true


  function downHandler(_ref) {
    var key = _ref.key;

    if (key === targetKey) {
      setKeyPressed(true);
    }
  } // If released key is our target key then set to false


  var upHandler = function upHandler(_ref2) {
    var key = _ref2.key;

    if (key === targetKey) {
      setKeyPressed(false);
    }
  }; // Add event listeners


  useEffect(function () {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler); // Remove event listeners on cleanup

    return function () {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}
//# sourceMappingURL=useKeypress.js.map