/**
 * Components - Utils - Validator - Post Code Validate
 */

// UI
import postCodeString from './string'

const postCodeValidate = (postCode) => {
  const re = new RegExp(postCodeString)
  return re.test(postCode)
}

export default postCodeValidate
