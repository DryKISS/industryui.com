import Axios from 'axios';
export var FileDownloader = function FileDownloader(data, filename) {
  if (window) {
    var blobData = [data];
    var blob = new window.Blob(blobData, {
      type: 'application/octet-stream'
    });

    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      window.navigator.msSaveBlob(blob, filename);
    } else {
      var blobURL = window.URL && window.URL.createObjectURL ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob);
      var tempLink = document.createElement('a');
      tempLink.style.display = 'none';
      tempLink.href = blobURL;
      tempLink.setAttribute('download', filename); // Safari thinks _blank anchor are pop ups. We only want to set _blank
      // target if the browser does not support the HTML5 download attribute.
      // This allows us to download files in desktop safari if pop up blocking
      // is enabled.

      if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank');
      }

      document.body.appendChild(tempLink);
      tempLink.click(); // Fixes "webkit blob resource error 1"

      setTimeout(function () {
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
      }, 200);
    }
  }
};
export var downloadFile = function downloadFile(_ref) {
  var url = _ref.url,
      filename = _ref.filename;
  Axios.get(url, {
    responseType: 'blob'
  }).then(function (res) {
    FileDownloader(res.data, filename);
  });
};
//# sourceMappingURL=index.js.map