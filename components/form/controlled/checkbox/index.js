/**
 * Checkbox
 */

// React
import { array, bool, func, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

export const Checkbox = ({ change, data, legend, stacked }) => {
  const renderCheckbox = () => {
    return data.map(({ disabled, id, isChecked, label, required }, index) => {
      return (
        <StyledLabel key={index} stacked={stacked}>
          <StyledCheckbox
            checked={isChecked}
            className='Form-control'
            disabled={disabled}
            id={id}
            name={id}
            onChange={change}
            required={required}
            stacked={stacked}
            type='checkbox'
          />
          {label}
          <div className='Form-feedback' />
        </StyledLabel>
      )
    })
  }

  return (
    <fieldset>
      {legend && <legend>{legend}</legend>}
      {renderCheckbox()}
    </fieldset>
  )
}

const StyledLabel = styled.label`
  display: block;
  line-height: 1;
  position: relative;
  padding-left: 1.25rem;
  cursor: pointer;
  ${({ stacked }) =>
    !stacked &&
    css`
      align-items: center;
      display: inline-flex;
      margin-right: 0.75rem;
      padding-left: 0;
    `}
`

const StyledCheckbox = styled.input`
  cursor: pointer;
  position: absolute;
  margin-top: 0.05rem;
  margin-left: -1.25rem;
  ${({ stacked }) =>
    !stacked &&
    css`
      position: static;
      margin-top: 0;
      margin-right: 0.3125rem;
      margin-left: 0;
    `}
`

Checkbox.propTypes = {
  change: func.isRequired,
  data: array.isRequired,
  legend: string,
  stacked: bool
}

Checkbox.defaultProps = {
  legend: '',
  stacked: true
}
