/**
 * Validator: Uri
 */
export var validatorUri = function validatorUri(uri) {
  var regExp = /^((mailto|tel|http|https|ftp):)/;
  return regExp.test(uri);
};
//# sourceMappingURL=uri.js.map