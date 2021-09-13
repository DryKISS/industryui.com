/**
 * Components - Form - Field - Input
 */

// React
import React, { useState } from 'react'
import { bool, func, object, oneOf, oneOfType, string } from 'prop-types'

// UI
import FieldHOC from '../hoc/hoc'
import THEME_SIZE from '../../constants/size'
import StyledInput from './components/style'

const Input = ({
  accept,
  autoComplete,
  autoFocus,
  disabled,
  errors,
  helperMessage,
  name,
  placeholder,
  readOnly,
  regExp,
  register,
  showError,
  size,
  style,
  textAlign,
  type,
  validate
}) => {
  const [isTyping, setisTyping] = useState(false)

  return (
    <FieldHOC
      accept={accept}
      aria-label={name}
      autoComplete={autoComplete}
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
      showError={showError}
      size={size}
      textAlign={textAlign}
    />
  )
}

Input.propTypes = {
  accept: string,
  autoComplete: oneOfType([bool, oneOf(['on', 'off'])]),
  autoFocus: bool,
  disabled: bool,
  errors: object.isRequired,
  helperMessage: string,
  name: string.isRequired,
  placeholder: string,
  readOnly: bool,
  register: func.isRequired,
  showError: bool,
  size: oneOf(Object.values(THEME_SIZE)),
  style: object,
  textAlign: oneOf(['left', 'rigth', 'center']),
  type: oneOf(['email', 'number', 'text'])
}

Input.defaultProps = {
  autoComplete: 'off',
  autoFocus: false,
  disabled: false,
  readOnly: false,
  showError: true,
  size: 'md',
  type: 'text'
}

export default Input
