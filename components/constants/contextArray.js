/**
 * Components - Theme - Constants - Contaxt Array
 */

// UI
import THEME_CONTEXT from './context'

const THEME_CONTEXT_ARRAY = (() => {
  const array = []

  for (const key in THEME_CONTEXT) {
    array.push(THEME_CONTEXT[key])
  }

  return array
})()

export default THEME_CONTEXT_ARRAY
