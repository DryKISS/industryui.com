/**
 * Tile - Body
 */

// React
import React from 'react'
import { bool, node, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Heading from '../../../atoms/heading/heading'
import LdsSpinner from '../../pageLoading/ldsSpinner'

const TileBody = ({ children, className, description, loading, size, title }) => {
  console.log(loading)
  return (
    <StyledBody className={className} loading={loading}>
      {loading ? (
        <LdsSpinner />
      ) : (
        <>
          {title && (
            <StyledWrapper>
              <StyledTitle content={title} size={size} tag="h2" />
            </StyledWrapper>
          )}

          <StyledContent size={size}>{children}</StyledContent>
          {description && <StyledDescription size={size}>{description}</StyledDescription>}
        </>
      )}
    </StyledBody>
  )
}

const StyledWrapper = styled.div`
  display: flex;
`

const StyledBody = styled.div`
  align-items: ${({ loading }) => loading && 'center'};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`

const StyledTitle = styled(Heading)`
  color: #fff;
  font-size: ${({ size, theme }) => theme.TILE.FONT_SIZE_TITLE[size]};
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
  loading: bool,
  size: string,
  title: string
}

export default TileBody
