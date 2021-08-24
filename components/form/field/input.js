/**
 * Components - Form - Field - Input
 */

// React
import React, { useState } from 'react'
import { arrayOf, bool, func, number, object, oneOf, oneOfType, string } from 'prop-types'

// UI
import FieldHOC from '../hoc/hoc'
import THEME_SIZE from '../../constants/size'
import StyledInput from './style'

const FormField = ({
  disabled,
  errors,
  helperMessage,
  name,
  placeholder,
  readOnly,
  regExp,
  register,
  size,
  validate,
  withAddon,
  ...props
}) => {
  const [isTyping, setisTyping] = useState(false)

  return (
    <FieldHOC
      aria-label={name}
      component={StyledInput}
      disabled={disabled}
      helperMessage={helperMessage}
      onKeyDown={(e) => {
        setisTyping(true)
      }}
      onBlur={() => {
        setisTyping(false)
      }}
      errors={errors[name]}
      isTyping={isTyping}
      key={name}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      register={register}
      size={size}
      withAddon={withAddon}
      {...props}
    />
  )
}

FormField.propTypes = {
  accept: string,
  autoComplete: oneOfType([bool, string]),
  autoFocus: bool,
  disabled: bool,
  errors: object.isRequired,
  helperMessage: string,
  label: string,
  name: string.isRequired,
  placeholder: string,
  readOnly: bool,
  register: func.isRequired,
  size: oneOf([THEME_SIZE.SM, THEME_SIZE.MD, THEME_SIZE.LG]),
  style: object,
  textAlign: string,
  type: string,
  value: oneOfType([string, number, bool, arrayOf(oneOfType([string, number, bool]))])
}

FormField.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  errors: {},
  readOnly: false,
  type: 'text'
}

export default FormField
