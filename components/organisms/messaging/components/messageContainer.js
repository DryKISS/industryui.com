/**
 * Messaging
 * Sets up a container for a user to view incoming and outgoing communications.
 */

// React
import { array, object, string } from 'prop-types'

// UI
import { Background, MessageList } from './'

// Style
import styled from 'styled-components'

export const MessageContainer = ({ className, messages, style }) => {
  return (
    <StyledContainer className={className} style={style}>
      <Background />
      <MessageList messages={messages} />
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
  className: string,
  messages: array.isRequired,
  style: object
}
