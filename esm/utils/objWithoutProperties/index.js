/**
 * Components - Utils - Object Without Properties
 */
export var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) {
      continue;
    }

    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      continue;
    }

    target[i] = obj[i];
  }

  return target;
};
//# sourceMappingURL=index.js.map