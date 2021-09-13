/**
 * Components - Form - WrappedComponent
 */

// React
import React from 'react'

// UI
import FormError from '../error/error'
import Space from '../../atoms/space/space'
import Text from '../../atoms/text/text'
import THEME_SIZE from '../../constants/size'

const FieldHOC = ({
  autoComplete,
  component: Component,
  errors,
  children,
  disabled,
  helperMessage,
  id,
  max,
  min,
  maxLength,
  minLength,
  name,
  placeholder,
  regExp,
  register,
  showError,
  size,
  type,
  validate
}) => {
  console.log('Errors', errors?.message, name)

  return (
    <>
      <Component
        aria-label={name}
        autoComplete={autoComplete}
        errors={errors?.message}
        disabled={disabled}
        id={id}
        key={name}
        {...register(name, {
          validate: validate,
          ...(max && { max: max }),
          ...(min && { min: min }),
          ...(maxLength && { maxLength: maxLength }),
          ...(minLength && { minLength: minLength }),
          ...(regExp && { pattern: new RegExp(regExp) })
        })}
        placeholder={placeholder}
        size={size}
        type={type}
        // style={{
        //   display: !show ? 'none' : undefined,
        //   ...props.style
        // }}
        // {...props}
      >
        {children}
      </Component>

      {helperMessage && (
        <Space marginTop={THEME_SIZE.SM} marginBottom={THEME_SIZE.XS}>
          <Text size={THEME_SIZE.XS} context="default">
            {helperMessage}
          </Text>
        </Space>
      )}

      {showError && <FormError message={errors?.message || ''} />}
    </>
  )
}

FieldHOC.defaultProps = {
  errors: {},
  helperMessage: false,
  register: () => {},
  showError: true
}

export default FieldHOC
