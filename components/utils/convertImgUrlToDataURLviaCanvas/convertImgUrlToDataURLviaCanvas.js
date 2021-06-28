/**
 * Converts an image URL to Data URL (Base64) using Canvas
 */
export const convertImgUrlToDataURLviaCanvas = (url) => {
  return new Promise(function (resolve, reject) {
    const img = new window.Image()

    img.crossOrigin = '*'

    img.onload = function () {
      let canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      canvas.height = this.height
      canvas.width = this.width

      ctx.drawImage(this, 0, 0)

      const dataURL = canvas.toDataURL()

      resolve(dataURL)

      canvas = null
    }

    img.onerror = function () {
      reject(new Error('Could not load image at ' + url))
    }

    img.src = url
  })
}
