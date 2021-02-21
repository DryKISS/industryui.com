/**
 * Validator: UUID4
 */
export var validatorUuid4 = function validatorUuid4(uuid) {
  var regExp = /^[a-z0-9-]{36}$/gi;
  return regExp.test(uuid);
};
//# sourceMappingURL=uuid4.js.map