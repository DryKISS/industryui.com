/**
 * Close
 */

// React
import React, { Component } from 'react'
import { func } from 'prop-types'

// UI
import { Button } from '../'

// Style
import styled, { withTheme } from 'styled-components'

export const Close = withTheme(
  class Close extends Component {
    static propTypes = {
      handleClose: func.isRequired
    }

    render () {
      const { handleClose } = this.props

      return (
        <StyledButton onClick={handleClose}>
          <span aria-hidden='true'>×</span>
        </StyledButton>
      )
    }
  }
)

// Style
const StyledButton = styled(Button)`
  background-color: transparent;
  border: 0;
  color: #000;
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  opacity: .5;
  /* padding: 1rem; */
  text-shadow: 0 1px 0 #fff;
  margin: -1rem -1rem -1rem auto;

  &:hover {
    background-color: transparent;
    color: #000;
    opacity: .75;
    text-decoration: none;
  }
`
