/**
 * Messaging/Container
 */

// React
import { array, object, string, func, number } from 'prop-types'

// UI
import { MessageList, MessagingSearch, MessagingSend } from '../../../'

// Style
import styled from 'styled-components'

export const MessagingContainer = ({
  audienceItems,
  className,
  maxLength,
  messages,
  onFilter,
  onSearch,
  onSubmit,
  style
}) => {
  return (
    <>
      <MessagingSearch onFilter={onFilter} onSearch={onSearch} />

      <StyledContainer className={className} style={style}>
        <MessageList messages={messages} />
      </StyledContainer>

      <MessagingSend audienceItems={audienceItems} onSubmit={onSubmit} maxLength={maxLength} />
    </>
  )
}

const StyledContainer = styled.div`
  background-color: rgba(117, 204, 207, 0.4);
  max-height: calc(100vh - 260px);
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1rem;
  position: relative;
`

MessagingContainer.propTypes = {
  audienceItems: array,
  className: string,
  maxLength: number,
  messages: array.isRequired,
  onFilter: func.isRequired,
  onSearch: func.isRequired,
  onSubmit: func.isRequired,
  style: object
}
