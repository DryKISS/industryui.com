/**
 * Molecules - OffCanvas - Header
 */

// React
import { oneOf } from 'prop-types'

// UI
import { CONTEXT } from '../../../'

// Style
import styled from 'styled-components'

export const OffCanvasHeader = styled.div`
  align-items: center;
  background-color: #00bda5;
  background-image: linear-gradient(-303deg, #00a4bd, #00afb2 56%, #00bda5);
  color: ${({ theme: { COLOUR } }) => COLOUR.white};
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.5px;
  padding: 1rem;
`

OffCanvasHeader.propTypes = {
  context: oneOf(Object.values(CONTEXT))
}
