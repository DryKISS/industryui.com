/**
 * Validator: Post Code - UK
 */
export const validatorPostCode = postCode => {
  const regExp = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})$/

  return regExp.test(postCode)
}

// Return area and district from Post Code
export const parsePostCode = postCode => {
  const parsed = postCode?.match(/([A-Z]+)([0-9]+).*?[A-Z0-9]{3}/) || ''

  return {
    area: parsed[1],
    district: parsed[2]
  }
}
