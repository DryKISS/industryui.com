/**
 * Tile - Body
 */

// React
import React from 'react'
import { node, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Heading from '../../../atoms/heading/heading'

const TileBody = ({ children, className, title, size }) => {
  return (
    <StyledBody className={className}>
      {title && (
        <StyledWrapper>
          <StyledTitle size={size} content={title} tag="h2" />
        </StyledWrapper>
      )}

      {<StyledContent size={size}>{children}</StyledContent>}
    </StyledBody>
  )
}

const StyledWrapper = styled.div`
  display: flex;
`
// padding: ${({ size, theme }) => theme.BADGE.PADDING[size]};
const StyledBody = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

const StyledTitle = styled(Heading)`
  color: #fff;
  font-size: ${({ size, theme }) => theme.TILE.FONT_SIZE_TITLE[size]};
  font-weight: 600;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  align-self: center;
  font-weight: 700;
  font-size: ${({ size, theme }) => {
    return theme.TILE.FONT_SIZE_BODY[size]
  }};
`

TileBody.propTypes = {
  children: node,
  className: string,
  title: string
}

TileBody.defaultProps = {
  context: 'primary'
}

export default TileBody
