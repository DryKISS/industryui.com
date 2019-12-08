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

const stackedStyles = css`
  display: block;
  margin: 0.5rem 0;
`

const StyledLabel = styled.label`
  ${stacked => stacked && stackedStyles}
  position: relative;
  padding-left: 1.25rem;
  cursor: pointer;
`

const StyledCheckbox = styled.input`
  position: absolute;
  margin-top: 0.05rem;
  margin-left: -1.25rem;
  cursor: pointer;
`

Checkbox.propTypes = {
  change: func.isRequired,
  data: array.isRequired,
  legend: string,
  stacked: bool
}

Checkbox.defaultProps = {
  legend: '',
  stacked: false
}
