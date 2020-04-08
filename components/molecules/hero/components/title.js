/**
 * Hero - Text Block Title
 * Displays the title of the text block.
 */

// React
import { string } from 'prop-types'

// UI
import { Row } from '../../../'

// Style
import styled from 'styled-components'

export const Title = ({ alt, align, children }) => (
  <StyledRow alt={alt} align={align} children={children} />
)

const StyledRow = styled(Row)`
  align-self: ${({ align }) => align || 'flex-start'};
  color: black;
  font-size: 1.5rem;
  font-weight: bolder;
  padding: 10px 20px;
`

Title.propTypes = {
  alt: string,
  children: string
}
