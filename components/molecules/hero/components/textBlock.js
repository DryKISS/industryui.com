/**
 * Hero - Text Block
 * Displays a text block with title, content, icon.
 */

// React
import React from 'react'
import { number, string, objectOf, oneOfType } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import Card from '../../card/card'
import CardBody from '../../card/components/body'
import MEDIA_QUERY from '../../../utils/mediaQuery/query'

const TextBlock = ({ children, offset, position }) => (
  <StyledCard rounded={false} position={position}>
    <CardBody children={children} />
  </StyledCard>
)

const bl = css`
  left: 6rem;
  bottom: 0;
`

const br = css`
  right: 6rem;
  bottom: 0;
`

const tl = css`
  left: 6rem;
  top: 0;
`

const tr = css`
  right: 6rem;
  top: 0;
`

const StyledCard = styled(Card)`
  background-color: white;
  margin: 0;
  opacity: 0.95;
  offset: ${({ offset }) => offset};
  position: absolute;

  ${MEDIA_QUERY.desktop`
    width: 25rem;
  `}

  ${({ position }) =>
    (position === 'bl' && bl) ||
    (position === 'br' && br) ||
    (position === 'tl' && tl) ||
    (position === 'tr' && tr)}
`

TextBlock.propTypes = {
  offset: objectOf(oneOfType([number, string]))
}

export default TextBlock
