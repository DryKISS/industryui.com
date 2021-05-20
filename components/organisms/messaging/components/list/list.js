/**
 * Messaging/List
 */

// React
import React, { memo, useEffect, useRef, useState } from 'react'
import { array } from 'prop-types'

// React Virtualised
import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized'

// UI
import {
  DateDiff,
  Message,
  MessageNames,
  MessagingSubscriber,
  MessagingActions,
  useComponentCommunication
} from '../../../../'

// Style
import styled, { css } from 'styled-components'

const renderMessage = ({ index, parent, key, style }, messages, cache, config) => {
  return (
    <CellMeasurer cache={cache} key={index} parent={parent} columnIndex={0} rowIndex={index}>
      <MessageContainer type={messages[index].type} style={style}>
        <Message
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

    for (let i = 0; i < Messages.length; i++) {
      if (i !== 0) {
        const current = new Date(Messages[i].time)
        const previous = new Date(Messages[i - 1].time)
        const diff = DateDiff.inDays(previous, current)
        if (diff > 0) {
          Messages[i].headerTime = Messages[i].time.slice(0, 14)
        }
      } else {
        Messages[i].headerTime = Messages[i].time.slice(0, 14)
      }
    }
    const scrollToBottom = () => {
      window &&
        window.requestAnimationFrame(() => {
          listRef.current && listRef.current.scrollToRow(Messages.length)
        })
    }

    const onRecieve = (payload) => {
      const newMessagesArray = [...Messages, ...payload]
      setMessages(() => [...newMessagesArray])
      scrollToBottom()
    }

    const onRenewMessages = (messages) => {
      setMessages(() => [...messages])
      window &&
        window.requestAnimationFrame(() => {
          setcache(() => new CellMeasurerCache(cacheConfig))
          listRef.current && listRef.current.scrollToRow(Messages.length)
        })
    }

    useEffect(() => {
      scrollToBottom()
      return () => {}
    }, [Messages.length])

    const onAction = (payload) => {
      switch (payload.action) {
        case MessagingActions.NEW_MESSAGES:
          onRecieve(payload.data)
          break
        case MessagingActions.RENEW_MESSAGES:
          onRenewMessages(payload.data)
          break

        default:
          break
      }
      onMessageRecieved(payload.data)
    }

    useComponentCommunication({
      dependencies: [Messages.length],
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
              rowCount={Messages.length}
              rowHeight={cache.rowHeight}
              rowRenderer={(e) => renderMessage(e, Messages, cache, config)}
              scrollToIndex={Messages.length - 1}
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
