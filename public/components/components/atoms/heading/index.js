/**
 * Heading
 * Provides the standard H1-H6 HTML tags
 */

// React
import React, { Component } from 'react'
import { any, objectOf, oneOfType, node, number, string } from 'prop-types'

// UI
import { COLOUR } from '../../'

// Style
import styled, { withTheme } from 'styled-components'

export const Heading = withTheme(
  class Heading extends Component {
    static propTypes = {
      as: string,
      children: node,
      className: any,
      content: string,
      style: objectOf(oneOfType([
        number,
        string
      ]))
    }

    static defaultProps = {
      as: 'h1'
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
const StyledComponent = styled.div`
  /* background-position: center;
  background-size: cover; */
  ${props => COLOUR(props)}
  font-family: ProximaSoft-Bold, sans-serif;
  font-size: ${props => props.as === 'h1' ? '2.25rem' : '2rem'};
  line-height: 1.22;
  margin: 0;
  position: relative;
  z-index: 2;
`
