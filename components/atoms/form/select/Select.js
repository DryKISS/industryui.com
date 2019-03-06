/**
 * Select
 */

// React
import { array, arrayOf, bool, func, number, object, oneOfType, string } from 'prop-types'

// UI
import { Label } from '../../'

// Style
import styled from 'styled-components'

export const Select = ({
  change,
  data,
  disabled,
  label,
  id,
  options,
  placeholder,
  range,
  required,
  value
}) => {
  const renderRange = () => {
    let options = [<option disabled value={''} key={`initial0`}>{placeholder}</option>]

    for (let i = range[1]; i <= range[0]; i++) {
      options.push(<option disabled={disabled} key={`range${i}`} value={i}>{i}</option>)
    }

    return options
  }

  const renderOptions = () => {
    return options.map(({ disabled, text, value }, index) =>
      <option
        children={text}
        disabled={disabled}
        key={`option${index}`}
        value={value}
      />
    )
  }

  return (
    <Label id={id} text={label}>
      <StyledSelect
        className='Form-control'
        id={id}
        name={id}
        onChange={change}
        required={required}
        value={value}
        {...data}
      >
        {range && range.length > 0 && renderRange()}
        {options && renderOptions()}
      </StyledSelect>
      <div className='Form-feedback' />
    </Label>
  )
}

Select.propTypes = {
  change: func.isRequired,
  data: object,
  label: string,
  id: string,
  options: array,
  placeholder: string,
  range: array,
  required: bool,
  value: oneOfType([
    string,
    number,
    bool,
    arrayOf(oneOfType([string, number, bool]))
  ])
}

Select.applydefaultProps = {
  range: [],
  required: true
}

const StyledSelect = styled.select`
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
    box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
  }
`
