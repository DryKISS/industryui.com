/**
 * Messaging/List
 */

// React
import { useState } from 'react'

import { array } from 'prop-types'

// UI
import { Message, useComponentComunication } from 'components'
import styled from 'styled-components'

import { MessageNames, MessagingSubscriber } from 'components/services'
import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized'

const cache = new CellMeasurerCache({ fixedWidth: true, defaultHeight: 50 })

const renderMessage = ({ index, parent, key, style }, messages) => {
  return (
    <CellMeasurer cache={cache} key={index} parent={parent} columnIndex={0} rowIndex={index}>
      <MessageContainer style={style}>
        <Message
          message={messages[index]}
          prevType={messages[index].type}
          type={messages[index].type}
        />
      </MessageContainer>
    </CellMeasurer>
  )
}

export const MessageList = ({ messages }) => {
  const [Messages, setMessages] = useState(messages)
  console.log(Messages)
  const onRecieve = payload => {
    setMessages(Messages)
    console.log(payload)
  }
  useComponentComunication({
    messageName: MessageNames.Messaging.NEW_MESSAGES,
    onRecieve,
    subscriber: MessagingSubscriber
  })

  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <List
            deferredMeasurementCache={cache}
            height={height}
            rowCount={messages.length}
            rowHeight={cache.rowHeight}
            rowRenderer={e => renderMessage(e, messages)}
            scrollToIndex={messages.length - 1}
            width={width}
          />
        )
      }}
    </AutoSizer>
  )
}
const MessageContainer = styled.div`
  padding: 0 1rem;
`
MessageList.propTypes = {
  messages: array.isRequired
}
