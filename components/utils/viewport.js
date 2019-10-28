/**
 * Viewport width
 */
export const viewPort = source => {
  if (source && source.clientWidth) {
    return source.clientWidth
  }

  if (typeof window !== 'undefined' && window.innerWidth) {
    return window.innerWidth
  }

  return null
}
