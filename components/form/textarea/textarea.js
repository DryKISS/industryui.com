/**
 * Textarea
 */

// React
import { any, bool, func, number, object, oneOf, string } from 'prop-types'

// UI
import { COMMON_INPUT_STYLES, FieldHOC, ERROR_STYLE, SIZE } from '../../'

// Style
import styled, { css } from 'styled-components'

export const TextareaField = ({
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
  ${props => COMMON_INPUT_STYLES(props)}

  direction: ${({ dir }) => dir};
  display: block;
  font-size: 1rem;
  line-height: 2rem;

  ${({ errors }) =>
    errors &&
    css`
      ${props => ERROR_STYLE(props)}
    `}

  ${({ size }) =>
    size === SIZE.SM &&
    css`
      font-size: 0.625rem;
    `}
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
  size: oneOf(Object.values(SIZE)),
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
