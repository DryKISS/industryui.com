import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Preview
 */
// React
import React, { memo, useEffect, useState, useRef } from 'react'; // UI

import styled, { css } from 'styled-components';
import Cropper from 'react-cropper';
var imageFormats = ['.jpg', '.jpeg', '.png'];

var isImage = function isImage(src) {
  var isIt = false;

  var _iterator = _createForOfIteratorHelper(imageFormats),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var format = _step.value;

      if (src.includes(format)) {
        isIt = true;
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return isIt;
};

var fileType = function fileType(source) {
  if (source) {
    var src = source.toLowerCase();

    if (isImage(src)) {
      return 'image';
    } else if (src.includes('.pdf')) {
      return 'pdf';
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};

var checkFileType = function checkFileType(file, type) {
  if (file !== null && file !== void 0 && file.type.includes(type) || fileType(file === null || file === void 0 ? void 0 : file.src) === type) {
    return true;
  }

  return false;
};

var source = function source(file) {
  var _file$src;

  return (_file$src = file.src) !== null && _file$src !== void 0 ? _file$src : URL.createObjectURL(file);
};

export var Preview = /*#__PURE__*/memo(function (_ref) {
  var contain = _ref.contain,
      dim = _ref.dim,
      file = _ref.file,
      imageStyles = _ref.imageStyles,
      onClick = _ref.onClick,
      onPdfDocumentLoaded = _ref.onPdfDocumentLoaded,
      placeHolderImageUrl = _ref.placeHolderImageUrl,
      showName = _ref.showName,
      showPagesNumber = _ref.showPagesNumber,
      small = _ref.small,
      message = _ref.message,
      zoomable = _ref.zoomable;

  var _useState = useState({
    Document: null,
    Page: null,
    pdfjs: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      pdfLoader = _useState2[0],
      setPdfLoader = _useState2[1];

  var loadModules = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _yield$import, Document, Page, pdfjs, path;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return import('react-pdf');

            case 2:
              _yield$import = _context.sent;
              Document = _yield$import.Document;
              Page = _yield$import.Page;
              pdfjs = _yield$import.pdfjs;
              path = '//cdnjs.cloudflare.com/ajax/libs/pdf.js';
              pdfjs.GlobalWorkerOptions.workerSrc = "".concat(path, "/").concat(pdfjs.version, "/pdf.worker.js");
              setPdfLoader({
                Document: Document,
                Page: Page,
                pdfjs: pdfjs
              });

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function loadModules() {
      return _ref2.apply(this, arguments);
    };
  }();

  useEffect(function () {
    loadModules();
    return function () {};
  }, []);
  var cropperRef = useRef(null);

  var onDocumentLoadSuccess = function onDocumentLoadSuccess(_ref3) {
    var numPages = _ref3.numPages;
    showPagesNumber && onPdfDocumentLoaded && onPdfDocumentLoaded({
      file: file,
      name: file === null || file === void 0 ? void 0 : file.name,
      pagesNumber: numPages
    });
  };

  var src = source(file);

  var imagePreview = function imagePreview() {
    if (zoomable) {
      var _file$src2;

      return /*#__PURE__*/React.createElement(Cropper, {
        src: (_file$src2 = file.src) !== null && _file$src2 !== void 0 ? _file$src2 : URL.createObjectURL(file),
        style: {
          height: '100%',
          width: '100%'
        },
        highlight: true,
        movable: true,
        zoomable: true,
        zoomOnTouch: true,
        zoomOnWheel: true,
        autoCrop: false,
        background: false,
        guides: false,
        checkCrossOrigin: false,
        dragMode: "move",
        ref: cropperRef
      });
    } else {
      return /*#__PURE__*/React.createElement(PreviewImage, {
        contain: contain,
        dim: dim,
        src: src,
        onClick: onClick,
        style: imageStyles
      });
    }
  };

  var pdfPreview = function pdfPreview() {
    if (file.thumbnail) {
      return /*#__PURE__*/React.createElement(PreviewImage, {
        contain: contain,
        dim: dim,
        src: file.thumbnail,
        onClick: onClick,
        style: imageStyles
      });
    } else {
      return /*#__PURE__*/React.createElement(PdfWrapper, {
        onClick: onClick,
        small: small,
        message: message
      }, pdfLoader.Document && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(pdfLoader.Document, {
        file: src,
        onLoadSuccess: onDocumentLoadSuccess
      }, /*#__PURE__*/React.createElement(pdfLoader.Page, {
        pageNumber: 1
      }))));
    }
  };

  if (checkFileType(file, 'image')) {
    return imagePreview();
  } else if (checkFileType(file, 'pdf')) {
    return pdfPreview();
  } else {
    return /*#__PURE__*/React.createElement(PlaceHolder, null, /*#__PURE__*/React.createElement(FilePlaceHolder, {
      placeHolderImageUrl: placeHolderImageUrl
    }), showName && (file === null || file === void 0 ? void 0 : file.name));
  }
}, function (_ref4, _ref5) {
  var prevFile = _ref4.file;
  var nextFile = _ref5.file;

  if (nextFile.src) {
    if (!(prevFile.src === nextFile.src)) {
      return false;
    }
  } else if (nextFile.name) {
    if (!(prevFile.name === nextFile.name)) {
      return false;
    }
  }

  return true;
});
var PreviewImage = styled.img(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  ", "\n  ", "\n  ", "\n"])), function (_ref6) {
  var onClick = _ref6.onClick;
  return onClick && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      cursor: pointer;\n    "])));
}, function (_ref7) {
  var contain = _ref7.contain;
  return contain && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      object-fit: contain;\n    "])));
}, function (_ref8) {
  var dim = _ref8.dim;
  return dim && css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      filter: brightness(0.4);\n    "])));
});
var PdfWrapper = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n"])), function (_ref9) {
  var onClick = _ref9.onClick;
  return onClick && css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      cursor: pointer;\n    "])));
}, function (_ref10) {
  var small = _ref10.small,
      message = _ref10.message;

  if (message || small) {
    var size = small ? '4rem' : '10rem';
    return css(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n        width: 100%;\n        height: ", ";\n        overflow: hidden;\n        .react-pdf__Page__canvas,\n        .react-pdf__Page__textContent {\n          width: 100% !important;\n          height: auto !important;\n        }\n      "])), size);
  }
});
var FilePlaceHolder = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  height: 3rem;\n  margin-bottom: 0.5rem;\n  width: 3rem;\n"])), function (_ref11) {
  var placeHolderImageUrl = _ref11.placeHolderImageUrl;
  return placeHolderImageUrl !== null && placeHolderImageUrl !== void 0 ? placeHolderImageUrl : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA8CAYAAADL94L/AAAByElEQVR4Ae3axdJTQRAFYFyegA3u8ALseCDcicsGhxt3x+G32BXc3X3NBnfXYTqp3sZlhuqpOlXZRL46He9ReJyJxGSTEreaPfEHZiX+1uSJvelVNu+Jvjd7Yk9zI8aSUe0eDpjCIYfNSuw5v/zF5In/6mU27478tXriLJvXjdSwPq1lCDTCmxjiCNav8GZYBVMwWKagX8kWjk9vCcMhYWhEFEw1+oV0wZjdPKY6Vn9EwmBDTYPwBoXCYPLGDQTJjkHQNQRJj0FQtmgs+C8wOHIIkh2DoDu5vD5Xfkz9hsTBWDyxhjDYUDqvLRYSY1JilSQGyyxXOt4QKJPX70NDQmI27gyxHcn9bH/5RFMNAUgoDI4afOAMHBiCdiDNj5woGAhgsCEYudSI1lBCRwoPL957slAoDDYEoPXb/ZVs3FE/y9072fDxsx4BMPVfGOpl1VY/y5++4EWM1Fm9LcCKpy8RpnchDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxhYNlXiP+XHXLRDM5thQVpyzIfS2YtLceVEkRmzalsgMArPhp258bA6b/LEb8LqPM930VNdvY/fhMmCxw+Of+4BTcPInBo2AAAAAElFTkSuQmCC';
});
var PlaceHolder = styled.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"])));
//# sourceMappingURL=index.js.map