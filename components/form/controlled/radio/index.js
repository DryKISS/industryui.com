/**
 * Radio
 */

// React
import { array, bool, func, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

export const Radio = ({ change, data, legend, stacked }) => {
  const renderRadio = () => {
    return data.map(({ disabled, id, isChecked, label, required, value }, index) => {
      return (
        <StyledLabel key={index} stacked={stacked}>
          <StyledInput
            checked={isChecked}
            disabled={disabled}
            id={id}
            name={id}
            onChange={change}
            required={required}
            stacked={stacked}
            type='radio'
            value={value}
          />
          {label}
        </StyledLabel>
      )
    })
  }

  return (
    <fieldset>
      <legend>{legend}</legend>
      {renderRadio()}
      <div className='Form-feedback' />
    </fieldset>
  )
}

const StyledLabel = styled.label`
  margin-right: 1.25rem;
  padding-left: 1.25rem;
  position: relative;
  ${({ stacked }) =>
    stacked &&
    css`
      display: block;
      margin: 0.5rem 0;
      padding-left: 1.25rem;
    `}
`

const StyledInput = styled.input`
  margin-top: 0.05rem;
  margin-left: -1.25rem;
  position: absolute;
`

Radio.propTypes = {
  change: func.isRequired,
  data: array.isRequired,
  legend: string,
  stacked: bool
}

Radio.defaultProps = {
  legend: '',
  stacked: false
}
