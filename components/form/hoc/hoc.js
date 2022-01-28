/**
 * Components - Form - WrappedComponent
 */

// React
import React from 'react'

// UI
import Error from '../error/error'
import Space from '../../atoms/space/space'
import Text from '../../atoms/text/text'

const FieldHOC = ({
  autoComplete,
  autoFocus,
  component: Component,
  errors,
  children,
  className,
  cols,
  data,
  defaultValue,
  dir,
  disabled,
  helperMessage,
  id,
  max,
  min,
  maxLength,
  minLength,
  name,
  placeholder,
  readOnly,
  regExp,
  register,
  rows,
  showError,
  size,
  spellcheck,
  style,
  tabIndex,
  type,
  validate,
  value,
  wrap
}) => {
  return (
    <>
      <Component
        aria-label={name}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={className}
        cols={cols}
        {...data}
        defaultValue={defaultValue}
        dir={dir}
        disabled={disabled}
        errors={errors.message}
        id={id}
        key={name}
        {...register(name)}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
        size={size}
        spellcheck={spellcheck}
        style={style}
        tabIndex={tabIndex}
        type={type}
        value={value}
        wrap={wrap}
      >
        {children}
      </Component>

      {helperMessage && (
        <Space marginTop="sm" marginBottom="xs">
          <Text size="xs">
            {helperMessage}
          </Text>
        </Space>
      )}

      {showError && <Error message={errors?.message || ''} />}
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
