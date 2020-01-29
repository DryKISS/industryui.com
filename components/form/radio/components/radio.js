/**
 * Radio
 */

// React
import React from 'react'
import { array, bool, string } from 'prop-types'

// UI
import { FieldHOC, FormError } from '../../'
import { RadioComponent } from './component'

// Style
import styled, { css } from 'styled-components'

export const RadioField = ({ data, errors, legend, stacked, ...props }) => {
  return (
    <fieldset>
      {legend && <legend>{legend}</legend>}
      {data.map(({ disabled, label, ...data }) => (
        <StyledLabel htmlFor={data.id} key={data.id} stacked={stacked}>
          <FieldHOC
            component={RadioComponent}
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

RadioField.propTypes = {
  data: array.isRequired,
  legend: string,
  stacked: bool
}

RadioField.defaultProps = {
  data: [],
  stacked: false
}
