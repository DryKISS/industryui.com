/**
 * Input
 */

// React
import React, { Component } from 'react'
import { arrayOf, bool, func, number, oneOfType, string } from 'prop-types'

// UI
import { Label } from '../'

// Style
import styled, { withTheme } from 'styled-components'

export const Input = withTheme(
  class Input extends Component {
    static propTypes = {
      autoCapitalize: oneOfType([ bool, string ]),
      autoComplete: oneOfType([ bool, string ]),
      autoCorrect: oneOfType([ bool, string ]),
      autoFocus: bool,
      handleChange: func.isRequired,
      label: string,
      id: string,
      placeholder: string,
      required: bool,
      type: string,
      value: oneOfType([
        string,
        number,
        bool,
        arrayOf(oneOfType([string, number, bool]))
      ])
    }

    static defaultProps = {
      autoCapitalize: 'off',
      autoComplete: 'off',
      autoCorrect: 'off',
      autoFocus: false,
      required: true,
      type: 'text'
    }

    render () {
      const {
        autoCapitalize,
        autoComplete,
        autoCorrect,
        autoFocus,
        handleChange,
        label,
        id,
        placeholder,
        required,
        type,
        value
      } = this.props

      return (
        <Label id={id} text={label}>

          <StyledInput
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            autoCorrect={autoCorrect}
            autoFocus={autoFocus}
            aria-describedby={id}
            className='Form-control'
            id={id}
            onChange={handleChange}
            placeholder={placeholder}
            name={id}
            required={required}
            type={type}
            value={value}
          />

          <div className='Form-feedback' />

        </Label>
      )
    }
  }
)

// Style
const StyledInput = styled.input`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #c4cacf;
  border-radius: .25rem;
  color: #9da7af;
  display: block;
  font-size: 1rem;
  height: 3rem;
  line-height: 1.5;
  padding: .5rem 1rem;
  transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
  width: 100%;

  &:focus {
    color: #9da7af;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
  }

  &:invalid {
    color: red;
  }
`

// .Input-large {
//   border-radius: .3rem;
//   font-size: 1.25rem;
//   height: calc(2.875rem + 2px);
//   padding: .5rem 1rem;
// }

// .Input-small {
//   font-size: .875rem;
//   border-radius: .2rem;
//   height: calc(1.8125rem + 2px);
//   padding: .25rem .5rem;
// }

// .sr-only {
//   border: 0;
//   clip: rect(0, 0, 0, 0);
//   height: 1px;
//   padding: 0;
//   position: absolute;
//   overflow: hidden;
//   white-space: nowrap;
//   width: 1px;
// }
