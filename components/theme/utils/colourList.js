/**
 * Theme - Utils - Colour List
 */

// UI
import { COLOUR } from '../variables/colour'
import { RandomKey } from '../../'

export const colourList = (() => {
  const list = []

  for (const key in COLOUR) {
    list.push({ colour: COLOUR[key], id: RandomKey() })
  }

  return list
})()
