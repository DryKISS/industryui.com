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
  opacity: 0.06;
`

MessageBackground.propTypes = {
  path: string
}

MessageBackground.defaultProps = {
  path: 'https://web.whatsapp.com/img/8a055527b27b887521a9f084497d8879.png'
}
