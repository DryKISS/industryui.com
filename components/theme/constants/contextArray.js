import { CONTEXT } from './context'
export const contextArray = (() => {
  const array = []
  for (const key in CONTEXT) {
    array.push(CONTEXT[key])
  }
  return array
})()
