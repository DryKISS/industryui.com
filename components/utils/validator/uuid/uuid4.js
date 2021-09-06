/**
 * Validator: UUID4
 */

const validatorUuid4 = (uuid) => {
  const regExp = /^[a-z0-9-]{36}$/gi
  return regExp.test(uuid)
}

export default validatorUuid4
