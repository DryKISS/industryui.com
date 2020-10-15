/**
 * Get Address
 */

// React
import { forwardRef, useImperativeHandle, useState } from 'react'
import { func, string } from 'prop-types'

// UI
import { Button, FormField, FormLabel, SelectField, validatorPostCode } from '../../'

export const GetAddress = forwardRef(
  (
    { apiKey, error, change, form, handleFindAddress, handlePopulateAddress, selectAddress },
    ref
  ) => {
    console.log(form)
    const [loading, setLoading] = useState(false)
    const [addresses, setAddresses] = useState({ data: [] })

    useImperativeHandle(ref, () => ({
      removeWhitespace: postcode => {
        return postcode.replace(/\s/g, '')
      },

      validatePostcode: postcode => {
        validatorPostCode(postcode)
      },

      getAddress: postcode => {
        setLoading(true)
        // let data = addresses.data
        // data = ADDRESS_DATA.addresses
        // setAddresses({ ...addresses, data: [...data] })

        // Fetch
        window
          .fetch(`https://api.getaddress.io/find//${postcode}?api-key=${apiKey}`)
          .then(response => {
            if (!response.ok) {
              return false
            }
            return response.json()
          })
          .then(data => {
            setAddresses({ ...addresses, data: data.addresses })
          })
          .catch(error => {
            console.error('Error', error)
          })
      }
    }))

    const input = () => (
      <FormLabel label='Postcode'>
        <FormField onChange={change} name='postcode' value={form.postcode} />
      </FormLabel>
    )

    const button = () => (
      <Button content='Find your address' context='primary' onClick={handleFindAddress} size='lg' />
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
              <FormLabel label='Select your address'>
                <SelectField
                  onChange={handlePopulateAddress}
                  name='addresses'
                  options={reduced}
                  value={selectAddress}
                />
              </FormLabel>
            </>
          )
        }
      }
    }

    const addressDetails = () => {
      if (form.line1) {
        const changedInputs = [
          { label: 'Address line 1', id: 'line1' },
          { label: 'Address line 2', id: 'line2' },
          { label: 'Address line 3', id: 'line3' },
          { label: 'City / Town', id: 'town' },
          { label: 'County', id: 'county' },
          { label: 'Postcode', id: 'postcode' },
          { label: 'Country', id: 'country' }
        ]

        return changedInputs.map(({ label, id }) => {
          return (
            <span key={id}>
              <FormLabel label={label}>
                <FormField name={id} onChange={change} value={form[id]} />
              </FormLabel>
            </span>
          )
        })
      } else {
        return <span />
      }
    }

    const renderError = () => {
      if (!error) return
      return <p className='GetAddress-error'>The postcode was not found</p>
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
  }
)

GetAddress.propTypes = {
  apiKey: string.isRequired,
  change: func.isRequired
}
