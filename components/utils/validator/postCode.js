/**
 * Validator: Post Code - UK
 */
export const validatorPostCode = (postCode) => {
  const regExp = /^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i

  return regExp.test(postCode)
}
