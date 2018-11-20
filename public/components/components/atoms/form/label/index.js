/**
 * Label
 */

// React
import React, { Component } from 'react'
import { array, string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Label = withTheme(
  class Label extends Component {
    static propTypes = {
      children: array.isRequired,
      id: string,
      text: string
    }

    render () {
      const {
        children,
        id,
        text
      } = this.props

      return (
        <StyledLabel htmlFor={id}>
          <StyledLabelText text={text}>{text}</StyledLabelText>
          {children}
        </StyledLabel>
      )
    }
  }
)

// Style
const StyledLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
`

const StyledLabelText = styled.div`
  display: ${props => props.text && props.text.length > 0 ? 'block' : 'none'};
  margin-bottom: .5rem;
`
