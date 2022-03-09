/**
 * Components - Utils - Validator - Parse Post Parse
 */

// Return area and district from Post Code
const postCodeParseIE = (postCode) => {
  const parsed = postCode?.match(/^([AC-FHKNPRTV-Y]\d{2}|D6W)\s[0-9AC-FHKNPRTV-Y]{4}$/) || ''

  return {
    area: parsed[1],
    district: parsed[2]
  }
}

export default postCodeParseIE
