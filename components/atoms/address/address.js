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
  return (
    <Text size={props.size} context='black'>
      {props.children}
    </Text>
  )
}

export const Address = ({ county, country, line1, line2, line3, postcode, size, town }) => (
  <StyledAddress>
    <AddressText size={size}>{line1}</AddressText>

    {line2 && <AddressText size={size}>{line2}</AddressText>}

    {line3 && <AddressText size={size}>{line3}</AddressText>}

    <AddressText size={size}>{town}</AddressText>

    {county && <AddressText size={size}>{county}</AddressText>}

    <AddressText size={size}>{postcode}</AddressText>

    <AddressText size={size}>{country}</AddressText>
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
Address.defaultProps = {
  size: 'md'
}
