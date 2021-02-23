/**
 * Components - Theme - Constants - Size Array
 */

// UI
import { THEME_SIZE } from './size'

export const THEME_SIZE_ARRAY = (() => {
  const array = []

  for (const key in THEME_SIZE) {
    array.push(THEME_SIZE[key])
  }

  return array
})()
