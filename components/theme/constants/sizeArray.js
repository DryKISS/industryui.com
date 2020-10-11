/**
 * Theme - Constants - Size Array
 */

// UI
import { SIZE } from './size'

export const sizeArray = (() => {
  const array = []

  for (const key in SIZE) {
    array.push(SIZE[key])
  }

  return array
})()
