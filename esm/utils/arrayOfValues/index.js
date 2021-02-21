/**
 * Array of Values
 */
export var arrayOfValues = function arrayOfValues(obj) {
  var arr = [];

  for (var key in obj) {
    arr.push(obj[key]);
  }

  return arr;
};
//# sourceMappingURL=index.js.map