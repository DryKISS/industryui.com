/**
 * Input
 */

// React
import { arrayOf, bool, func, number, oneOfType, string, object } from 'prop-types'

// UI
import { Label } from '../'

// Style
import styled from 'styled-components'

export const Input = ({
  accept,
  autoCapitalize,
  autoComplete,
  autoCorrect,
  autoFocus,
  change,
  data,
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
    <StyledInput
      accept={accept}
      autoCapitalize={autoCapitalize}
      autoComplete={autoComplete}
      autoCorrect={autoCorrect}
      autoFocus={autoFocus}
      aria-describedby={id}
      className='Form-control'
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
  )

  return (
    <>
      {label ? (
        <Label text={label}>
          <InputItem />
          <div className='Form-feedback' />
        </Label>
      ) : (
        <InputItem />
      )}
    </>
  )
}

const StyledInput = styled.input`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #c4cacf;
  border-radius: 0.25rem;
  color: #9da7af;
  display: block;
  font-size: 1rem;
  height: 3rem;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  .Form-inputGroup > & {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    margin-bottom: 0;
  }

  &:focus {
    color: #9da7af;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &:invalid {
    color: red;
  }
`

Input.propTypes = {
  accept: string,
  autoCapitalize: oneOfType([bool, string]),
  autoComplete: oneOfType([bool, string]),
  autoCorrect: oneOfType([bool, string]),
  autoFocus: bool,
  change: func.isRequired,
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
  required: true,
  readOnly: false,
  type: 'text'
}
