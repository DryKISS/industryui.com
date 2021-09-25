/**
 * Components - Molecules - Modal - Delay
 */

export default (callBack, delay = 100) => {
  const timer = setTimeout(() => {
    clearTimeout(timer)
    callBack()
  }, delay)
}
