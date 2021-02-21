import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

var _templateObject;

/**
 * Components - Molecules  - QrCode
 */
// React
import React from 'react';
import { number, string } from 'prop-types'; // QrCode

import QRCode from 'qrcode.react'; // Style

import styled from 'styled-components'; // UI

import { Details } from '../../atoms/details/details';
export var QrCode = function QrCode(_ref) {
  var assetId = _ref.assetId,
      path = _ref.path;

  var downloadQR = function downloadQR() {
    var canvas = document.querySelector("#qr".concat(assetId, " > canvas"));
    var pngUrl = canvas.toDataURL();
    var downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = "".concat(assetId, ".png");
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return /*#__PURE__*/React.createElement(Details, {
    button: "Download",
    handleClick: downloadQR,
    open: true,
    summary: "QR Code"
  }, /*#__PURE__*/React.createElement(StyledQRContainer, {
    id: "qr".concat(assetId)
  }, /*#__PURE__*/React.createElement(QRCode, {
    bgColor: "#ffffff",
    fgColor: "#000000",
    includeMargin: false // imageSettings={{
    //   src: 'https://admin.cleverly.works/static/logo/cleverly-mark-logo.svg',
    //   x: null,
    //   y: null,
    //   height: 36,
    //   width: 24,
    //   excavate: true
    // }}
    ,
    level: "H",
    renderAs: "canvas",
    size: 256,
    value: "".concat(path)
  })));
};
QrCode.displayName = "QrCode";
var StyledQRContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  text-align: center;\n"])));
QrCode.propTypes = {
  assetId: number.isRequired,
  path: string.isRequired
};
//# sourceMappingURL=qrCode.js.map