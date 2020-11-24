/**
 * Messaging/List
 */

// React
import { useEffect, useRef } from 'react'
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
  const ref = useRef(null)
  const cache = new CellMeasurerCache({ fixedWidth: true, defaultHeight: 50 })
  // const [cache, setcache] = useState()

  useEffect(() => {
    window &&
      window.requestAnimationFrame(() => {
        ref.current && ref.current.scrollToRow(messages.length)
      })
    return () => {}
  }, [messages.length])
  return (
    <AutoSizer>
      {({ height, width }) => {
        return (
          <List
            deferredMeasurementCache={cache}
            height={height}
            ref={ref}
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
