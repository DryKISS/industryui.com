/**
 * Components - Atoms - Address
 */

// React
import React from 'react'
import { string } from 'prop-types'

// UI
import Text from '../text/text'

const Address = ({ county, country, line1, line2, line3, postcode, town }) => (
  <address>
    <Text>{line1}</Text>
    {line2 && <Text>{line2}</Text>}
    {line3 && <Text>{line3}</Text>}
    <Text>{town}</Text>
    {county && <Text>{county}</Text>}
    <Text>{postcode}</Text>
    <Text>{country}</Text>
  </address>
)

Address.propTypes = {
  county: string,
  country: string,
  line1: string.isRequired,
  line2: string,
  line3: string,
  postcode: string.isRequired,
  town: string
}

export default Address
