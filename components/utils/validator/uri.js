/**
 * Validator: Uri
 */
export const validatorUri = (uri) => {
  const regExp = /^((mailto|tel|http|https|ftp):)/

  return regExp.test(uri)
}
export default validatorUri
