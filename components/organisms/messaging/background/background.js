/**
 * Messaging/Background
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

const MessageBackground = styled.div`
  background-image: url(${({ path }) => path});
  height: 100%;
  opacity: 0.6;
  position: absolute;
  top: 0;
  width: 100%;
`

MessageBackground.propTypes = {
  path: string
}

MessageBackground.defaultProps = {
  path: '/messaging/background.png'
}

export default MessageBackground
