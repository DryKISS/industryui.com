/**
 * Get one object from array
 */
const getOne = (id, array) => {
  const selected = array.filter((i) => i.id === parseInt(id))
  return selected.length ? { ...selected[0] } : null
}

export default getOne
