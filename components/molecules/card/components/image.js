/**
 * Card image
 */

// React
import React from 'react'
import { string } from 'prop-types'

// UI
import { Image } from '../../../'

// Style
import styled from 'styled-components'

export const CardImage = ({ alt, header, src }) => {
  return (
    <StyledContainer>
      <StyledImage alt={alt} fluid={false} imageClasses="rounded" src={src}>
        {header}
      </StyledImage>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const StyledImage = styled(Image)`
  display: block;
  object-fit: cover;
  width: 100%;

  .rounded {
    border-radius: 0.25rem 0.25rem 0 0;
    border-style: none;
  }
`

CardImage.propTypes = {
  alt: string.isRequired,
  src: string.isRequired
}
