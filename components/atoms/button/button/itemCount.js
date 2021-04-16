/**
 * Components - Atoms - Button - Item Count
 */

// React
import { number, oneOf, oneOfType, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import { THEME_CONTEXT } from '../../../theme/constants/context'

const ButtonItemCount = styled.span`
  background: ${({ context, theme: { COLOUR } }) => COLOUR[context]};
  border: 1px solid white;
  border-radius: 50%;
  color: #fff;
  display: block;
  font-size: 0.75rem;
  height: 1.5rem;
  line-height: 1.5rem;
  position: absolute;
  right: -0.75rem;
  text-align: center;
  top: -0.75rem;
  width: 1.5rem;
  z-index: 1;
`

ButtonItemCount.propTypes = {
  background: oneOf(Object.values(THEME_CONTEXT)),
  children: oneOfType([number, string]).isRequired
}

export default ButtonItemCount
