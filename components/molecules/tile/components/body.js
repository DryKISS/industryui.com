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
import Loading from './loading'

const TileBody = ({ children, className, size, title, loading }) => {
  return (
    <StyledBody className={className} loading={loading}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {title && (
            <StyledWrapper>
              <StyledTitle content={title} size={size} tag="h2" />
            </StyledWrapper>
          )}

          {<StyledContent size={size}>{children}</StyledContent>}
        </>
      )}
    </StyledBody>
  )
}

const StyledWrapper = styled.div`
  display: flex;
`
const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: ${({ loading }) => loading && 'center'};
  flex-direction: column;
  flex-grow: 1;
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

TileBody.propTypes = {
  children: node,
  className: string,
  size: string,
  title: string
}

export default TileBody
