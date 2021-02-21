import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;

// React
import React, { useEffect, useState } from 'react'; // Style

import styled, { css } from 'styled-components'; // UI

import { Close, Preview, Space, Text } from '../../../../';
export var MessagingDragHover = function MessagingDragHover(_ref) {
  var files = _ref.files,
      handleRemoveFile = _ref.handleRemoveFile,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedFile = _useState2[0],
      setselectedFile = _useState2[1];

  var _useState3 = useState({
    name: null,
    pagesNumber: 0
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      documentInfo = _useState4[0],
      setDocumentInfo = _useState4[1];

  var resetDocInfo = function resetDocInfo() {
    setDocumentInfo({
      name: null,
      pagesNumber: 0
    });
  };

  var onFileClick = function onFileClick(file) {
    resetDocInfo();
    setselectedFile(file);
  };

  var handleRemoveClick = function handleRemoveClick(e) {
    resetDocInfo();
    handleRemoveFile(e);
  };

  useEffect(function () {
    setselectedFile(files[files.length - 1]);
  }, [files.length, files[0] ? files[0].name : '']);

  var handlePdfDocumentLoaded = function handlePdfDocumentLoaded(data) {
    setDocumentInfo(data);
  };

  return /*#__PURE__*/React.createElement(Wrapper, {
    open: isOpen
  }, /*#__PURE__*/React.createElement(ContentWrapper, null, /*#__PURE__*/React.createElement(Head, null, /*#__PURE__*/React.createElement(Close, {
    click: onClose,
    context: "white"
  }), /*#__PURE__*/React.createElement(Space, {
    marginLeft: "sm"
  }, /*#__PURE__*/React.createElement(Text, {
    context: "white"
  }, "Preview"))), /*#__PURE__*/React.createElement(LastFilePreviewContainer, {
    visible: files.length > 0
  }, selectedFile && /*#__PURE__*/React.createElement(Preview, {
    file: selectedFile,
    showName: true,
    showPagesNumber: true,
    onPdfDocumentLoaded: handlePdfDocumentLoaded
  })), documentInfo.pagesNumber > 0 && files.length > 0 && /*#__PURE__*/React.createElement(DocumentInfoWrapper, null, /*#__PURE__*/React.createElement(DocumentNameWrapper, null, /*#__PURE__*/React.createElement(DocumentFileIcon, {
    pdf: true
  }), /*#__PURE__*/React.createElement(DocumentName, null, documentInfo.name)), /*#__PURE__*/React.createElement(DucumentPagesNumber, null, "".concat(documentInfo.pagesNumber, " Page").concat(documentInfo.pagesNumber > 1 ? 's' : ''))), !files[0] && /*#__PURE__*/React.createElement(DragFilesHereContainer, null, /*#__PURE__*/React.createElement(Text, {
    size: "xl",
    context: "dark"
  }, "Drag File Here")), /*#__PURE__*/React.createElement(PreviewContainer, null, selectedFile && files.map(function (item, index) {
    return /*#__PURE__*/React.createElement(BottomPreviewContainer, {
      key: index
    }, /*#__PURE__*/React.createElement(RemoveContainer, null, /*#__PURE__*/React.createElement(Close, {
      click: function click() {
        return handleRemoveClick(index);
      },
      context: "white"
    })), /*#__PURE__*/React.createElement(Preview, {
      onClick: function onClick() {
        return onFileClick(item);
      },
      file: item,
      small: true
    }));
  }))));
};
MessagingDragHover.displayName = "MessagingDragHover";
var DocumentNameWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"])));
var DocumentFileIcon = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  background-repeat: no-repeat;\n  height: 1.5rem;\n  margin-right: 1rem;\n  width: 1rem;\n  ", "\n"])), function (_ref2) {
  var pdf = _ref2.pdf;
  return pdf === true && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAWCAYAAAAmaHdCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEwSURBVHgBpZPvbYMwEMXfAZHykRGcDSAs0A3abNAVOkGaCdoNwgbtBmWAJKUT1CPwMVLkuGcaS4DABvKkky3/+flxd5DOsi8AD3BL0vG40mmag+iXTqddczMYAWiL6FWv19suZLo6oHkQC8qyvZlGuE/PDJoICYJPaC27y8QkjXHaQKmyb2OKkw+EYe+GL7Ebtv/iOeN0UtzsS3ZQ8RgPHXQ5ERwVRsgHsYoxE2IvS3gcuSB5DYmixJfc4T5RasUJNf/HE8/Tem25NOsxR8Jtv/c5yaksJTv4wWJhAKKO87nC5RLjei2andsusdYVt/aODod3nSTmtUe+tGVHNrHmou1a0f85xnYYCh4LHr/RrtCgmk5kHUpJdvM2FtCFiNvrMTx94YL8g2bIVKfEfSr+AAEZZZW4bAd8AAAAAElFTkSuQmCC');\n      "])));
});
var DocumentName = styled.p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));
var DucumentPagesNumber = styled.p(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])));
var DocumentInfoWrapper = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding: 0 3.5rem;\n  position: absolute;\n  top: 70%;\n  width: 100%;\n  p {\n    color: ", ";\n    font-size: 1.25rem;\n    margin: 0;\n  }\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.dark;
});
var RemoveContainer = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  align-items: center;\n  background: ", ";\n  border: 2px solid ", ";\n  border-radius: 50px;\n  display: flex;\n  height: 26px;\n  justify-content: center;\n  opacity: 0;\n  position: absolute;\n  right: -15px;\n  transition: opacity 0.3s;\n  top: -12px;\n  width: 26px;\n  z-index: 1;\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.COLOUR.info;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.COLOUR.info;
});
var PreviewContainer = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  height: 9rem;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n  ", "\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), theme.COLOUR.grey);
});
var BottomPreviewContainer = styled.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  border: 2px solid ", ";\n  box-sizing: content-box;\n  margin: 0 0.25rem;\n  position: relative;\n  width: 4rem;\n  transition-property: border-color;\n  transition-duration: 0.3s;\n  &:hover {\n    border: 2px solid ", ";\n    ", " {\n      opacity: 1;\n    }\n  }\n"])), function (_ref7) {
  var theme = _ref7.theme;
  return theme.COLOUR.blackGrey;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.COLOUR.info;
}, RemoveContainer);
var ContentWrapper = styled.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  height: 100%;\n  position: relative;\n  width: 100%;\n"])), function (_ref9) {
  var theme = _ref9.theme;
  return theme.COLOUR.white;
});
var CenterContainer = styled.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: grid;\n  height: calc(100% - 17rem);\n  left: 3.5rem;\n  place-content: center;\n  position: absolute;\n  top: 4rem;\n  width: calc(100% - 7rem);\n"])));
var DragFilesHereContainer = styled(CenterContainer)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  border: 0.25rem dashed;\n"])));
var LastFilePreviewContainer = styled(CenterContainer)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  border-radius: 9px;\n  border: 1px solid;\n  opacity: 0;\n  overflow: hidden;\n  transform: scale(0.5);\n  transition-property: opacity, transform;\n  transition-duration: 0.3s;\n  ", "\n"])), function (_ref10) {
  var visible = _ref10.visible;
  return visible === true && css(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      opacity: 1;\n      transform: scale(1);\n    "])));
});
var Head = styled.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  height: 3rem;\n  padding: 0 1.25rem;\n  background-color: ", ";\n"])), function (_ref11) {
  var MESSAGING = _ref11.theme.MESSAGING;
  return MESSAGING.dropableHeaderBackground;
});
var Wrapper = styled.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  height: calc(100% - 5.3rem);\n  position: absolute;\n  top: 0;\n  transform: translateY(calc(100% + 5.3rem));\n  width: 100%;\n\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  ", "\n"])), function (_ref12) {
  var open = _ref12.open;
  return open === true && css(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      transform: translateY(0%);\n    "])));
});
//# sourceMappingURL=index.js.map