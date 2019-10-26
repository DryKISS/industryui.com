/**
 * Messaging
 * Sets up a container for a user to view incoming and outgoing communications.
 */

// React
import { array, object, string } from 'prop-types'

// UI
import { MessageBackground, MessageList, MessageSend } from './'

// Style
import styled from 'styled-components'

export const MessageContainer = ({
  background,
  className,
  messages,
  style
}) => {
  return (
    <StyledContainer className={className} style={style}>
      <MessageBackground background={background} />
      <MessageList messages={messages} />
      <MessageSend />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  background-color: #e5ddd5;
  border-top: 4px solid ${props => props.theme.COLOUR.primary};
  margin-top: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 1rem;
  position: relative;
`

MessageContainer.propTypes = {
  background: string,
  className: string,
  messages: array.isRequired,
  style: object
}
