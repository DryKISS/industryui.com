/**
 * Gets a parameter from the URL
 */
export const getUrlParameter = (name) => {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]')

  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  const results = regex.exec(window.location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
