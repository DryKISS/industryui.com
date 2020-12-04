/**
 * Messaging/List
 */

// React
import { memo, useRef, useState } from 'react'
import { array } from 'prop-types'

// UI
import { Message, useComponentCommunication } from 'components'
import { MessageNames, MessagingSubscriber, MessagingActions } from 'components/services'
import styled, { css } from 'styled-components'

import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized'

const renderMessage = ({ index, parent, key, style }, messages, cache) => {
  return (
    <CellMeasurer cache={cache} key={index} parent={parent} columnIndex={0} rowIndex={index}>
      <MessageContainer type={messages[index].type} style={style}>
        <Message
          message={messages[index]}
          prevType={messages[index].type}
          type={messages[index].type}
        />
      </MessageContainer>
    </CellMeasurer>
  )
}

export const MessageList = memo(
  ({ initialMessages, onMessageRecieved }) => {
    const listRef = useRef(null)
    // const cacheRef = useRef(null)
    const widthRef = useRef(null)
    const heightRef = useRef(null)
    const [cache, setcache] = useState(
      new CellMeasurerCache({ fixedWidth: true, defaultHeight: 50 })
    )
    const onRecieve = payload => {
      const newMessagesArray = [...Messages, ...payload]
      setMessages(() => [...newMessagesArray])
      window &&
        window.requestAnimationFrame(() => {
          listRef.current && listRef.current.scrollToRow(Messages.length)
        })
    }

    const onRenewMessages = messages => {
      setMessages(() => [...messages])
      window &&
        window.requestAnimationFrame(() => {
          setcache(() => new CellMeasurerCache({ fixedWidth: true, defaultHeight: 50 }))
          listRef.current && listRef.current.scrollToRow(Messages.length)
        })
    }

    const [Messages, setMessages] = useState(initialMessages)

    const onAction = payload => {
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
                setcache(new CellMeasurerCache({ fixedWidth: true, defaultHeight: 50 }))
              })
          }
          return (
            <List
              style={{ padding: '0.5rem 0' }}
              deferredMeasurementCache={cache}
              height={height}
              ref={listRef}
              rowCount={Messages.length}
              rowHeight={cache.rowHeight}
              rowRenderer={e => renderMessage(e, Messages, cache)}
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
  /* transition: all 0.2s; */
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
