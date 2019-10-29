/**
 * Address
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Address = ({ county, country, line1, line2, line3, postcode, town }) => (
  <StyledAddress>
    <div>{line1}</div>

    {line2 && <div>{line2}</div>}

    {line3 && <div>{line3}</div>}

    <div>{town}</div>

    {county && <div>{county}</div>}

    <div>{postcode}</div>

    <div>{country}</div>
  </StyledAddress>
)

const StyledAddress = styled.address`
  margin-bottom: 1rem;
`

Address.propTypes = {
  county: string,
  country: string.isRequired,
  line1: string.isRequired,
  line2: string,
  line3: string,
  postcode: string.isRequired,
  town: string
}
