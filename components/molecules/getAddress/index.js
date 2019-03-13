/**
 * Get Address
 */

// React
import { forwardRef, useImperativeHandle, useState } from 'react'
import { func, string } from 'prop-types'

// UI
import { Button, Input, Select } from '../../'

// Debug Data
// import { ADDRESS_DATA } from './__mock__/addresses'

export const GetAddress = forwardRef(({
  apiKey,
  error,
  change,
  form,
  handleFindAddress,
  handlePopulateAddress,
  selectAddress
}, ref) => {
  const [loading, setLoading] = useState(false)
  const [addresses, setAddresses] = useState({ data: [] })

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
      // let data = addresses.data
      // data = ADDRESS_DATA.addresses
      // setAddresses({ ...addresses, data: [...data] })

      // Fetch
      window
        .fetch(`https://api.getaddress.io/find//${postcode}?api-key=${apiKey}`)
        .then((response) => {
          if (!response.ok) {
            return false
          }
          return response.json()
        })
        .then((data) => {
          setAddresses({ ...addresses, data: data.addresses })
        })
        .catch((error) => {
          console.log('Error', error)
        })
    }
  }))

  const input = () => (
    <Input
      change={change}
      id='postcode'
      label={`What is your postcode?`}
      value={form.postcode}
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

  const postcodeAddresses = () => {
    if (loading) {
      if (addresses.data.length > 0) {
        // Reduce the array to conform to the select
        const reduced = addresses.data.reduce((acc, cur, i) => {
          acc.push({ text: cur, value: i + 1 })
          return acc
        }, [])

        reduced.unshift({ disabled: true, text: 'Select address', value: '' })

        return (
          <>
            <p />
            <Select
              change={handlePopulateAddress}
              id='addresses'
              label='Select your address'
              options={reduced}
              value={selectAddress}
            />
          </>
        )
      }
    }
  }

  const addressDetails = () => {
    if (form.line1) {
      const changedInputs = [
        { label: 'Address line 1', id: 'line1' },
        { label: 'Address line 2', id: 'line2', required: false },
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
              value={form[id]}
            />
          </span>
        )
      })
    } else {
      return <span />
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
