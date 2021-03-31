/**
 * Components - Theme - Constants - Size Array
 */

// UI
import THEME_SIZE from './size'

const THEME_SIZE_ARRAY = (() => {
  const array = []

  for (const key in THEME_SIZE) {
    array.push(THEME_SIZE[key])
  }

  return array
})()

export default THEME_SIZE_ARRAY
