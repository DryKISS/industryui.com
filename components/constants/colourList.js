/**
 * Components - Theme - Constants - Colour List
 */

// UI
import THEME_COLOUR from './colour'

const THEME_COLOUR_LIST = (() => {
  const list = []

  for (const key in THEME_COLOUR) {
    const id = ((Math.random() * 0xffffffff) << 0).toString(16)
    list.push({ colour: THEME_COLOUR[key], id })
  }

  return list
})()

export default THEME_COLOUR_LIST
