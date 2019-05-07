/**
 * Card image
 */

// React
import { bool, string } from 'prop-types'

// UI
import { Image } from '../../../'

// Style
import styled from 'styled-components'

export const CardImage = ({ alt, header, src }) => {
  return (
    <StyledImage
      alt={alt}
      imageClasses='rounded'
      src={src}
    >
      {header}
    </StyledImage>
  )
}

const StyledImage = styled(Image)`
  .rounded {
    border-radius: .25rem .25rem 0 0;
    border-style: none;
  }
`

CardImage.propTypes = {
  alt: string.isRequired,
  src: string.isRequired
}
