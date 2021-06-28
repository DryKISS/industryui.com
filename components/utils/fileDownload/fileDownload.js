import Axios from 'axios'

export const FileDownloader = (data, filename) => {
  if (window) {
    const blobData = [data]
    const blob = new window.Blob(blobData, { type: 'application/octet-stream' })
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      window.navigator.msSaveBlob(blob, filename)
    } else {
      const blobURL =
        window.URL && window.URL.createObjectURL
          ? window.URL.createObjectURL(blob)
          : window.webkitURL.createObjectURL(blob)
      const tempLink = document.createElement('a')
      tempLink.style.display = 'none'
      tempLink.href = blobURL
      tempLink.setAttribute('download', filename)

      // Safari thinks _blank anchor are pop ups. We only want to set _blank
      // target if the browser does not support the HTML5 download attribute.
      // This allows us to download files in desktop safari if pop up blocking
      // is enabled.

      if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank')
      }

      document.body.appendChild(tempLink)
      tempLink.click()

      // Fixes "webkit blob resource error 1"
      setTimeout(function () {
        document.body.removeChild(tempLink)
        window.URL.revokeObjectURL(blobURL)
      }, 200)
    }
  }
}
const downloadFile = ({ url, filename }) => {
  Axios.get(url, {
    responseType: 'blob'
  }).then((res) => {
    FileDownloader(res.data, filename)
  })
}
export default downloadFile
