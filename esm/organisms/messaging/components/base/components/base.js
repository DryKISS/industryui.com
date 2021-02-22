import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17;

/**
 * Messaging/Base
 */
// React
import React, { useRef, useState } from 'react';
import { any, string } from 'prop-types'; // UI

import { Avatar, AudioWrapper, Card, Column, Dropdown, hashtagPlugin, Icon, Image, linkifyPlugin, MentionComponent, MessageNames, MessagingActions, MessagingAudioPlayer, MessagingCommunicationService, MessagingEditor, Preview, ReplyContainer, Row, TranslationService } from '../../../../../';
import { MessageIcon } from './icon';
import { MessageTo } from './to';
import { MenuIcon } from './menuIcon';
import { Loadingspinner } from './loadingSpinner';
import { EditorState, ContentState, convertFromRaw } from 'draft-js';
import createMentionPlugin from '@draft-js-plugins/mention';
import createEmojiPlugin from '@draft-js-plugins/emoji'; // Style

import styled, { css } from 'styled-components';
var mentionPlugin = createMentionPlugin({
  mentionComponent: function mentionComponent(mentionProps) {
    return /*#__PURE__*/React.createElement(MentionComponent, {
      mentionProps: mentionProps
    });
  }
});
var emojiPlugin = createEmojiPlugin();
export var MessageBase = function MessageBase(_ref) {
  var attachments = _ref.attachments,
      avatar = _ref.avatar,
      content = _ref.content,
      from = _ref.from,
      hasMenu = _ref.hasMenu,
      hasText = _ref.hasText,
      hovered = _ref.hovered,
      icon = _ref.icon,
      id = _ref.id,
      more = _ref.more,
      pictureId = _ref.pictureId,
      prevType = _ref.prevType,
      reply = _ref.reply,
      replyTo = _ref.replyTo,
      statusText = _ref.statusText,
      time = _ref.time,
      to = _ref.to,
      type = _ref.type,
      voice = _ref.voice;

  var _useState = useState(EditorState.createWithContent(content.blocks ? convertFromRaw(content) : ContentState.createFromText(content))),
      _useState2 = _slicedToArray(_useState, 2),
      editorState = _useState2[0],
      setEditorState = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showingTranslation = _useState4[0],
      setShowingTranslation = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loadingTranslation = _useState6[0],
      setloadingTranslation = _useState6[1];

  var translated = useRef(null);

  var toggleTranslation = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var plainText, _yield$TranslationSer, response;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (showingTranslation) {
                _context.next = 18;
                break;
              }

              if (translated.current) {
                _context.next = 14;
                break;
              }

              setloadingTranslation(true);

              if (content.blocks) {
                plainText = content.blocks.map(function (block) {
                  return !block.text.trim() && '\n' || block.text;
                }).join('\n');
              } else {
                plainText = content;
              }

              _context.next = 6;
              return TranslationService.Translate(plainText);

            case 6:
              _yield$TranslationSer = _context.sent;
              response = _yield$TranslationSer.response;
              translated.current = EditorState.createWithContent(ContentState.createFromText(response));
              setEditorState(translated.current);
              setShowingTranslation(true);
              setloadingTranslation(false);
              _context.next = 16;
              break;

            case 14:
              setEditorState(translated.current);
              setShowingTranslation(true);

            case 16:
              _context.next = 20;
              break;

            case 18:
              setEditorState(EditorState.createWithContent(content.blocks ? convertFromRaw(content) : ContentState.createFromText(content)));
              setShowingTranslation(false);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function toggleTranslation() {
      return _ref2.apply(this, arguments);
    };
  }();

  var dropDownAction = function dropDownAction(item) {
    var action = '';

    switch (item.id) {
      case 'edit':
        action = MessagingActions.EDIT_MESSAGE;
        break;

      case 'delete':
        action = MessagingActions.DELETE_MESSAGE;
        break;

      case 'star':
        action = MessagingActions.STAR_MESSAGE;
        break;

      default:
        break;
    }

    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: action,
        data: {
          attachments: attachments,
          content: content,
          from: from,
          hovered: hovered,
          icon: icon,
          id: id,
          more: more,
          pictureId: pictureId,
          prevType: prevType,
          reply: reply,
          statusText: statusText,
          time: time,
          to: to,
          type: type,
          voice: voice
        }
      }
    });
  };

  var handleFileClick = function handleFileClick(files, index) {
    var av = avatar ? /*#__PURE__*/React.createElement(Avatar, {
      size: "xxs",
      src: avatar
    }) : /*#__PURE__*/React.createElement(Avatar, {
      size: "xxs",
      content: from[0]
    });
    MessagingCommunicationService.send({
      name: MessageNames.Messaging.MESSAGING_ACTION,
      payload: {
        action: MessagingActions.SET_FULL_PREVIEW_FILES,
        data: {
          files: files,
          selectedIndex: index,
          avatar: av,
          from: from,
          time: time
        }
      }
    });
  };

  return /*#__PURE__*/React.createElement(MessageWrapper, {
    type: type,
    hovered: hovered
  }, /*#__PURE__*/React.createElement(StyledHead, {
    type: type
  }, /*#__PURE__*/React.createElement(StyledHeadText, {
    type: type
  }, from, " ", /*#__PURE__*/React.createElement(Dot, null), time.split(' ')[time.split(' ').length - 1]), hasMenu && /*#__PURE__*/React.createElement(MenuWrapper, null, /*#__PURE__*/React.createElement(Dropdown, {
    caret: false,
    items: [{
      name: 'Star Message',
      id: 'star'
    }, {
      name: 'Edit Message',
      id: 'edit'
    }, {
      name: 'Delete Message',
      id: 'delete'
    }],
    position: "bottom",
    onChange: function onChange(item) {
      return dropDownAction(item);
    }
  }, /*#__PURE__*/React.createElement(MenuIcon, null)))), /*#__PURE__*/React.createElement(StyledCard, {
    type: type
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Column, {
    sm: 6,
    style: {
      display: 'flex',
      alignItems: 'center',
      marginTop: '-0.5rem'
    }
  }, /*#__PURE__*/React.createElement(MessageIcon, {
    icon: icon
  }), to && /*#__PURE__*/React.createElement(MessageTo, {
    to: to
  }), /*#__PURE__*/React.createElement(StyledReply, null, reply))), /*#__PURE__*/React.createElement(Row, null, pictureId && /*#__PURE__*/React.createElement(Column, {
    sm: 2
  }, /*#__PURE__*/React.createElement(Image, {
    alt: "Image",
    src: pictureId
  })), /*#__PURE__*/React.createElement(Column, {
    sm: pictureId ? 8 : !type ? 11 : 12
  }, replyTo && /*#__PURE__*/React.createElement(ReplyContainer, {
    message: replyTo,
    inMessage: true,
    onClose: null
  }), /*#__PURE__*/React.createElement(StyledContent, null, voice && /*#__PURE__*/React.createElement(AudioWrapper, null, /*#__PURE__*/React.createElement(MessagingAudioPlayer, {
    src: voice,
    inMessage: true
  })), hasText && /*#__PURE__*/React.createElement(MessagingEditor, {
    plugins: [emojiPlugin, hashtagPlugin, linkifyPlugin, mentionPlugin],
    onChange: function onChange(e) {
      return setEditorState(e);
    },
    editorState: editorState,
    readOnly: true
  }))), !type && /*#__PURE__*/React.createElement(Column, {
    sm: 1
  }, /*#__PURE__*/React.createElement(Icon, {
    color: statusText === 'Delivered' ? 'green' : '#bbb',
    icon: "check-circle"
  }))), type === 'in' && hasText && /*#__PURE__*/React.createElement(TranslatorWrapper, {
    onClick: toggleTranslation
  }, showingTranslation ? 'See Original' : 'See Translation', loadingTranslation && /*#__PURE__*/React.createElement(Loadingspinner, null)), attachments && attachments.length > 0 && /*#__PURE__*/React.createElement(AttachmentsContainer, null, Array.from(attachments).forEach(function (item, index) {
    if (index < 4) {
      return /*#__PURE__*/React.createElement(SingleAttachment, {
        key: index,
        onClick: function onClick() {
          return handleFileClick(attachments, index);
        }
      }, attachments.length > 4 && index === 3 && /*#__PURE__*/React.createElement(OverlayForAdditionalMessages, null, "+", attachments.length - 4), /*#__PURE__*/React.createElement(Preview, {
        dim: attachments.length > 4 && index === 3,
        imageStyles: {
          minHeight: '10rem',
          height: '10rem',
          objectFit: 'cover'
        },
        file: item,
        message: true
      }));
    }
  }))));
};
MessageBase.displayName = "MessageBase";
var OverlayForAdditionalMessages = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  align-items: center;\n  color: white;\n  display: flex;\n  height: 40%;\n  font-size: 5rem;\n  position: absolute;\n  justify-content: center;\n  width: 40%;\n  z-index: 1;\n"])));
var StyledHeadText = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  ", "\n"])), function (_ref3) {
  var type = _ref3.type;
  return type === 'out' && css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      flex-direction: row-reverse;\n    "])));
});
var TranslatorWrapper = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  font-size: 0.625rem;\n  font-weight: 600;\n  width: fit-content;\n"])), function (_ref4) {
  var MESSAGING = _ref4.theme.MESSAGING;
  return MESSAGING.translatorTextColour;
});
var MenuWrapper = styled.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  display: flex;\n  margin-top: -1rem;\n  margin-bottom: -1rem;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 0.3s;\n"])));
var SingleAttachment = styled.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  overflow: hidden;\n  max-width: calc(90% - 0.5rem);\n"])));
var AttachmentsContainer = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 49% 49%;\n  grid-row: auto auto;\n  grid-row-gap: 1rem;\n"])));
var MessageWrapper = styled.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  flex: 1;\n  margin-top: 1.5rem;\n  max-width: 80%;\n  ", "\n  ", "\n"])), function (_ref5) {
  var type = _ref5.type;
  return type === 'out' && css(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      margin-left: 20%;\n    "])));
}, function (_ref6) {
  var hovered = _ref6.hovered;
  return hovered && css(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      ", " {\n        opacity: 1;\n        pointer-events: inherit;\n      }\n    "])), MenuWrapper);
});
var StyledCard = styled(Card)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border: 1px solid\n    ", ";\n  border-radius: ", ";\n  margin-bottom: 0.5rem;\n  padding: 1.25rem 1rem;\n"])), function (_ref7) {
  var type = _ref7.type,
      MESSAGING = _ref7.theme.MESSAGING;
  return type === 'in' ? MESSAGING.receivedMessageBackground : MESSAGING.sentMessageBackground;
}, function (_ref8) {
  var MESSAGING = _ref8.theme.MESSAGING;
  return MESSAGING.messageBorderColour;
}, function (_ref9) {
  var type = _ref9.type;
  return type === 'out' ? '1rem 0 1rem 1rem' : '0 1rem 1rem 1rem';
});
var StyledContent = styled.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: ", ";\n"])), function (_ref10) {
  var MESSAGING = _ref10.theme.MESSAGING;
  return MESSAGING.messageContentColour;
}, function (_ref11) {
  var MESSAGING = _ref11.theme.MESSAGING;
  return MESSAGING.messageFontSize;
});
var StyledReply = styled.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 0.75rem;\n"])), function (_ref12) {
  var MESSAGING = _ref12.theme.MESSAGING;
  return MESSAGING.messageReplyTextColour;
});
var StyledHead = styled.span(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  font-size: 0.75rem;\n  font-weight: 600;\n  justify-content: space-between;\n  position: absolute;\n  text-align: right;\n  top: 0.25rem;\n  ", "\n"])), function (_ref13) {
  var MESSAGING = _ref13.theme.MESSAGING;
  return MESSAGING.fromTextColour;
}, function (_ref14) {
  var type = _ref14.type;
  return type === 'out' ? css(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n          flex-direction: row-reverse;\n          right: 3.25rem;\n          width: 73%;\n        "]))) : css(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n          left: 3.25rem;\n          width: 80%;\n        "])));
});
var Dot = styled.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  border-radius: 1rem;\n  height: 0.25rem;\n  margin: 0.25rem;\n  width: 0.25rem;\n"])), function (_ref15) {
  var MESSAGING = _ref15.theme.MESSAGING;
  return MESSAGING.fromTextColour;
});
MessageBase.propTypes = {
  content: any,
  pictureId: string,
  statusText: string,
  time: string,
  type: string
};
//# sourceMappingURL=base.js.map