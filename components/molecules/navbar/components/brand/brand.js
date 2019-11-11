/**
 * Navbar - Brand
 * Adds the client logo if required to the left of the Navbar
 */

// React
import { string } from 'prop-types'

// UI
import { Link, MEDIA_QUERY } from '../../../../'

// Style
import styled from 'styled-components'

export const Brand = ({ brand }) => {
  return (
    <Link to='/' passHref>
      <StyledBrand id='navLogo'>
        <img alt='Logo' draggable='false' src={brand} />
      </StyledBrand>
    </Link>
  )
}

const StyledBrand = styled.a`
  display: flex;
  padding: 0 0.75rem;
`

Brand.propTypes = {
  brand: string
}
