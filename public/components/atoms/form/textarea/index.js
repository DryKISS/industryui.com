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
    constructor (props) {
      super(props)

      this.state = {
        charCount: props.maxLength
      }
    }

    static propTypes = {
      autoFocus: bool,
      disabled: bool,
      handleChange: func.isRequired,
      id: string,
      label: string,
      maxLength: number,
      placeholder: string,
      readOnly: bool,
      required: bool,
      rows: number,
      value: string
    }

    static defaultProps = {
      autoFocus: false,
      required: true,
      value: "",
      rows: 5
    }

    componentDidMount = () => {
      this.setState({ charCount: this.props.value.length })
    }

    _wordCount = (e) => {
      const { handleChange } = this.props
      handleChange(e)
      this.setState({ charCount: e.target.value.length })
      console.log(e.target)
    }

    render () {
      const {
        autoFocus,
        disabled,
        id,
        label,
        maxLength,
        placeholder,
        readOnly,
        required,
        rows,
        value
      } = this.props

      const { charCount } = this.state

      return (
        <Label id={id} text={label}>

          <StyledTextarea
            autoFocus={autoFocus}
            aria-describedby={id}
            className='Form-control Textarea'
            disabled={disabled}
            id={id}
            maxLength={maxLength}
            name={id}
            onChange={this._wordCount}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            rows={rows}
            value={value}
          />

          {charCount} / {maxLength}

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
  border: 1px solid ${props => props.theme.COLOUR.light};
  border-radius: .25rem;
  color: ${props => props.theme.COLOUR.dark};
  display: block;
  font-size: 1rem;
  line-height: 1.5;
  padding: .5rem;
  overflow: auto;
  width: 100%;

  &:focus {
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, .25);
    outline: 0;
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
