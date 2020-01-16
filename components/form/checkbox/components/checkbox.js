/**
 * Checkbox
 */

// React
import React from 'react'
import { array, bool, string } from 'prop-types'

// UI
import { FieldHOC, FormError } from '../../'
import { CheckboxComponent } from './component'

// Style
import styled from 'styled-components'

export const CheckboxField = ({ data, errors, legend, stacked, ...props }) => {
  return (
    <fieldset>
      {legend && <legend>{legend}</legend>}
      {data.map(({ disabled, label, ...data }) => (
        <StyledLabel htmlFor={data.id} key={data.id} stacked={stacked}>
          <FieldHOC
            component={CheckboxComponent}
            disabled={disabled}
            errors={errors[props.name]}
            showError={false}
            {...data}
            {...props}
          />
          {label}
        </StyledLabel>
      ))}
      <FormError message={errors[props.name] ? errors[props.name].message : ''} />
    </fieldset>
  )
}

const StyledLabel = styled.label`
  display: ${({ stacked }) => (stacked ? 'block' : 'inline')};
  cursor: pointer;
  padding-right: 1rem;
`

CheckboxField.propTypes = {
  data: array.isRequired,
  legend: string,
  stacked: bool
}

CheckboxField.defaultProps = {
  data: [],
  stacked: false
}
