/**
 * Checkbox
 */

// React
import React, { Fragment } from 'react'
import { array, bool } from 'prop-types'

// UI
import { FieldHOC, FormError } from '../../'
import { CheckboxComponent } from './component'

// Style
import styled from 'styled-components'

export const CheckboxField = ({ data, errors, stacked, ...props }) => {
  return (
    <fieldset>
      {data.map(({ disabled, label, ...data }) => (
        <Fragment key={data.value}>
          <FieldHOC
            component={CheckboxComponent}
            disabled={disabled}
            stacked={stacked}
            errors={errors[props.name]}
            showError={false}
            {...data}
            {...props}
          />
          <StyledLabel htmlFor={data.id}>{label}</StyledLabel>
        </Fragment>
      ))}
      <FormError message={errors[props.name] ? errors[props.name].message : ''} />
    </fieldset>
  )
}

const StyledLabel = styled.label`
  display: inline;
  padding: 0 1.25rem;
  cursor: pointer;
`

CheckboxField.propTypes = {
  data: array.isRequired,
  stacked: bool
}

CheckboxField.defaultProps = {
  data: [],
  stacked: false
}
