/**
 * Get Address
 */

// React
import { useRef, useState } from 'react'
import { func, object, oneOf, number, string } from 'prop-types'

// UI
import {
  Dropdown,
  FormField,
  FormLabel,
  GetAddressService,
  SIZE,
  validatorPostCode
} from 'components'

// test postCode: SW19 2EZ

export const GetAddress = ({
  errors,
  label,
  name,
  placeholder,
  register,
  setValue,
  size,
  throttle,
  validator
}) => {
  const [Errors, setErrors] = useState(errors ?? { [name]: null })

  const [Addresses, setAddresses] = useState([])

  const ref = useRef(null)

  const onApiCall = data => {
    const { response, hasError } = data

    if (!hasError) {
      const { addresses } = response

      const fixedAddresses = GetAddressService.fixAddresses(addresses)

      setErrors({ [name]: null })
      setAddresses(fixedAddresses)
      ref.current.click()
    } else {
      setErrors({ [name]: { message: response } })
    }
  }

  const handleInputChange = value => {
    GetAddressService.getAddresses({
      postCode: value,
      callback: onApiCall,
      callThrottle: throttle ?? 500,
      validator: validator ?? validatorPostCode
    })
  }

  const handleAddressSelect = ({ name: address, id }) => {
    setValue(name, address)
  }

  return (
    <FormLabel label={label}>
      <FormField
        errors={errors[name] ? errors : Errors}
        showError
        name={name}
        onChange={e => handleInputChange(e.target.value)}
        placeholder={placeholder}
        register={register}
        size={size}
      />

      <Dropdown caret={false} items={Addresses} onChange={handleAddressSelect}>
        <div ref={ref} />
      </Dropdown>
    </FormLabel>
  )
}

GetAddress.propTypes = {
  errors: object.isRequired,
  label: string,
  name: string.isRequired,
  register: func.isRequired,
  setValue: func.isRequired,
  size: oneOf(Object.values(SIZE)),
  throttle: number,
  validator: func
}
