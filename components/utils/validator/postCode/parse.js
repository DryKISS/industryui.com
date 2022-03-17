/**
 * Components - Utils - Validator - Parse Post Parse
 */

import POSTCODE_REGEXES from './regex'

// Return area and district from Post Code
const postCodeParse = ({ postCode, country }) => {
  const regex = POSTCODE_REGEXES.get(country)
  const parsed = postCode?.match(regex) || ''

  return {
    area: parsed[1],
    district: parsed && parsed.length > 2 ? parsed[2] : ''
  }
}

export default postCodeParse
