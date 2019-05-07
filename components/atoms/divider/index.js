/**
 * Divider
 */

// React
import { oneOf } from 'prop-types'

// UI
import { SIZE } from '../../theme'

// Style
import styled from 'styled-components'

export const Divider = ({ size }) =>
  <StyledDivider size={size} />

const StyledDivider = styled.div`
  border-top: 2px solid ${({ theme }) => theme.COLOUR.light};
  height: 0;
  margin: ${props =>
    (props.size === 'lg' && '2rem 0') ||
    (props.size === 'md' && '1rem 0') ||
    '.5rem 0'
};
  overflow: hidden;
  user-select: none;
`

Divider.propTypes = {
  size: oneOf(Object.values(SIZE))
}
