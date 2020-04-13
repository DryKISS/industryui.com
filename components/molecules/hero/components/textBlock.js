/**
 * Hero - Text Block
 * Displays a text block with title, content, icon.
 */

// React
import { number, string, objectOf, oneOfType } from 'prop-types'

// UI
import { Column, CardBody } from '../../../'
import { Card } from '../../../molecules/card'

// Style
import styled from 'styled-components'

export const TextBlock = ({ alt, align, children, content, md, offset, top }) => (
  <Column align={align} md={md} offset={offset}>
    <StyledCard top={top}>
      <CardBody children={children} />
    </StyledCard>
  </Column>
)

const StyledCard = styled(Card)`
  background-color: white;
  border-radius: 0%;
  opacity: 0.95;
  offset: ${({ offset }) => offset};
  position: absolute;
  top: ${({ top }) => top};
  width: 100%;
`

TextBlock.propTypes = {
  alt: string,
  content: string,
  md: number,
  offset: objectOf(oneOfType([number, string])),
  strapline: string,
  title: string,
  top: string
}
