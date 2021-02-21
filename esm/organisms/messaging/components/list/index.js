import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _templateObject, _templateObject2, _templateObject3;

/**
 * Messaging/List
 */
// React
import React, { memo, useEffect, useRef, useState } from 'react';
import { array } from 'prop-types'; // React Virtualised

import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized'; // UI

import { DateDiff, Message, MessageNames, MessagingSubscriber, MessagingActions, useComponentCommunication } from '../../../../'; // Style

import styled, { css } from 'styled-components';

var renderMessage = function renderMessage(_ref, messages, cache, config) {
  var index = _ref.index,
      parent = _ref.parent,
      key = _ref.key,
      style = _ref.style;
  return /*#__PURE__*/React.createElement(CellMeasurer, {
    cache: cache,
    key: index,
    parent: parent,
    columnIndex: 0,
    rowIndex: index
  }, /*#__PURE__*/React.createElement(MessageContainer, {
    type: messages[index].type,
    style: style
  }, /*#__PURE__*/React.createElement(Message, {
    config: config,
    message: messages[index],
    prevType: messages[index].type,
    type: messages[index].type
  })));
};

renderMessage.displayName = "renderMessage";
var cacheConfig = {
  fixedWidth: true,
  defaultHeight: 50
};
export var MessageList = /*#__PURE__*/memo(function (_ref2) {
  var initialMessages = _ref2.initialMessages,
      onMessageRecieved = _ref2.onMessageRecieved,
      config = _ref2.config;
  var listRef = useRef(null);
  var widthRef = useRef(null);
  var heightRef = useRef(null);

  var _useState = useState(initialMessages),
      _useState2 = _slicedToArray(_useState, 2),
      Messages = _useState2[0],
      setMessages = _useState2[1];

  var _useState3 = useState(new CellMeasurerCache(cacheConfig)),
      _useState4 = _slicedToArray(_useState3, 2),
      cache = _useState4[0],
      setcache = _useState4[1];

  for (var i = 0; i < Messages.length; i++) {
    if (i !== 0) {
      var current = new Date(Messages[i].time);
      var previous = new Date(Messages[i - 1].time);
      var diff = DateDiff.inDays(previous, current);

      if (diff > 0) {
        Messages[i].headerTime = Messages[i].time.slice(0, 14);
      }
    } else {
      Messages[i].headerTime = Messages[i].time.slice(0, 14);
    }
  }

  var scrollToBottom = function scrollToBottom() {
    window && window.requestAnimationFrame(function () {
      listRef.current && listRef.current.scrollToRow(Messages.length);
    });
  };

  var onRecieve = function onRecieve(payload) {
    var newMessagesArray = [].concat(_toConsumableArray(Messages), _toConsumableArray(payload));
    setMessages(function () {
      return _toConsumableArray(newMessagesArray);
    });
    scrollToBottom();
  };

  var onRenewMessages = function onRenewMessages(messages) {
    setMessages(function () {
      return _toConsumableArray(messages);
    });
    window && window.requestAnimationFrame(function () {
      setcache(function () {
        return new CellMeasurerCache(cacheConfig);
      });
      listRef.current && listRef.current.scrollToRow(Messages.length);
    });
  };

  useEffect(function () {
    scrollToBottom();
    return function () {};
  }, [Messages.length]);

  var onAction = function onAction(payload) {
    switch (payload.action) {
      case MessagingActions.NEW_MESSAGES:
        onRecieve(payload.data);
        break;

      case MessagingActions.RENEW_MESSAGES:
        onRenewMessages(payload.data);
        break;

      default:
        break;
    }

    onMessageRecieved(payload.data);
  };

  useComponentCommunication({
    dependencies: [Messages.length],
    messageName: MessageNames.Messaging.MESSAGING_ACTION,
    onRecieve: onAction,
    subscriber: MessagingSubscriber
  });
  return /*#__PURE__*/React.createElement(AutoSizer, null, function (_ref3) {
    var height = _ref3.height,
        width = _ref3.width;

    if (width !== widthRef.current || height !== heightRef.current) {
      widthRef.current = width;
      heightRef.current = height;
      window && window.requestAnimationFrame(function () {
        setcache(new CellMeasurerCache(cacheConfig));
      });
    }

    return /*#__PURE__*/React.createElement(List, {
      style: {
        padding: '0.5rem 0'
      },
      deferredMeasurementCache: cache,
      height: height,
      overscanRowCount: 10,
      ref: listRef,
      rowCount: Messages.length,
      rowHeight: cache.rowHeight,
      rowRenderer: function rowRenderer(e) {
        return renderMessage(e, Messages, cache, config);
      },
      scrollToIndex: Messages.length - 1,
      width: width
    });
  });
}, function () {
  return true;
});
var MessageContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref4) {
  var type = _ref4.type;
  return type === 'in' ? css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n          padding-right: 0.5rem;\n        "]))) : css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n          padding-left: 0.5rem;\n        "])));
});
MessageList.propTypes = {
  initialMessages: array.isRequired
};
//# sourceMappingURL=index.js.map