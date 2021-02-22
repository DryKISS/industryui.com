/**
 * Components - Utils - Validator - Post Code
 */
export var validatorPostCode = function validatorPostCode(postCode) {
  var r1 = "^([Gg][Ii][Rr] 0[Aa]{2})";
  var r2 = '|((([A-Za-z][0-9]{1,2})';
  var r3 = '|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])';
  var r4 = '|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\\s?[0-9][A-Za-z]{2})$';
  var re = new RegExp(r1 + r2 + r3 + r4);
  return re.test(postCode);
}; // Return area and district from Post Code

export var parsePostCode = function parsePostCode(postCode) {
  var parsed = (postCode === null || postCode === void 0 ? void 0 : postCode.match(/([A-Z]+)([0-9]+).*?[A-Z0-9]{3}/i)) || '';
  return {
    area: parsed[1],
    district: parsed[2]
  };
};
//# sourceMappingURL=postCode.js.map