/**
 * Textarea
 */

// React
import React, { Component } from 'react'
import { bool, func, number, string } from 'prop-types'

// UI
import { Label } from '../'

// Style
import styled, { withTheme } from 'styled-components'

export const Textarea = withTheme(
  class Textarea extends Component {
    static propTypes = {
      autoFocus: bool,
      disabled: bool,
      handleChange: func.isRequired,
      label: string,
      id: string,
      placeholder: string,
      readOnly: bool,
      required: bool,
      rows: number,
      value: string
    }

    static defaultProps = {
      autoFocus: false,
      required: true,
      rows: 5
    }

    render () {
      const {
        autoFocus,
        disabled,
        handleChange,
        label,
        id,
        placeholder,
        readOnly,
        required,
        rows,
        value
      } = this.props

      return (
        <Label id={id} text={label}>

          <StyledTextarea
            autoFocus={autoFocus}
            aria-describedby={id}
            className='Form-control Textarea'
            disabled={disabled}
            id={id}
            onChange={handleChange}
            placeholder={placeholder}
            name={id}
            readOnly={readOnly}
            required={required}
            rows={rows}
            value={value}
          />

          <div className='Form-feedback' />

        </Label>
      )
    }
  }
)

// Style
const StyledTextarea = styled.textarea`
  background-clip: padding-box;
  background-color: #fff;
  border: 1px solid #c4cacf;
  border-radius: .25rem;
  /* color: #9da7af; */
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  padding: .375rem .75rem;
  overflow: auto;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  width: 100%;

  &:focus {
    color: #9da7af;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
  }

  &:valid~.Form-feedback {
    display: none;
  }

  &:valid {
    border-color: green;
  }

  &:invalid {
    border-color: #dc3545;
  }
`

//   .Textarea-large {
//     border-radius: .3rem;
//     font-size: 1.25rem;
//     height: calc(2.875rem + 2px);
//     padding: .5rem 1rem;
//   }

//   .Textarea-small {
//     font-size: .875rem;
//     border-radius: .2rem;
//     height: calc(1.8125rem + 2px);
//     padding: .25rem .5rem;
//   }

//   .sr-only {
//     border: 0;
//     clip: rect(0, 0, 0, 0);
//     height: 1px;
//     padding: 0;
//     position: absolute;
//     overflow: hidden;
//     white-space: nowrap;
//     width: 1px;
//   }
//   `
