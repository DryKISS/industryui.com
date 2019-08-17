/**
 * InputTags
 */

// React
import { arrayOf, bool, func, number, oneOfType, string } from 'prop-types'

// UI
import { Label } from '../'

// Style
import styled from 'styled-components'

export const InputTags = ({
  autoCapitalize,
  autoComplete,
  autoCorrect,
  autoFocus,
  change,
  label,
  id,
  placeholder,
  required,
  type,
  value
}) => {
  return (
    <Label id={id} text={label}>

      <StyledInput
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        aria-describedby={id}
        className='Form-control'
        id={id}
        onChange={change}
        placeholder={placeholder}
        name={id}
        required={required}
        type={type}
        value={value}
      />

      <div className='Form-feedback' />

    </Label>
  )
}

InputTags.propTypes = {
  autoCapitalize: oneOfType([bool, string]),
  autoComplete: oneOfType([bool, string]),
  autoCorrect: oneOfType([bool, string]),
  autoFocus: bool,
  change: func.isRequired,
  label: string,
  id: string,
  placeholder: string,
  required: bool,
  type: string,
  value: oneOfType([
    string,
    number,
    bool,
    arrayOf(oneOfType([string, number, bool]))
  ])
}

InputTags.defaultProps = {
  autoCapitalize: 'off',
  autoComplete: 'off',
  autoCorrect: 'off',
  autoFocus: false,
  required: true,
  type: 'text'
}

const StyledInput = styled.input`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #c4cacf;
  border-radius: .25rem;
  color: #9da7af;
  display: block;
  font-size: 1rem;
  height: 3rem;
  line-height: 1.5;
  padding: .375rem .75rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  width: 100%;

  &:focus {
    color: #9da7af;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
  }
`
