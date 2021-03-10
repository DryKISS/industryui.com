/**
 * Components - Utils - Mock helpers
 */

// Lodash
import cloneDeep from 'lodash/cloneDeep'

export const mergeLocalData = (array, key, identifier = 'id') => {
  const local = JSON.parse(window.localStorage.getItem(key))

  if (local) {
    local.forEach((i) => {
      const existing = array.find((o) => o[identifier] === parseInt(i[identifier]))

      if (existing) {
        Object.keys(i).forEach((key) => {
          existing[key] = i[key]
        })
      } else {
        array.push(i)
      }
    })
  }
  return cloneDeep(array)
}

export const findByKey = (array, key, value) => {
  return array.find((a) => a[key] === value)
}

export const filterByKey = (array, key, value) => {
  return array.filter((a) => a[key] === value)
}

export const filterByString = (array, key, string) => {
  return array.filter((a) => a[key].toLowerCase().includes(string.toLowerCase()))
}

// add associated object to an item
export const getItemAssociation = (item, related, key, foreignKey) => {
  return related.find((r) => r[key] === item[foreignKey])
}

// add associated array to an item
export const getItemAssociations = (item, related, key, foreignKey) => {
  return related.filter((r) => r[key] === item[foreignKey])
}

// add associated array to an array
export const getAssociations = (array, related, association, key, foreignKey) => {
  return array.map((item) => {
    item[association] = related.find((r) => r[key] === item[foreignKey])
    return item
  })
}

// add associated array via pivot array
export const getManyToManyAssociations = (item, pivot, related, key, foreignKey) => {
  const associatedItems = pivot.filter((a) => a[key] === item.id)
  return associatedItems.map((a) => {
    return related.find((r) => r.id === a[foreignKey])
  })
}

// get first item of an array
export const getFirst = (array) => {
  return array[0]
}

// get last item of an array
export const getLast = (array) => {
  return array[array.length - 1]
}
