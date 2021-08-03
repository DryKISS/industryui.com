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

const TileBody = ({ children, className, description, size, title }) => {
  return (
    <StyledBody className={className}>
      {title && (
        <StyledWrapper>
          <StyledTitle content={title} size={size} tag="h2" />
        </StyledWrapper>
      )}

      <StyledContent size={size}>{children}</StyledContent>
      {description && <StyledDescription size={size}>{description}</StyledDescription>}
    </StyledBody>
  )
}

const StyledWrapper = styled.div`
  display: flex;
`
const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const StyledTitle = styled(Heading)`
  color: #fff;
  font-size: ${({ size, theme }) => theme.TILE.FONT_SIZE_TITLE[size]};
  font-weight: 600;
`

const StyledContent = styled.div`
  align-items: center;
  align-self: center;
  display: flex;
  flex-grow: 1;
  font-weight: 700;
  font-size: ${({ size, theme }) => {
    return theme.TILE.FONT_SIZE_BODY[size]
  }};
`
const StyledDescription = styled.div`
  display: flex;
  font-size: ${({ size, theme }) => {
    return theme.TILE.FONT_SIZE_DESCRIPTION[size]
  }};
`

TileBody.propTypes = {
  children: node,
  className: string,
  description: string,
  size: string,
  title: string
}

export default TileBody
