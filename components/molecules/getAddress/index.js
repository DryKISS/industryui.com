/**
 * Get Address
 */

// React
import { useRef, useState } from 'react'
import { func, object, oneOf, number, string } from 'prop-types'

// UI
import {
  Button,
  Dropdown,
  FormError,
  FormField,
  FormLabel,
  GetAddressService,
  InputGroupAddon,
  Shimmer,
  SIZE,
  validatorPostCode
} from 'components'
import styled, { css } from 'styled-components'
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
  const [IsLoading, setIsLoading] = useState(false)
  const [Addresses, setAddresses] = useState([])

  const ref = useRef(null)

  const InputRef = useRef('')

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
    setIsLoading(false)
  }

  const handleInputChange = value => {
    InputRef.current = value
  }

  const handleSearchClick = () => {
    setIsLoading(true)
    GetAddressService.getAddresses({
      postCode: InputRef.current,
      callback: onApiCall,
      callThrottle: throttle ?? 500,
      validator: validator ?? validatorPostCode
    })
  }

  const handleAddressSelect = ({ name: address, id }) => {
    setValue(name, InputRef.current + '-' + address)
  }

  return (
    <FormLabel label={label}>
      <InputWrapper>
        <FormField
          errors={errors[name] ? errors : Errors}
          name={name}
          onChange={e => handleInputChange(e.target.value)}
          placeholder={placeholder}
          register={register}
          size={size}
        />
        <InputGroupAddon addonType='append'>
          <Button onClick={handleSearchClick} content='Search' context='primary' size='sm' />
        </InputGroupAddon>
      </InputWrapper>
      {(errors[name] || Errors[name]) && (
        <FormError message={errors[name] ? errors[name].message : Errors[name].message} />
      )}
      {IsLoading && (
        <LoadingWrapper size={size}>
          <Shimmer duration={500} />
        </LoadingWrapper>
      )}

      <Dropdown caret={false} items={Addresses} onChange={handleAddressSelect}>
        <div ref={ref} />
      </Dropdown>
    </FormLabel>
  )
}

const InputWrapper = styled.div`
  display: flex;
  input {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`

const LoadingWrapper = styled.div`
  width: 80%;
  position: absolute;
  top: 2.4rem;
  left: 1.5rem;

  ${({ size }) => {
    switch (size) {
      case SIZE.SM:
        return css`
          top: 2.1rem;
          height: 0.8rem;
        `
      case SIZE.MD:
        return css`
          height: 1.125rem;
        `
      case SIZE.LG:
        return css`
          height: 1.45rem;
        `
      default:
        return css`
          height: 1.45rem;
        `
    }
  }}
`

GetAddress.propTypes = {
  errors: object.isRequired,
  label: string,
  name: string.isRequired,
  register: func.isRequired,
  setValue: func.isRequired,
  size: oneOf(['sm', 'md', 'lg']),
  throttle: number,
  validator: func
}

GetAddress.defaultProps = {
  size: 'lg'
}
