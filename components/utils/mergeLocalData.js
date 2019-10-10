/**
 * Merge array with localStorage data
 */
export const mergeLocalData = (array, key) => {
  const local = JSON.parse(window.localStorage.getItem(key))
  if (local) {
    local.map(i => {
      const existing = array.find(o => o.id === parseInt(i.id))
      if (existing) {
        Object.keys(i).map(key => {
          existing[key] = i[key]
        })
      } else {
        array.push(i)
      }
    })
  }
  return array
}
