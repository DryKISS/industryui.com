/**
 * Radio
 */

// React
import React from 'react'
import { array, bool, string } from 'prop-types'

// UI
import { FieldHOC } from '../../'
import { RadioComponent } from './component'

// Style
import styled, { css } from 'styled-components'

export const RadioField = ({ data, errors, legend, stacked, ...props }) => {
  return (
    <StyledFieldset error={errors[props.name]}>
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
    </StyledFieldset>
  )
}

const StyledFieldset = styled.fieldset`
  border-radius: 0.25rem;
  ${({ error }) =>
    error &&
    css`
      background: rgb(251, 236, 242);
      border-color: rgb(191, 22, 80) rgb(191, 22, 80) rgb(191, 22, 80) rgb(236, 89, 144);
      border-image: initial;
      border-style: solid;
      border-width: 1px 1px 1px 10px;
    `}
`

const StyledLabel = styled.label`
  margin-right: 1.25rem;
  padding-left: 1.25rem;
  position: relative;
  cursor: pointer;
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
