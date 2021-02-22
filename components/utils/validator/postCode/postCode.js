/**
 * Components - Utils - Validator - Post Code
 */
export const validatorPostCode = (postCode) => {
  const r1 = `^([Gg][Ii][Rr] 0[Aa]{2})`
  const r2 = '|((([A-Za-z][0-9]{1,2})'
  const r3 = '|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])'
  const r4 = '|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\\s?[0-9][A-Za-z]{2})$'

  const re = new RegExp(r1 + r2 + r3 + r4)

  return re.test(postCode)
}

// Return area and district from Post Code
export const parsePostCode = (postCode) => {
  const parsed = postCode?.match(/([A-Z]+)([0-9]+).*?[A-Z0-9]{3}/i) || ''

  return {
    area: parsed[1],
    district: parsed[2]
  }
}
