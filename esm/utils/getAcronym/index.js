/**
 * Get Acronym
 */
export var getAcronym = function getAcronym(string) {
  var matches = string.match(/\b(\w)/g);
  return matches.join('');
};
//# sourceMappingURL=index.js.map