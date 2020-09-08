import { SIZE } from '../'

export const sizeArray = (() => {
  const array = []
  for (const key in SIZE) {
    array.push(SIZE[key])
  }
  return array
})()
