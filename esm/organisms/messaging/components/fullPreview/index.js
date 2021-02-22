import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20;

/**
 * Components - Organisms - Messaging - Components - Full Preview
 */
// React
import React, { useEffect, useRef, useState } from 'react'; // Style

import styled, { css } from 'styled-components'; // UI

import { ChevronIcon, CrossIcon, DownloadIcon, downloadFile, MessageNames, MessagingActions, MessagingSubscriber, Preview, useComponentCommunication } from '../../../../';
export var FullPreview = function FullPreview() {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedFileIndex = _useState2[0],
      setSelectedFileIndex = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      maxDocHeight = _useState4[0],
      setMaxDocHeight = _useState4[1];

  var files = useRef();
  var senderData = useRef();
  var previewWrapperRef = useRef();
  var fileName;

  if (selectedFileIndex !== null) {
    var _files$current$select;

    if ((_files$current$select = files.current[selectedFileIndex]) !== null && _files$current$select !== void 0 && _files$current$select.src) {
      fileName = files.current[selectedFileIndex].src.split('/')[files.current[selectedFileIndex].src.split('/').length - 1];
    } else {
      fileName = 'localFile';
    }
  }

  useEffect(function () {
    var _files$current$select2;

    if (previewWrapperRef.current && (_files$current$select2 = files.current[selectedFileIndex]) !== null && _files$current$select2 !== void 0 && _files$current$select2.type.includes('pdf')) {
      setTimeout(function () {
        var height = previewWrapperRef.current.offsetHeight;
        setMaxDocHeight(height);
      }, 0);
    } else if (maxDocHeight !== null) {
      setMaxDocHeight(null);
    }

    return function () {};
  }, [selectedFileIndex]);

  var onAction = function onAction(payload) {
    switch (payload.action) {
      case MessagingActions.SET_FULL_PREVIEW_FILES:
        {
          var _payload$data = payload.data,
              avatar = _payload$data.avatar,
              from = _payload$data.from,
              time = _payload$data.time,
              attachments = _payload$data.files,
              selectedIndex = _payload$data.selectedIndex;
          files.current = Array.from(attachments);
          senderData.current = {
            avatar: avatar,
            from: from,
            time: time
          };
          setSelectedFileIndex(selectedIndex);
          break;
        }

      default:
        break;
    }
  };

  useComponentCommunication({
    messageName: MessageNames.Messaging.MESSAGING_ACTION,
    onRecieve: onAction,
    subscriber: MessagingSubscriber
  });

  var handleHide = function handleHide() {
    setSelectedFileIndex(null);
  };

  var onFileClick = function onFileClick(e, index) {
    e.stopPropagation();
    setSelectedFileIndex(index);
  };

  var handleArrowClick = function handleArrowClick(e, direction) {
    e.stopPropagation();

    switch (direction) {
      case 'right':
        if (selectedFileIndex === files.current.length - 1) {
          setSelectedFileIndex(0);
          return;
        }

        setSelectedFileIndex(function (index) {
          return index + 1;
        });
        break;

      case 'left':
        if (selectedFileIndex === 0) {
          setSelectedFileIndex(files.current.length - 1);
          return;
        }

        setSelectedFileIndex(function (index) {
          return index - 1;
        });
        break;

      default:
        break;
    }
  };

  var handleMainPreviewClick = function handleMainPreviewClick(e) {
    e.stopPropagation();
  };

  var handleDownloadClick = function handleDownloadClick(url, filename) {
    return downloadFile({
      url: url,
      filename: filename
    });
  };

  return /*#__PURE__*/React.createElement(Wrapper, {
    onClick: handleHide,
    visible: selectedFileIndex !== null
  }, /*#__PURE__*/React.createElement(CrossWrapper, {
    onClick: handleHide
  }, /*#__PURE__*/React.createElement(CrossIcon, {
    colour: "white"
  })), /*#__PURE__*/React.createElement(ContentWrapper, null, selectedFileIndex !== null && /*#__PURE__*/React.createElement(SelectedFilePreviewContainer, {
    onClick: handleMainPreviewClick,
    ref: previewWrapperRef,
    maxDocHeight: maxDocHeight,
    visible: files.current.length > 0
  }, /*#__PURE__*/React.createElement(ChevronWrapper, null, /*#__PURE__*/React.createElement(ChevronIcon, {
    size: 36,
    onClick: function onClick(e) {
      return handleArrowClick(e, 'left');
    }
  })), /*#__PURE__*/React.createElement(Preview, {
    file: files.current[selectedFileIndex],
    contain: true,
    zoomable: files.current[selectedFileIndex].type.includes('image')
  }), /*#__PURE__*/React.createElement(ChevronWrapper, {
    right: true
  }, /*#__PURE__*/React.createElement(ChevronIcon, {
    size: 36,
    onClick: function onClick(e) {
      return handleArrowClick(e, 'right');
    }
  }))), /*#__PURE__*/React.createElement(PreviewsWrapper, null, selectedFileIndex !== null ? files.current.map(function (item, index) {
    return /*#__PURE__*/React.createElement(BottomPreviewContainer, {
      key: index,
      selected: selectedFileIndex === index
    }, /*#__PURE__*/React.createElement(Preview, {
      onClick: function onClick(e) {
        return onFileClick(e, index);
      },
      file: item,
      small: true
    }));
  }) : /*#__PURE__*/React.createElement(React.Fragment, null)), /*#__PURE__*/React.createElement(BottomContainer, null, senderData.current && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SenderInfoWrapper, null, /*#__PURE__*/React.createElement(AvatarWrapper, null, senderData.current.avatar), /*#__PURE__*/React.createElement(InfoWrapper, null, /*#__PURE__*/React.createElement(From, null, senderData.current.from), /*#__PURE__*/React.createElement(SentDate, null, senderData.current.time))), /*#__PURE__*/React.createElement(NumbersWrapper, null, "".concat(selectedFileIndex + 1, " of ").concat(files.current.length)), selectedFileIndex !== null && /*#__PURE__*/React.createElement(ActionsWrapper, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement(Actions, null, /*#__PURE__*/React.createElement(DownloadIcon, {
    onClick: function onClick() {
      return handleDownloadClick(files.current[selectedFileIndex].src, fileName);
    },
    colour: "#c1c1c1"
  })))))));
};
FullPreview.displayName = "FullPreview";
var ChevronWrapper = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  left: 0.5rem;\n  position: absolute;\n  top: 40%;\n  z-index: 1;\n  ", "\n"])), function (_ref) {
  var right = _ref.right;
  return right && css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      left: unset;\n      right: 0.5rem;\n      transform: rotate(180deg);\n    "])));
});
var CrossWrapper = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background: rgba(0, 0, 0, 0.3);\n  border-radius: 5rem;\n  display: flex;\n  position: absolute;\n  padding: 5px;\n  right: 1rem;\n  top: 1rem;\n  z-index: 1;\n"])));
var Actions = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));
var ActionsWrapper = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([""])));
var NumbersWrapper = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  color: ", ";\n  flex: 1;\n  padding-left: 25%;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.COLOUR.white;
});
var AvatarWrapper = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-right: 1rem;\n"])));
var InfoWrapper = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral([""])));
var From = styled.p(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  margin-bottom: 0.25rem;\n"])), function (_ref3) {
  var theme = _ref3.theme;
  return theme.COLOUR.white;
});
var SentDate = styled.p(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 0.75rem;\n  margin: 0;\n"])), function (_ref4) {
  var theme = _ref4.theme;
  return theme.COLOUR.white;
});
var SenderInfoWrapper = styled.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"])));
var BottomContainer = styled.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin: 0 0.5rem 1rem 0.5rem;\n  width: 95%;\n"])));
var SelectedFilePreviewContainer = styled.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  border-radius: 9px;\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  max-height: 78%;\n  overflow: hidden;\n  padding-top: 1rem;\n  img {\n    max-height: 100%;\n    max-width: 100%;\n    width: unset;\n  }\n\n  ", "\n"])), function (_ref5) {
  var maxDocHeight = _ref5.maxDocHeight;
  return maxDocHeight && css(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      .react-pdf__Page__canvas {\n        width: unset !important;\n        height: ", "px !important;\n      }\n    "])), maxDocHeight);
});
var PreviewsWrapper = styled.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  bottom: 10%;\n  margin: 0 5% 5%;\n  width: 90%;\n  display: flex;\n"])));
var BottomPreviewContainer = styled.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  border: 2px solid ", ";\n  box-sizing: content-box;\n  margin: 0 0.25rem;\n  position: relative;\n  width: 4rem;\n  transition-property: border-color;\n  transition-duration: 0.3s;\n  ", "\n"])), function (_ref6) {
  var theme = _ref6.theme;
  return theme.COLOUR.blackGrey;
}, function (_ref7) {
  var selected = _ref7.selected;
  return selected && css(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n      border: 2px solid ", ";\n    "])), function (_ref8) {
    var theme = _ref8.theme;
    return theme.COLOUR.info;
  });
});
var ContentWrapper = styled.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n  width: 100%;\n  gap: 1rem;\n"])));
var Wrapper = styled.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  background: rgba(0, 0, 0, 0.9);\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  position: absolute;\n  z-index: 2;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.5s;\n\n  ", "\n"])), function (_ref9) {
  var visible = _ref9.visible;
  return visible && css(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      opacity: 1;\n      pointer-events: initial;\n    "])));
});
//# sourceMappingURL=index.js.map