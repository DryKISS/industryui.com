/**
 * Messaging
 * Sets up a container for a user to view incoming and outgoing communications.
 */

// React
import { array, object, string, func } from "prop-types"

// UI
import { MessageList, MessagingSearch, MessagingSend } from "../../"

// Style
import styled from "styled-components"

export const MessagingContainer = ({
  audienceItems,
  background,
  className,
  messages,
  onSearch,
  onSubmit,
  style
}) => {
  return (
    <>
      <MessagingSearch onSearch={onSearch} />

      <StyledContainer className={className} style={style}>
        <MessageList messages={messages} />
      </StyledContainer>

      <MessagingSend audienceItems={audienceItems} onSubmit={onSubmit} maxLength={320} />
    </>
  )
}

const StyledContainer = styled.div`
  background-color: rgba(117, 204, 207, 0.4);
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: calc(100vh - 260px);
  padding: 1rem;
  position: relative;
`

MessagingContainer.propTypes = {
  audienceItems: array,
  background: string,
  className: string,
  messages: array.isRequired,
  onSearch: func,
  onSubmit: func,
  style: object
}
