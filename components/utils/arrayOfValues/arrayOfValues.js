/**
 * Array of Values
 */
export const arrayOfValues = (obj) => {
  const arr = []

  for (const key in obj) {
    arr.push(obj[key])
  }

  return arr
}
export default arrayOfValues
