/**
 * Card image
 * @see https://medium.com/@webcore1/react-fallback-for-broken-images-strategy-a8dfa9c1be1e
 */

// React
import { string } from 'prop-types'

// UI
import { Image } from '../../../'

// Style
import styled from 'styled-components'

export const CardImage = ({ alt, header, src }) => {
  return (
    <StyledImage alt={alt} imageClasses='rounded' src={src}>
      {header}
    </StyledImage>
  )
}

const StyledImage = styled(Image)`
  display: block;

  .rounded {
    border-radius: 0.25rem 0.25rem 0 0;
    border-style: none;
  }
`

CardImage.propTypes = {
  alt: string.isRequired,
  src: string.isRequired
}
