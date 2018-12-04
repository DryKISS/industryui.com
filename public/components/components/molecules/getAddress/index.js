/**
 * Get Address
 */

// React
import React, { Component, Fragment } from 'react'
import { func, string } from 'prop-types'

// UI
import { Button, Input, Select } from '../../'

// Debug Data
import { ADDRESSES } from './__mock__/addresses'

// Style
import { withTheme } from 'styled-components'

export const GetAddress = withTheme(
  class GetAddress extends Component {
    constructor (props) {
      super(props)

      this.state = {
        addresses: '',
        error: false,
        formData: {
          line1: '',
          line2: '',
          line3: '',
          town: '',
          county: '',
          postcode: '',
          country: 'United Kingdom'
        },
        loading: false,
        postcodeAddresses: []
      }
    }

    static propTypes = {
      apiKey: string.isRequired,
      handleChange: func.isRequired
    }

    // Constants
    url = 'https://api.getaddress.io/find/'

    handlePopulateAddress = (event) => {
      console.log('handlePopulateAddress', event.target.options[event.target.selectedIndex].text)

      const address = event.target.options[event.target.selectedIndex].text
      const splitData = address.split(',')

      this.setState({
        formData: {
          ...this.state.formData,
          line1: splitData[0],
          line2: splitData[1],
          line3: splitData[2],
          town: splitData[5],
          county: splitData[6]
        }
      })

      this.addressDetails()
    }

    // Handle Find Address
    // API call to get the address based on the inputted post-code
    handleFindAddress = (event) => {
      const { formData } = this.state

      // Check that the postcode is not blank

      // Remove whitespace
      const convertedPostcode = this.removeWhitespace(formData.postcode)

      // Check postcode is UK valid
      const valid = this.validPostcode(convertedPostcode)

      if (!valid) {
        this.setState({ error: true })
        return
      }

      // Get Address
      const address = this.getAddress(convertedPostcode)

      // Debug
      console.log('Handle Find Address', address, this.url, valid, formData.postcode, convertedPostcode, event.target.id, event.target.value)
    }

    // Handle change
    handleChange = (event) => {
      const { formData } = this.state
      this.setState({ error: false })

      console.log('Handle Change', event.target.id, event.target.value)

      const target = event.target

      this.setState({
        formData: {
          ...formData,
          [target.name]: target.value
        }
      })
    }

    // Remove whitespace characters
    removeWhitespace = (postcode) => {
      const strip = postcode.replace(/\s/g, '')
      return strip
    }

    // Check UK valid postcode
    validPostcode = (postcode) => {
      // Validate post code - strip whitespace
      const regex = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$/
      const found = regex.test(postcode)
      return found
    }

    // getAddress
    getAddress = (postcode) => {
      this.setState({ loading: true })

      const { apiKey } = this.props
      const API_URL = `https://api.getaddress.io/find/${postcode}?api-key=${apiKey}`

      // Debug
      this.setState({ postcodeAddresses: [...ADDRESSES.addresses] })

      // Fetch
      // window.fetch(API_URL)

      //   .then((response) => {
      //     if (!response.ok) {
      //       console.log('error', response)
      //       this.setState({ error: false })
      //     }

      //     return response.json()
      //   })

      //   .then((data) => {
      //     console.log('Success', data)
      //     this.setState({ postcodeAddresses: [...data.addresses] })
      //   })
    }

    input = () => {
      const { formData } = this.state

      return (
        <Input
          handleChange={this.handleChange}
          id='postcode'
          label={`What is your postcode?`}
          placeholder='Enter postcode'
          value={formData.postcode}
        />
      )
    }

    button = () => {
      return (
        <Button
          info
          outline
          onClick={this.handleFindAddress}
        >
          Find your address
        </Button>
      )
    }

    addressDetails = () => {
      const { formData } = this.state

      if (formData.line1) {
        const changedInputs = [
          { label: 'Address line 1', id: 'line1' },
          { label: 'Address line 2', id: 'line2' },
          { label: 'Address line 3', id: 'line3' },
          { label: 'City / Town', id: 'town' },
          { label: 'County', id: 'county', required: false },
          { label: 'Postcode', id: 'postcode' },
          { label: 'Country', id: 'country' }
        ]

        return changedInputs.map(({ label, id, required }) => {
          return (
            <span key={id}>
              <Input
                label={label}
                id={id}
                handleChange={this.handleChange}
                required={required}
                value={formData[id]}
              />
            </span>
          )
        })
      } else {
        return <span />
      }
    }

    postcodeAddresses = () => {
      const { addresses, loading, postcodeAddresses } = this.state

      if (loading) {
        if (postcodeAddresses.length > 0) {
          // Reduce the array to conform to the select
          // Split out the extra commas
          const reduced = postcodeAddresses.reduce((acc, cur, i) => {
            // const address = cur.split(',')
            // console.log(cur, address.filter(n => n.trim()))

            acc.push({ text: cur, value: i + 1 })

            return acc
          }, [])

          return (
            <Fragment>

              <p />

              <Select
                handleChange={this.handlePopulateAddress}
                id='addresses'
                label='Select your address'
                data={reduced}
                value={addresses}
              />

              {/* <p>Address not listed or incorrect?</p>

              <Link to='/sign-up/breeder/start/location/add'>
                <a>Add Manually</a>
              </Link> */}

            </Fragment>
          )
        } else {
          return <div>Loading...</div>
        }
      }
    }

    error = () => {
      const { error } = this.state

      if (!error) return

      return (
        <p className='GetAddress-error'>
          The postcode was not found
        </p>
      )
    }

    resetState = () => {
      this.setState({
        formData: this.formData,
        postcodeAddresses: [],
        loadingAddresses: false
      })
    }

    render () {
      return (
        <Fragment>

          {/* Button */}
          {this.input()}

          {/* Button */}
          {this.button()}

          {/* Error */}
          {this.error()}

          {/* Address Select */}
          {this.postcodeAddresses()}

          {/* Address details */}
          {this.addressDetails()}

        </Fragment>
      )
    }
  }
)

// export default css`
//   .GetAddress {
//     font: inherit;
//   }

//   .GetAddress-error {
//     color: #e60811;
//   }
//   `
