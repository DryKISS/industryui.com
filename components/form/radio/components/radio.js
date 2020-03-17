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
      {legend && <StyledLegend error={errors[props.name]}>{legend}</StyledLegend>}

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
      padding: 0.5rem;
    `}
`

const StyledLegend = styled.legend`
  ${({ error }) =>
    error &&
    css`
      padding: 0 0.5rem;
    `}
`

const StyledLabel = styled.label`
  cursor: pointer;
  margin-right: 1.25rem;
  position: relative;
  ${({ stacked }) =>
    stacked &&
    css`
      display: block;
      margin: 0.5rem 0;
    `}
`

RadioField.propTypes = {
  data: array.isRequired,
  legend: string,
  required: bool,
  stacked: bool
}

RadioField.defaultProps = {
  data: [],
  required: true,
  stacked: false
}
