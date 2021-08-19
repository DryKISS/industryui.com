/**
 * Textarea
 */

// React
import React from 'react'
import { any, bool, func, number, object, oneOf, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import FieldHOC from '../hoc/hoc'
import formErrorStyle from '../variables/formErrorStyle'
import formStyle from '../variables/formStyle'
import THEME_SIZE from '../../constants/size'

const TextareaField = ({
  autoFocus,
  className,
  cols,
  dir,
  disabled,
  errors,
  maxLength,
  name,
  placeholder,
  readOnly,
  register,
  rows,
  size,
  spellCheck,
  tabIndex,
  wrap
}) => {
  return (
    <FieldHOC
      autoFocus={autoFocus}
      className={className}
      cols={cols}
      component={StyledTextarea}
      dir={dir}
      disabled={disabled}
      errors={errors[name]}
      maxLength={maxLength}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      register={register}
      rows={rows}
      size={size}
      spellcheck={spellCheck}
      tabIndex={tabIndex}
      wrap={wrap}
    />
  )
}

const StyledTextarea = styled.textarea`
  ${(props) => formStyle(props)}

  direction: ${({ dir }) => dir};
  display: block;
  line-height: 1.25rem;
  ${({ errors }) =>
    errors &&
    css`
      ${(props) => formErrorStyle(props)}
    `}

  ${({ size }) =>
    size === THEME_SIZE.SM &&
    css`
      font-size: 0.625rem;
    `}
    padding: 0.5rem 0.725rem;
`

TextareaField.propTypes = {
  autoFocus: bool,
  className: any,
  cols: number,
  dir: oneOf(['ltr', 'rtl']),
  disabled: bool,
  errors: object.isRequired,
  maxLength: number,
  name: string.isRequired,
  placeholder: string,
  readOnly: bool,
  register: func.isRequired,
  rows: number,
  size: oneOf(Object.values(THEME_SIZE)),
  spellCheck: bool,
  tabIndex: number,
  wrap: oneOf(['soft', 'hard'])
}

TextareaField.defaultProps = {
  autoFocus: false,
  dir: 'ltr',
  rows: 5,
  size: 'md'
}

export default TextareaField
