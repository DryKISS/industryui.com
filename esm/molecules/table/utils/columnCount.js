/**
 * Components - Molecules - Table - Utils
 */
export var tableColumnCount = function tableColumnCount(columns) {
  return columns.filter(function (c) {
    return !c.hidden;
  }).length;
};
//# sourceMappingURL=columnCount.js.map