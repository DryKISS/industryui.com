/**
 * Mock helpers
 */

// merge array with localStorage data
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

export const findByKey = (array, key, value) => {
  return array.find(a => a[key] === value)
}

export const filterByKey = (array, key, value) => {
  return array.filter(a => a[key] === value)
}

export const filterByString = (array, key, string) => {
  return array.filter(a => a[key].toLowerCase().includes(string.toLowerCase()))
}

// add associated object to an item
export const getItemAssociation = (item, related, key, foreignKey) => {
  return related.find(r => r[key] === item[foreignKey])
}

// add associated array to an item
export const getItemAssociations = (item, related, key, foreignKey) => {
  return related.filter(r => r[key] === item[foreignKey])
}

// add associated array to an array
export const getAssociations = (array, related, association, key, foreignKey) => {
  return array.map(item => {
    item[association] = related.find(r => r[key] === item[foreignKey])
    return item
  })
}

// add associated array via pivot array
export const getManyToManyAssociations = (item, pivot, related, key, foreignKey) => {
  const associatedItems = pivot.filter(a => a[key] === item.id)
  return associatedItems.map(a => {
    return related.find(r => r.id === a[foreignKey])
  })
}
