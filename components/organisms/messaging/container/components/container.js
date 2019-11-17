/**
 * Messaging
 * Sets up a container for a user to view incoming and outgoing communications.
 */

// React
import { array, object, string } from 'prop-types'

// UI
import { MessageList, MessagingSearch, MessagingSend } from '../../'

// Style
import styled from 'styled-components'

export const MessagingContainer = ({ background, className, messages, style }) => {
  return (
    <>
      <MessagingSearch />

      <StyledContainer className={className} style={style}>
        <MessageList messages={messages} />
      </StyledContainer>

      <MessagingSend
        handleChange={() => {}}
        handleSelect={() => {}}
        handleSubmit={() => {}}
        maxLength={320}
        message=''
      />
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
  background: string,
  className: string,
  messages: array.isRequired,
  style: object
}
