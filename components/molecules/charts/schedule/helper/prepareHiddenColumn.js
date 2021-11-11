/**
 * Components - Molecules - Charts - Schedule - Helper - Hidden Column
 */

export default (hiddenColumn) => {
  const result = {}
  hiddenColumn.forEach((item) => {
    result[item] = true
  })
  return result
}
