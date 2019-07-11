/**
 * Alert
 */

// React
import { objectOf, number, oneOf, oneOfType, string } from 'prop-types'

// UI
import { BACKGROUND, CONTEXT, SHADE_COLOUR } from '../../'

// Style
import styled from 'styled-components'

export const Alert = ({ content, context }) =>
  <StyledAlert context={context}>
    {content}
  </StyledAlert>

Alert.propTypes = {
  content: string.isRequired,
  context: oneOf(Object.values(CONTEXT)),
  style: objectOf(oneOfType([number, string]))
}

Alert.defaultProps = {
  context: 'primary'
}

const StyledAlert = styled.div`
  ${props => BACKGROUND(props)}
  border: 1px solid ${({ theme }) => theme.COLOUR.light};
  border-radius: .25rem;
  color: ${({ context, theme }) => SHADE_COLOUR(theme.COLOUR[context], -90)}
  margin: 1rem 0;
  padding: .75rem 1.25rem;
  position: relative;
`
