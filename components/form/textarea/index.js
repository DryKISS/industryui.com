/**
 * Textarea
 */

// React
import { bool, number, string, object, oneOf } from 'prop-types'

// UI
import { FieldHOC, ERROR_STYLE } from '../../'

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
      spellcheck={spellCheck}
      tabIndex={tabIndex}
      wrap={wrap}
      {...props}
    />
  )
}

const StyledTextarea = styled.textarea`
  background-clip: padding-box;
  background-color: ${({ disabled }) => (disabled ? '#e9ecef' : '#fff')};
  border: 1px solid ${props => props.theme.COLOUR.dark};
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: ${props => props.theme.COLOUR.dark};
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'auto')};
  direction: ${({ dir }) => dir};
  display: block;
  font-size: 1rem;
  line-height: 2rem;
  padding: 0.5rem;
  outline:none;
  overflow: auto;
  width: 100%;
  &:focus {
    border-color: ${({ theme, errors, readOnly }) => {
      if (!readOnly) {
        return errors ? theme.COLOUR.error : theme.COLOUR.primary
      } else {
        return theme ? theme.COLOUR.darkGrey : '#CCCCCC'
      }
    }}
  }


  ::placeholder {
    color:${({ theme }) => (theme ? theme.COLOUR.darkText : '#666666')};
    opacity: 1;
  }

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background: ${theme.COLOUR.light};
      border-color: ${({ theme }) => (theme ? theme.COLOUR.darkGrey : '#cccccc')};
      cursor: not-allowed;
    `}

  ${({ readOnly }) =>
    readOnly &&
    css`
      background-color: transparent;
      border-color: ${({ theme }) => (theme ? theme.COLOUR.darkGrey : '#cccccc')};
      border-width: 1px;
      padding: 0.5rem;
    `}

  ${({ errors }) =>
    errors &&
    css`
      ${props => ERROR_STYLE(props)}
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
