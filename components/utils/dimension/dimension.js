/**
 * Components - Theme - Utils - Dimension
 */

const themeDimension = ({ h100, w100, h100vh, w100vw }) => {
  let temp = ''

  if (h100) {
    temp += 'height: 100% !important;'
  }

  if (w100) {
    temp += 'width: 100% !important;'
  }

  if (h100vh) {
    temp += 'height: 100vh !important;'
  }

  if (w100vw) {
    temp += 'width: 100vw !important;'
  }

  return temp
}

export default themeDimension
