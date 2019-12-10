/**
 * MessageTail
 */

// React
import { oneOf } from 'prop-types'

// Style
import styled from 'styled-components'

export const Tail = styled.span`
  background-image: ${({ type }) =>
    type === 'in' ? "url('/messaging/tail-incoming.svg')" : "url('/messaging/tail-outgoing.svg')"};
  background-repeat: no-repeat;
  bottom: 8px;
  height: 16px;
  position: absolute;
  ${({ type }) => (type === 'in' ? 'left: 11px' : 'right: 11px')};
  width: 12px;
`

Tail.propTypes = {
  type: oneOf(['in', 'out']).isRequired
}
