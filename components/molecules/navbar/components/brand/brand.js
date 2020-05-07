/**
 * Navbar — Brand
 * Adds the client logo if required to the left of the Navbar
 */

// React
import { bool, string } from 'prop-types'

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
    <StyledLink border={false} to='/' passHref>
      <Image alt='Logo' draggable='false' src={brand} data-cy='navBrand' />
    </StyledLink>
  )

  if (animational) {
    return <ImageInDiv />
  } else {
    return <SingleImage />
  }
}

const StyledLink = styled(Link)`
  display: flex;
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
  animational: bool,
  brand: string.isRequired
}

Brand.defaultProps = {
  animational: false
}
