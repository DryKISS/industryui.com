/**
 * Navbar brand
 */

// React
import { string } from 'prop-types'

// UI
import { Link, MEDIA_QUERY } from '../../../'

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

  ${MEDIA_QUERY.desktop`
    max-width: 15rem;
  `}
`

Brand.propTypes = {
  brand: string
}
