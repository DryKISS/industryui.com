/**
 * Radio
 */

// React
import React, { Component } from 'react'
import { array, bool, func, string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Radio = withTheme(
  class Radio extends Component {
    static propTypes = {
      data: array.isRequired,
      handleChange: func.isRequired,
      legend: string,
      stacked: bool
    }

    static defaultProps = {
      legend: '',
      stacked: false
    }

    renderRadio = () => {
      const { data, handleChange, stacked } = this.props

      return data.map(({ disabled, id, isChecked, label, required, value }, index) => {
        return (
          <StyledLabel key={index} stacked={stacked}>

            <StyledInput
              checked={isChecked}
              disabled={disabled}
              id={id}
              name={id}
              onChange={handleChange}
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

    render () {
      const { legend } = this.props

      return (
        <fieldset>

          <legend>{legend}</legend>

          {this.renderRadio()}

          <div className='Form-feedback' />

        </fieldset>
      )
    }
  }
)

// Style
const StyledLabel = styled.label`
  ${props => props.stacked && 'display: block;'}
  padding-left: 1.25rem;
  ${props => props.stacked ? 'margin: .5rem 0;' : 'margin-right: 1.25rem;'}
  ${props => props.stacked && 'padding-left: 1.25rem;'}
  position: relative;
`

const StyledInput = styled.input`
  margin-top: .05rem;
  margin-left: -1.25rem;
  position: absolute;
`
