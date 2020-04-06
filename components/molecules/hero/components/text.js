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

export const Text = ({ alt, align, children }) => (
  <StyledRow alt={alt} align={align} children={children} />
)

const StyledRow = styled(Row)`
  align-self: ${({ align }) => align || 'flex-start'};
  padding: 10px 20px;
`

Text.propTypes = {
  alt: string,
  children: string
}
