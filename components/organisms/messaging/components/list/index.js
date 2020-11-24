/**
 * Messaging/List
 */

// React

import { array } from 'prop-types'

// UI
import { Message } from 'components'
import styled from 'styled-components'

import { AutoSizer, CellMeasurer, CellMeasurerCache, List } from 'react-virtualized'

const renderMessage = ({ index, parent, key, style }, messages, cache) => {
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
  const cache = new CellMeasurerCache({ fixedWidth: true, defaultHeight: 50 })

  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <List
            deferredMeasurementCache={cache}
            height={height}
            rowCount={messages.length}
            rowHeight={cache.rowHeight}
            rowRenderer={e => renderMessage(e, messages, cache)}
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
