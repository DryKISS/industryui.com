/* eslint no-undef: 0 */
/**
 * Converts an image URL to Data URL (Base64) using Canvas
 */
export const convertImgUrlToDataURLviaCanvas = url => {
  return new Promise(function (resolve, reject) {
    var img = new Image()

    img.crossOrigin = '*'

    img.onload = function () {
      var canvas = document.createElement('canvas')
      var ctx = canvas.getContext('2d')
      var dataURL
      canvas.height = this.height
      canvas.width = this.width
      ctx.drawImage(this, 0, 0)
      dataURL = canvas.toDataURL()
      resolve(dataURL)
      canvas = null
    }

    img.onerror = function () {
      reject(new Error('Could not load image at ' + url))
    }

    img.src = url
  })
}
