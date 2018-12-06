/**
 * Tab
 */

// React
import React, { Component } from 'react'
import { func, string } from 'prop-types'

// Style
import styled, { withTheme } from 'styled-components'

export const Tab = withTheme(
  class Tab extends Component {
    static propTypes = {
      activeTab: string.isRequired,
      label: string.isRequired,
      onClick: func.isRequired
    }

    onClick = () => {
      const { label, onClick } = this.props
      onClick(label)
    }

    render () {
      const {
        onClick,
        props: {
          activeTab,
          label
        }
      } = this

      return (
        <StyledTab active={activeTab === label} onClick={onClick}>
          {label}
        </StyledTab>
      )
    }
  }
)

// Style
const StyledTab = styled.ol`
  background-color: ${props => props.active && 'white'};
  border: ${props => props.active && 'solid #ccc'};
  border-width: ${props => props.active && '1px 1px 0 1px'};
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
`
