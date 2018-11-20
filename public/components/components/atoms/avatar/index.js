/**
 * Avatar
 */

// React
import React, { Component } from 'react'
import { any, bool, func, number, objectOf, oneOfType, string } from 'prop-types'
import cx from 'classnames'

// Style
import styled, { withTheme } from 'styled-components'

export const Avatar = withTheme(
  class Avatar extends Component {
    static propTypes = {
      children: any,
      content: any,
      dark: bool,
      handleClick: func,
      medium: bool,
      style: objectOf(oneOfType([
        number,
        string
      ]))
    }

    render () {
      const { children, content, dark, handleClick, medium, style } = this.props

      const classes = cx(
        {
          'Avatar-dark': dark,
          'Avatar-medium': medium
        }
      )

      return (
        <StyledAvatar className={classes} onClick={handleClick} style={style}>
          {children || content}
        </StyledAvatar>
      )
    }
  }
)

// Style
const StyledAvatar = styled.div`
  align-items: center;
  background-color: #04D4DC;
  border-radius: 50%;
  color: #3a4e5f;
  display: flex;
  height: 56px;
  justify-content: center;
  min-width: 56px;
`

//   .Avatar-medium {
//     font-size: 14px;
//     height: 2rem;
//     min-width: 2rem;
//     width: 2rem;
//   }

//   .Avatar-dark {
//     background-color: #3a4e5f;
//     color: #ecf0f3;
//   }

//   .Avatar-dark:hover {
//     background-color: #0679d8;
//     color: #ecf0f3;
//   }
//   `
