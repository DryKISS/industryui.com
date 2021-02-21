/**
 * Utils - Camel Case
 */
// Utils
export var camelCase = function camelCase(string) {
  return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
};
//# sourceMappingURL=index.js.map