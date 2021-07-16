/**
 * Components - Utils - URL
 */

const historyPush = (query) => {
  const { protocol, host, pathname } = window.location
  const url = `${protocol}//${host}${pathname}${query}`

  window.history.pushState({ path: url }, '', url)
}

export default historyPush
