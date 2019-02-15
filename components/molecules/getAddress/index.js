/**
 * Get Address
 */

// React
import { forwardRef, useImperativeHandle, useState } from 'react'
import { func, string } from 'prop-types'

// UI
import { Button, Input, Select } from '../../'

// Debug Data
import { ADDRESS_DATA } from './__mock__/addresses'

export const GetAddress = forwardRef(({ address, apiKey, error, change, handleFindAddress, handlePopulateAddress }, ref) => {
  const [loading, setLoading] = useState(false)
  const [addresses, setAddresses] = useState({ data: [] })

  const url = 'https://api.getaddress.io/find/'

  useImperativeHandle(ref, () => ({
    removeWhitespace: (postcode) => {
      return postcode.replace(/\s/g, '')
    },

    validatePostcode: (postcode) => {
      const regex = /^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$/
      const found = regex.test(postcode)
      return found
    },

    getAddress: (postcode) => {
      setLoading(true)

      const API_URL = `${url}/${postcode}?api-key=${apiKey}`

      // const addresses = ADDRESS_DATA.addresses
      let data = addresses.data
      data = ADDRESS_DATA.addresses

      setAddresses({ ...addresses, data: [...data] })

      // Fetch
      // window.fetch(API_URL)

      //   .then((response) => {
      //     if (!response.ok) {
      //       console.log('error', response)
      //       setError({ error: false })
      //     }

      //     return response.json()
      //   })

      //   .then((data) => {
      //     console.log('Success', data)
      //     setAddresses({ postcodeAddresses: [...data.addresses] })
      //   })
    }
  }))

  const input = () => (
    <Input
      change={change}
      id='postcode'
      label={`What is your postcode?`}
      value={address.postcode}
    />
  )

  const button = () => (
    <Button
      content='Find your address'
      context='primary'
      onClick={handleFindAddress}
      size='lg'
    />
  )

  const addressDetails = () => {
    if (address.line1) {
      const changedInputs = [
        { label: 'Address line 1', id: 'line1' },
        { label: 'Address line 2', id: 'line2' },
        { label: 'Address line 3', id: 'line3', required: false },
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
              change={change}
              required={required}
              value={address[id]}
            />
          </span>
        )
      })
    } else {
      return <span />
    }
  }

  const postcodeAddresses = () => {
    if (loading) {
      if (addresses.data.length > 0) {
        // Reduce the array to conform to the select
        const reduced = addresses.data.reduce((acc, cur, i) => {
          acc.push({ text: cur, value: i + 1 })
          return acc
        }, [])

        return (
          <>
            <p />
            <Select
              change={handlePopulateAddress}
              id='addresses'
              label='Select your address'
              data={reduced}
            />
          </>
        )
      } else {
        return <div>No addresses Found</div>
      }
    }
  }

  const renderError = () => {
    if (!error) return
    return (
      <p className='GetAddress-error'>The postcode was not found</p>
    )
  }

  return (
    <>
      {input()}
      {button()}
      {renderError()}
      {postcodeAddresses()}
      {addressDetails()}
    </>
  )
})

GetAddress.propTypes = {
  apiKey: string.isRequired,
  change: func.isRequired
}
