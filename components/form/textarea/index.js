/**
 * Textarea
 */

// React
import { bool, number, string, object, oneOf } from 'prop-types'

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
  rows,
  size,
  spellCheck,
  tabIndex,
  wrap,
  ...props
}) => {
  return (
    <FieldHOC
      component={StyledTextarea}
      autoFocus={autoFocus}
      className={`${className} Form-control Textarea`}
      cols={cols}
      dir={dir}
      disabled={disabled}
      errors={errors[name]}
      maxLength={maxLength}
      placeholder={placeholder}
      readOnly={readOnly}
      rows={rows}
      showError={false}
      size={size}
      spellcheck={spellCheck}
      tabIndex={tabIndex}
      wrap={wrap}
      {...props}
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
  cols: number,
  dir: oneOf(['ltr', 'rtl']),
  disabled: bool,
  errors: object,
  maxLength: number,
  name: string,
  placeholder: string,
  readOnly: bool,
  required: bool,
  rows: number,
  spellCheck: bool,
  tabIndex: number,
  wrap: oneOf(['soft', 'hard'])
}

TextareaField.defaultProps = {
  autoFocus: false,
  dir: 'ltr',
  required: true,
  rows: 5
}
