export var revert = function revert(dataSource) {
  var ret = [];

  for (var i = dataSource.length - 1; i >= 0; i--) {
    ret.push(dataSource[i]);
  }

  return ret;
};
//# sourceMappingURL=revert.js.map