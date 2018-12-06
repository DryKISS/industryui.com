/**
 * Checkbox
 */

// React
import React, { Component } from 'react'
import { array, bool, func, string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Checkbox = withTheme(

  class Checkbox extends Component {
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

    renderCheckbox = () => {
      const { data, handleChange, stacked } = this.props

      return data.map(({ disabled, id, isChecked, label, required }, index) => {
        return (
          <StyledLabel key={index} stacked={stacked}>

            <StyledCheckbox
              checked={isChecked}
              className='Form-control'
              disabled={disabled}
              id={id}
              name={id}
              onChange={handleChange}
              required={required}
              type='checkbox'
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

          {this.renderCheckbox()}

          <div className='Form-feedback' />

        </fieldset>
      )
    }
  }
)

const stackedStyles = `
  display: block;
  margin: .5rem 0;
`

const StyledLabel = styled.label`
  ${props => props.stacked ? stackedStyles : ''}
  position: relative;
  padding-left: 1.25rem;
`

const StyledCheckbox = styled.input`
  position: absolute;
  margin-top: .05rem;
  margin-left: -1.25rem;
`
