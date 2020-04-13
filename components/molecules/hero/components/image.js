/**
 * Hero - Image
 * Displays an image to the right hand side of the main CTA copy
 */

// React
import { number, string } from 'prop-types'

// UI
import { Column, Image } from '../../../'

// Style
import styled from 'styled-components'

export const HeroImage = ({ alt, align, image, md, width }) => (
  <StyledColumn align={align} md={6}>
    <StyledImageContainer>
      <StyledImage alt={alt} md={md} src={image} width={width} />
    </StyledImageContainer>
  </StyledColumn>
)

HeroImage.propTypes = {
  alt: string,
  image: string,
  md: number,
  width: number
}

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
