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
  component: Component,
  errors,
  children,
  helperMessage,
  register,
  show,
  showError,
  validate,
  ...props
}) => (
  <>
    <Component
      aria-label={props.name}
      errors={errors?.message}
      key={props.name}
      name={props.name}
      ref={register({
        validate: validate,
        ...(props.max && { max: props.max }),
        ...(props.min && { min: props.min }),
        ...(props.maxLength && { maxLength: props.maxLength }),
        ...(props.minLength && { minLength: props.minLength }),
        ...(props.regExp && { pattern: new RegExp(props.regExp) })
      })}
      style={{
        display: !show ? 'none' : undefined,
        ...props.style
      }}
      {...props}
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

FieldHOC.defaultProps = {
  errors: {},
  register: () => {},
  show: true,
  showError: false
}

export default FieldHOC
