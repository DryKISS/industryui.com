/**
 * Avatar
 */

// React
import React, { Component } from 'react'
import {
  any,
  func,
  number,
  objectOf,
  oneOf,
  oneOfType,
  string
} from 'prop-types'

// UI
import { BACKGROUND } from '../../'
import { CONTEXT } from '../../theme'

// Style
import styled, { withTheme } from 'styled-components'

export const Avatar = withTheme(
  class Avatar extends Component {
    static propTypes = {
      children: any,
      content: any,
      context: oneOf(Object.values(CONTEXT)),
      handleClick: func,
      style: objectOf(oneOfType([
        number,
        string
      ]))
    }

    static defaultProps = {
      context: 'primary'
    }

    render () {
      const {
        children,
        className,
        content,
        context,
        handleClick,
        style
      } = this.props

      return (
        <StyledAvatar
          className={className}
          context={context}
          onClick={handleClick}
          style={style}
        >
          {children || content}
        </StyledAvatar>
      )
    }
  }
)

// Style
const StyledAvatar = styled.div`
  align-items: center;
  ${props => BACKGROUND(props)}
  border-radius: 50%;
  color: #3a4e5f;
  display: flex;
  height: 56px;
  justify-content: center;
  min-width: 56px;
`

// .Avatar-medium {
//   font-size: 14px;
//   height: 2rem;
//   min-width: 2rem;
//   width: 2rem;
// }

// .Avatar-dark {
//   background-color: #3a4e5f;
//   color: #ecf0f3;
// }

// .Avatar-dark:hover {
//   background-color: #0679d8;
//   color: #ecf0f3;
// }
