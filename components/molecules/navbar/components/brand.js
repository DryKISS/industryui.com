/**
 * Navbar — Brand
 * Adds the client logo if required to the left of the Navbar
 */

// React
import React from 'react'
import { string } from 'prop-types'

// UI
import { Image, Link } from '../../../'

// Style
import styled from 'styled-components'

export const Brand = ({ brand }) => {
  return (
    <StyledLink border={false} to="/" passHref>
      <Image alt="Logo" draggable="false" src={brand} data-cy="navBrand" />
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  display: flex;
`

Brand.propTypes = {
  brand: string.isRequired,
}
