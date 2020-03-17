/**
 * Input
 */

// React
import { arrayOf, bool, func, number, oneOfType, string, object } from 'prop-types'

// UI
import { Label } from '../'
import { Close } from '../../../atoms/close'

// Style
import styled from 'styled-components'

export const Input = ({
  accept,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  autoFocus,
  change,
  clear,
  data,
  disabled,
  id,
  label,
  placeholder,
  readOnly,
  required,
  style,
  type,
  value
}) => {
  const InputItem = () => (
    <>
      <StyledInput
        accept={accept}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        aria-describedby={id}
        className='Form-control'
        disabled={disabled}
        id={id}
        name={id}
        onChange={change}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        style={style}
        type={type}
        value={value}
        {...data}
      />

      {clear && value !== '' && <StyledClose click={() => clear(id)} context='dark' />}
    </>
  )

  return (
    <>
      {label ? (
        <Label text={label}>
          {InputItem()}
          <div className='Form-feedback' />
        </Label>
      ) : (
        <>
          {InputItem()}
          <div className='Form-feedback' />
        </>
      )}
    </>
  )
}

export const StyledInput = styled.input`
  background-clip: padding-box;
  background-color: ${({ theme, disabled }) => (disabled ? theme.COLOUR.light : '#fff')};
  ${({ disabled }) => disabled && 'cursor: not-allowed;'};
  border: 1px solid #c4cacf;
  border-radius: 0.25rem;
  color: #9da7af;
  display: block;
  height: 3rem;
  font-size: 1rem;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    background-color 0.15s ease-in-out;
  width: 100%;

  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    display: none;
  }

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    color: #9da7af;
    outline: 0;
  }

  &:invalid {
    color: red;
  }
`

const StyledClose = styled(Close)`
  margin: 0;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 25%;
`

Input.propTypes = {
  accept: string,
  autoCapitalize: oneOfType([bool, string]),
  autoComplete: oneOfType([bool, string]),
  autoCorrect: oneOfType([bool, string]),
  autoFocus: bool,
  change: func.isRequired,
  clear: func,
  disabled: bool,
  id: string,
  label: string,
  placeholder: string,
  readOnly: bool,
  required: bool,
  style: object,
  type: string,
  value: oneOfType([string, number, bool, arrayOf(oneOfType([string, number, bool]))])
}

Input.defaultProps = {
  autoCapitalize: 'off',
  autoComplete: 'off',
  autoCorrect: 'off',
  autoFocus: false,
  disabled: false,
  required: true,
  readOnly: false,
  type: 'text'
}
