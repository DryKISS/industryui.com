export const revert = (dataSource) => {
  const ret = []
  for (let i = dataSource.length - 1; i >= 0; i--) {
    ret.push(dataSource[i])
  }
  return ret
}
export default revert
