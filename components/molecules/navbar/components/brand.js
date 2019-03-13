/**
 * Navbar brand
 */

// React
import { string } from 'prop-types'

// UI
import { Link } from '../../../'

// Style
import styled from 'styled-components'

export const Brand = ({ brand }) => {
  return (
    <Link to='/' passHref>

      <StyledBrand id='navLogo'>

        <StyledBrandLogo
          alt='Logo'
          draggable='false'
          src={brand}
        />

      </StyledBrand>

    </Link>
  )
}

const StyledBrand = styled.a`
  display: inline-block;
  padding: 20px 15px;
`

const StyledBrandLogo = styled.img`
  max-width: 9rem;
  vertical-align: middle;

  @media (min-width: 768px) {
    max-width: 14.5rem;
  }
`

Brand.propTypes = {
  brand: string
}
