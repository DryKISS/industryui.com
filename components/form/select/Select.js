/**
 * Select
 */

// React
import { forwardRef } from 'react'
import { array, arrayOf, bool, func, number, object, oneOfType, string } from 'prop-types'

// UI
import { FieldHOC } from '../'

// Style
import styled from 'styled-components'

export const SelectField = forwardRef(
  ({ data, disabled, options, placeholder, range, ...props }, ref) => {
    const renderRange = () => {
      const options = [
        <option disabled value='' key='initial0'>
          {placeholder}
        </option>
      ]

      for (let i = range[1]; i <= range[0]; i++) {
        options.push(
          <option disabled={disabled} key={`range${i}`} value={i}>
            {i}
          </option>
        )
      }

      return options
    }

    const renderOptions = () => {
      return options.map(({ disabled, text, value }, index) => (
        <option children={text} disabled={disabled} key={`option${index}`} value={value} />
      ))
    }

    return (
      <FieldHOC component={StyledSelect} className='Form-control' ref={ref} {...data} {...props}>
        {range && range.length > 0 && renderRange()}
        {options && renderOptions()}
      </FieldHOC>
    )
  }
)

const StyledSelect = styled.select`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #c4cacf;
  border-radius: 0.25rem;
  color: #9da7af;
  display: block;
  font-size: 1rem;
  height: 3rem;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    color: #9da7af;
    outline: 0;
  }
`

SelectField.propTypes = {
  data: object,
  options: array,
  placeholder: string,
  range: array
}

SelectField.defaultProps = {
  range: []
}
