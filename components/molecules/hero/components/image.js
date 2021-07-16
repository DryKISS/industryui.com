/**
 * Hero - Image
 * Displays an image to the right hand side of the main CTA copy
 */

// React
import React from 'react'
import { number, string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Column from '../../../atoms/grid/Column'
import Image from '../../../atoms/image/image'

const HeroImage = ({ alt, align, image, width }) => (
  <StyledColumn align={align} md={6}>
    <StyledImageContainer>
      <StyledImage alt={alt} src={image} width={width} />
    </StyledImageContainer>
  </StyledColumn>
)

const StyledColumn = styled(Column)`
  align-self: ${({ align }) => align || 'flex-end'};
`

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: start;
  margin: 10px 0;
`

const StyledImage = styled(Image)`
  width: ${({ width }) => (width ? `${width}%` : '85%')};
  height: ${({ height }) => (height ? `${height}%` : '85%')};
`

HeroImage.propTypes = {
  alt: string,
  image: string,
  width: number
}

export default HeroImage
