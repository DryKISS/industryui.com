import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * Hooks - Use Local Storage
 */
// React
import { useState } from 'react';
export var useLocalStorage = function useLocalStorage(key, initialValue) {
  var parse = function parse(item) {
    var a = item;

    try {
      a = JSON.parse(item);
    } catch (e) {}

    return a;
  }; // State to store our value
  // Pass initial state function to useState so logic is only executed once


  var _useState = useState(function () {
    try {
      // Get from local storage by key
      var item = window.localStorage.getItem(key); // Parse stored json or if none return initialValue

      return item ? parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      storedValue = _useState2[0],
      setStoredValue = _useState2[1]; // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.


  var setValue = function setValue(value) {
    try {
      // Allow value to be a function so we have same API as useState
      var valueToStore = value instanceof Function ? value(storedValue) : value; // Save state

      setStoredValue(valueToStore); // Save to local storage

      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
//# sourceMappingURL=useLocalStorage.js.map