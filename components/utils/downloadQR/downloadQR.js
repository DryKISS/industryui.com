/**
 * Components -  Utils - Download QRCode
 */

const downloadQR = (assetId) => {
  const canvas = document.querySelector(`#qr${assetId} > canvas`)
  const pngUrl = canvas.toDataURL()
  const downloadLink = document.createElement('a')

  downloadLink.href = pngUrl
  downloadLink.download = `${assetId}.png`
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
}

export default downloadQR
