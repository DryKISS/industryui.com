import { COLOUR } from './colour'
import { RandomKey } from 'components/utils'

export const colourList = (() => {
  const list = []
  for (const key in COLOUR) {
    list.push({ colour: COLOUR[key], id: RandomKey() })
  }
  return list
})()
