/**
 * Navbar — Brand
 * Adds the client logo if required to the left of the Navbar
 */

// React
import { string } from 'prop-types'

// UI
import { Image, Link } from '../../../../'

// Style
import styled, { keyframes } from 'styled-components'

export const Brand = ({ brand, animational }) => {
  const ImageInDiv = () => (
    <Link border={false} to='/' passHref>
      <StyledDiv>
        <Image alt='Logo' draggable='false' src={brand} data-cy='navBrand' />
      </StyledDiv>
    </Link>
  )
  const SingleImage = () => (
    <Link border={false} to='/' passHref>
      <StyledImage alt='Logo' draggable='false' src={brand} data-cy='navBrand' />
    </Link>
  )

  if (animational) {
    return <ImageInDiv />
  } else {
    return <SingleImage />
  }
}
const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
`

const BorderAnimation = keyframes`
  0% {
    width: 102px;
    height: 40px;
  }
  100% {
    width: 120px;
    height: 40px;
  }
`
const StyledDiv = styled.div`
  animation: 0.8s ${BorderAnimation} infinite ease-out;
  animation-direction: alternate;
  border: 10px solid transparent;
  border-image: url(/static/border/border10.svg) 10;
`

Brand.propTypes = {
  brand: string
}
