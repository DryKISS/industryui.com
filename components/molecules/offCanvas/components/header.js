import styled from 'styled-components'
import { oneOf } from 'prop-types'
import { CONTEXT } from '../../../'

export const OffCanvasHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme: { COLOUR } }) => COLOUR.white};
  padding: 1rem 1rem 1rem 1.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  background-color: ${({ context, theme: { COLOUR } }) => COLOUR[context]};
`

OffCanvasHeader.propTypes = {
  context: oneOf(Object.values(CONTEXT))
}
