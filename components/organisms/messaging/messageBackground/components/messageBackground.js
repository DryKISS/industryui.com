/**
 * Messaging - Components - Background
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const MessageBackground = ({ path }) => {
  return <StyledBackground path={path} />
}

const StyledBackground = styled.div`
  background-image: url(${props => props.path});
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  /* opacity: 0.6; */
`

MessageBackground.propTypes = {
  path: string
}

MessageBackground.defaultProps = {
  path: '/messaging/background.png'
}
