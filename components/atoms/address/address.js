/**
 * Address
 */

// React
import React from 'react'
import { string } from 'prop-types'
import { Text } from 'components'
// Style
import styled from 'styled-components'

const AddressText = props => {
  return <Text context='dark'>{props.children}</Text>
}

export const Address = ({ county, country, line1, line2, line3, postcode, town }) => (
  <StyledAddress>
    <AddressText>{line1}</AddressText>

    {line2 && <AddressText>{line2}</AddressText>}

    {line3 && <AddressText>{line3}</AddressText>}

    <AddressText>{town}</AddressText>

    {county && <AddressText>{county}</AddressText>}

    <AddressText>{postcode}</AddressText>

    <AddressText>{country}</AddressText>
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
