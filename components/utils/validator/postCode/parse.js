/**
 * Components - Utils - Validator - Parse Post Parse
 */

// Return area and district from Post Code
const postCodeParse = (postCode) => {
  const parsed = postCode?.match(/([A-Z]+)([0-9]+).*?[A-Z0-9]{3}/i) || ''

  return {
    area: parsed[1],
    district: parsed[2]
  }
}

export default postCodeParse
