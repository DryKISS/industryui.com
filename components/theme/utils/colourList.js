/**
 * Theme - Utils - Colour List
 */

// UI
import { COLOUR } from '../variables/colour'

export const colourList = (() => {
  const list = []

  for (const key in COLOUR) {
    const id = ((Math.random() * 0xffffffff) << 0).toString(16)
    list.push({ colour: COLOUR[key], id })
  }

  return list
})()
