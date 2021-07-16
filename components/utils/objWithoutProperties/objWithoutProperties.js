/**
 * Components - Utils - Object Without Properties
 */
const objectWithoutProperties = (obj, keys) => {
  const target = {}

  for (const i in obj) {
    if (keys.indexOf(i) >= 0) {
      continue
    }

    if (!Object.prototype.hasOwnProperty.call(obj, i)) {
      continue
    }

    target[i] = obj[i]
  }

  return target
}

export default objectWithoutProperties
