/**
 * Address
 *
 * @see https://www.w3schools.com/tags/tag_address.asp
 * @see https://iandevlin.com/blog/2012/01/html/marking-up-a-postal-address-with-html/
 */

// React
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Address = ({ county, country, line1, line2, line3, postcode, town }) =>
  <StyledAddress>

    <div>{line1}</div>

    {line2 &&
      <div>{line2}</div>
    }

    {line3 &&
      <div>{line3}</div>
    }

    <div>{town}</div>

    {county &&
      <div>{county}</div>
    }

    <div>{postcode}</div>

    <div>{country}</div>

  </StyledAddress>

Address.propTypes = {
  line1: string.isRequired,
  line2: string,
  line3: string,
  town: string,
  county: string,
  postcode: string.isRequired,
  country: string.isRequired
}

const StyledAddress = styled.address`
  margin-bottom: 1rem;
`
