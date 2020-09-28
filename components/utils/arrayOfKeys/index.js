export const arrayOfKeys = obj => {
  const arr = []
  for (const key in obj) {
    arr.push(key)
  }
  return arr
}
