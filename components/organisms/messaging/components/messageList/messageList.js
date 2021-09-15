/**
 * Messaging/List
 */

// React
import React, { memo, useEffect, useRef, useState } from 'react'
import { array } from 'prop-types'

// React Virtualised
import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized'

// Style
import styled, { css } from 'styled-components'

// UI
import dateDiff from '../../../../utils/date/diff'
import Message from '../message/message'
import MessageNames from '../../../../services/componentCommunication/messageNames'
import MessagingActions from '../../../../organisms/messaging/communication/messagingActions'
import MessagingSubscriber from '../../../../services/componentCommunication/messaging/subscriber'
import useComponentCommunication from '../../../../hooks/useComponentCommunication/useSubscription'

const renderMessage = ({ index, parent, key, style }, messages, cache, config) => {
  return (
    <CellMeasurer cache={cache} key={index} parent={parent} columnIndex={0} rowIndex={index}>
      <MessageContainer type={messages[index].type} style={style}>
        <Message
          isSending={messages[index].isSending}
          config={config}
          message={messages[index]}
          prevType={messages[index].type}
          type={messages[index].type}
        />
      </MessageContainer>
    </CellMeasurer>
  )
}

const cacheConfig = { fixedWidth: true, defaultHeight: 50 }

const MessageList = memo(
  ({ initialMessages, onMessageRecieved, config }) => {
    const listRef = useRef(null)
    const widthRef = useRef(null)
    const heightRef = useRef(null)
    const [Messages, setMessages] = useState(initialMessages)
    const [cache, setcache] = useState(new CellMeasurerCache(cacheConfig))

    if (Messages) {
      for (let i = 0; i < Messages.length; i++) {
        if (i !== 0) {
          const current = new Date(Messages[i].time)
          const previous = new Date(Messages[i - 1].time)
          const diff = dateDiff.inDays(previous, current)
          if (diff > 0) {
            Messages[i].headerTime = Messages[i].time.slice(0, 14)
          }
        } else {
          Messages[i].headerTime = Messages[i].time.slice(0, 14)
        }
      }
    }

    const scrollToBottom = () => {
      window &&
        window.requestAnimationFrame(() => {
          listRef.current && Messages && listRef.current.scrollToRow(Messages.length)
        })
    }

    const onRecieve = (payload) => {
      const tmpMessages = Messages.filter((message) => message.isSending !== true)

      setMessages(tmpMessages)

      const newMessagesArray = [...tmpMessages, ...payload]

      setMessages(() => [...newMessagesArray])

      scrollToBottom()
    }
    const onSendingNewMessage = (payload) => {
      const msg = {
        // attachments can be an array of files or array of type {src:string}
        isSending: true,
        attachments: payload.attachments || [],
        content: payload.message,
        createdAt: 'YYYY-MM-DD HH:mm',
        from: 'me',
        icon: 'comment',
        id: Math.floor(Math.random() * 1000),
        issueId: 1,
        pictureId: null,
        statusText: 'status from server',
        time: 'sending...',
        to: 'all',
        type: 'out',
        ...(payload.voice && { voice: URL.createObjectURL(payload.voice) }),
        ...(payload.replyTo && { replyTo: payload.replyTo })
      }
      const newMessagesArray = [...Messages, msg]
      setMessages(() => [...newMessagesArray])
    }

    const onRenewMessages = (messages) => {
      setMessages(() => [...messages])
      window &&
        window.requestAnimationFrame(() => {
          setcache(() => new CellMeasurerCache(cacheConfig))
          listRef.current && Messages && listRef.current.scrollToRow(Messages.length)
        })
    }

    useEffect(() => {
      scrollToBottom()
      return () => {}
    }, [Messages?.length])

    const onAction = (payload) => {
      switch (payload.action) {
        case MessagingActions.NEW_MESSAGES:
          onRecieve(payload.data)
          break
        case MessagingActions.RENEW_MESSAGES:
          onRenewMessages(payload.data)
          break
        case MessagingActions.IS_SENDING_MESSAGE:
          onSendingNewMessage(payload.data)
          break

        default:
          break
      }
      onMessageRecieved(payload.data)
    }

    useComponentCommunication({
      dependencies: [Messages?.length],
      messageName: MessageNames.Messaging.MESSAGING_ACTION,
      onRecieve: onAction,
      subscriber: MessagingSubscriber
    })

    return (
      <AutoSizer>
        {({ height, width }) => {
          if (width !== widthRef.current || height !== heightRef.current) {
            widthRef.current = width
            heightRef.current = height
            window &&
              window.requestAnimationFrame(() => {
                setcache(new CellMeasurerCache(cacheConfig))
              })
          }
          return (
            <List
              style={{ padding: '0.5rem 0' }}
              deferredMeasurementCache={cache}
              height={height}
              overscanRowCount={10}
              ref={listRef}
              rowCount={Messages?.length ?? 0}
              rowHeight={cache.rowHeight}
              rowRenderer={(e) => renderMessage(e, Messages, cache, config)}
              scrollToIndex={Messages?.length ? Messages.length - 1 : 0}
              width={width}
            />
          )
        }}
      </AutoSizer>
    )
  },
  () => true
)

const MessageContainer = styled.div`
  ${({ type }) =>
    type === 'in'
      ? css`
          padding-right: 0.5rem;
        `
      : css`
          padding-left: 0.5rem;
        `}
`

MessageList.propTypes = {
  initialMessages: array.isRequired
}

export default MessageList
