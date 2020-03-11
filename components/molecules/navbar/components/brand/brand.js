/**
 * Navbar - Brand
 * Adds the client logo if required to the left of the Navbar
 */

// React
import { string } from 'prop-types'

// UI
import { Image, Link } from '../../../../'

// Style
import styled from 'styled-components'

export const Brand = ({ brand }) => {
  return (
    <Link border={false} to='/' passHref>
      <StyledImage alt='Logo' draggable='false' src={brand} />
    </Link>
  )
}

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 3rem;
`

Brand.propTypes = {
  brand: string
}
