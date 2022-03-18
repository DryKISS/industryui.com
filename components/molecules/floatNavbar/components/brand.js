/**
 * Navbar — Brand
 * Adds the client logo if required to the left of the Navbar
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

// UI
import Image from '../../../atoms/image/image'
import Link from '../../../atoms/link/link'

const Brand = ({ brand }) => {
  return (
    <StyledLink border={false} to="/" passHref>
      <Image alt="Logo" draggable="false" src={brand} data-cy="navBrand" />
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  display: flex;
  height: 100%;
  padding: 0.5rem;
`

Brand.propTypes = {
  brand: string.isRequired
}

export default Brand
