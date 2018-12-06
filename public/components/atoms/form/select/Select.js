/**
 * Select
 */

// React
import React, { Component } from 'react'
import { array, arrayOf, bool, func, number, oneOfType, string } from 'prop-types'

// UI
import { Label } from '../'

// Style
import styled, { withTheme } from 'styled-components'

export const Select = withTheme(
  class Select extends Component {
    static propTypes = {
      data: array,
      handleChange: func.isRequired,
      label: string,
      id: string,
      placeholder: string,
      range: array,
      required: bool,
      value: oneOfType([
        string,
        number,
        bool,
        arrayOf(oneOfType([string, number, bool]))
      ])
    }

    static defaultProps = {
      range: [],
      required: true
    }

    renderRange = () => {
      const { disabled, placeholder, range } = this.props

      let options = [<option disabled value={''} key={`initial0`}>{placeholder}</option>]

      for (let i = range[1]; i <= range[0]; i++) {
        options.push(<option disabled={disabled} key={`range${i}`} value={i}>{i}</option>)
      }

      return options
    }

    renderOptions = () => {
      const { data } = this.props

      return data.map(({ disabled, text, value }, index) =>
        <option
          disabled={disabled}
          key={`option${index}`}
          value={value}
        >
          {text}
        </option>
      )
    }

    render () {
      const {
        data,
        handleChange,
        label,
        id,
        range,
        required,
        value
      } = this.props

      return (
        <Label id={id} text={label}>

          <StyledSelect
            className='Form-control'
            id={id}
            name={id}
            onChange={handleChange}
            required={required}
            value={value}
          >

            {
              range && range.length > 0 && this.renderRange()
            }

            {
              data && this.renderOptions()
            }

          </StyledSelect>

          <div className='Form-feedback' />

        </Label>
      )
    }
  }
)

// Style
const StyledSelect = styled.select`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #c4cacf;
  border-radius: .25rem;
  color: #9da7af;
  display: block;
  font-size: 1rem;
  height: 3rem;
  line-height: 1.5;
  padding: .375rem .75rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  width: 100%;

  &:focus {
    color: #9da7af;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
  }
`
