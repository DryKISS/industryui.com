/**
 * Heading
 * Provides the standard H1-H6 HTML tags
 */

// React
import React, { Component } from 'react'
import { any, objectOf, oneOf, oneOfType, node, number, string } from 'prop-types'

// UI
import { COLOUR } from '../../'
import { CONTEXT } from '../../theme'

// Style
import styled, { withTheme } from 'styled-components'

export const Heading = withTheme(
  class Heading extends Component {
    static propTypes = {
      as: string,
      children: node,
      className: any,
      content: string,
      context: oneOf(Object.values(CONTEXT)),
      style: objectOf(oneOfType([
        number,
        string
      ]))
    }

    static defaultProps = {
      as: 'h1',
      context: 'dark'
    }

    render () {
      const { as, children, className, content, context, style } = this.props

      return (
        <StyledComponent
          as={as}
          className={className}
          context={context}
          itemProp='name headline'
          rel='bookmark'
          style={style}
        >
          { children || content }
        </StyledComponent>
      )
    }
  }
)

// Style
// Remove margin apart from bottom at 2rem
const StyledComponent = styled.span`
  ${props => COLOUR(props)}
  font-size: ${props => props.as === 'h1' ? '2.25rem' : '2rem'};
  line-height: 1.22;
  margin: 0 0 2rem 0;
  position: relative;
  z-index: 2;
`
