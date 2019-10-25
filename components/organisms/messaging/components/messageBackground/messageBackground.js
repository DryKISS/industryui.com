/**
 * Messaging - Components - Background
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const MessageBackground = styled.div`
  background-image: url('${props => props.background}');
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: .5;
`

MessageBackground.propTypes = {
  background: string
}

MessageBackground.defaultProps = {
  background: '/static/messaging/background.png'
}
